package com.example.aqua.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.aqua.Security.AuthenticationRequest;
import com.example.aqua.Security.AuthenticationResponse;
import com.example.aqua.Security.RegisterRequest;
import com.example.aqua.Service.AuthenticationService;
import com.example.aqua.Service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Endpoints for user authentication")

public class AuthenticationController {

	private final AuthenticationService service;
	@Autowired
	private UserService ss;

	@GetMapping("/hello")
	public ResponseEntity<String> sayHello() {
		return ResponseEntity.ok("Hello");
	}

	@PostMapping("/register")
	    @Operation(summary = "Register a new user", description = "Allows users to register by providing necessary registration details.")
	public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
		String username = request.getUsername();
		String email = request.getEmail();
		boolean checkEmail = ss.signupemail(email);
		boolean checkUsername = ss.signupuser(username);
		AuthenticationResponse authenticationResponse = new AuthenticationResponse();
		if (!checkEmail && !checkUsername) {
//			ss.postData(ss);
//			service.register(request);
			AuthenticationResponse register = service.register(request);
			
			register.setMessage(" signup successfull");

			return ResponseEntity.ok(register);
		} 
		
		else {
			if (checkEmail)
				authenticationResponse.setMessage( " Email already exist");
			else
				authenticationResponse.setMessage(" Username already exist");
//			authenticationResponse.setMessage("notttt");
			return ResponseEntity.ok(authenticationResponse);
		}
		
//		return new ResponseEntity<>()
		
	}

	@PostMapping("/authenticate")
	@Operation(summary = "Authenticate user", description = "Allows users to authenticate by providing valid login credentials.")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
//		System.out.println("hi");
		return ResponseEntity.ok(service.authenticate(request));
	}
	
	@PutMapping("/changepassword/{code}/{password}/{email}")
	public String changepass(@PathVariable String code,@PathVariable String email,@PathVariable String password)
	{
		service.updatePassword(code,email, password);
		return "password changed";
	}

}
