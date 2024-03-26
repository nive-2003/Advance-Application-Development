package com.example.aqua.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.aqua.Entity.User;
import com.example.aqua.Service.loginService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import com.example.aqua.Service.UserService;

@RestController
@RequestMapping("/api/auth/login")
@CrossOrigin("*")
@Tag(name = "Login", description = "Endpoints for login details")

public class loginController {
	@Autowired
	private loginService ls;
	@Autowired
	private UserService ss;

	@GetMapping("/getdata")
	    @Operation(summary = "Retrieve registered user", description = "Retrieves dynamic user data from that have registered")
	public List<User> getdata() {
		return ls.getData();
	}

//	@GetMapping("/login/{username}/{password}")
//	public String getbyusername(@PathVariable String username, @PathVariable String password) {
//		List<User> obj = new ArrayList<>();
//		obj = ls.findByUsernameAndPassword(username, password);
//		if (obj.isEmpty()) {
//			return "login failed";
//		} else {
//			return "login sucessfully";
//		}
//	}

	@GetMapping("/update-image/{username}")
	@Operation(summary = "Updates user profile", description = "Updates user profile so user can change profile")

	public String updateProfilePic(@PathVariable String username,@RequestParam String dp )
	{
//		try {
//			byte[] decodedBytes = Base64.getDecoder().decode(base64Image);
//			String decodedImage = new String(decodedBytes);
//		
		User user = ss.findByUsername(username);
		
		if(user!=null)
		{
			user.setProfileurl(dp);
			ss.updateData(user);
			return "PROFILE PIC UPDATED";
		}
//		else
			return "something went wrong";
//	}catch(Exception e)
//		{
//		return "error";
//		}
	}

}
