package com.example.aqua.Controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.aqua.Entity.User;
import com.example.aqua.Service.EmailService;
import com.example.aqua.Service.UserService;
import com.example.aqua.repo.UserRepoInt;

import jakarta.mail.MessagingException;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService ss;
	@Autowired
	private EmailService es;
	@Autowired
	private UserRepoInt sri;
	// @PutMapping("/updateData/{id}/{email}/{username}")
	// public String updateDetails(@PathVariable int id,@PathVariable String email,@PathVariable String username) {

	// 	User user =   ss.findByUserId(id);
	// 	System.out.print(user);
	// 		if(user!=null)
	// 		{
	// 			user.setEmail(email);
	// 			user.setUsername(username);
	// 			ss.updateData(user);
	// 		}
			
	// 	return "updated sucessfully";
	// }
	
	@PutMapping("/updatePassword/{email}/{password}/{code}")
	public String UpdatePassword(@PathVariable String email, @PathVariable String password, @PathVariable String code) {
		User user = ss.findByEmail(email);
		if (user != null) {
			user.setPassword(password);
			user.setCode(code);
			ss.updateData(user);
			return "PASSWORD CHANGED";
		} else
			return "Email not Found";
	}
	
	// @PostMapping(value = "/get-code/{email}")
	// public ResponseEntity<String> sendCodeEmail(@PathVariable String email) {
	// 	User se = sri.findByEmail(email);
	// 	if (se != null) {
	// 		try {
	// 			String subject = "your code";
	// 			try {
	// 				es.sendEmail(email, se.getCode(), subject);
	// 			} catch (IOException e) {
	// 				// TODO Auto-generated catch block
	// 				e.printStackTrace();
	// 			}
	// 			return ResponseEntity.ok("Email sent successfully");
	// 		} catch (MessagingException e) {
	// 			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email");
	// 		}
	// 	} else {
	// 		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
	// 	}
	// }

	@GetMapping("/checkcode/{email}/{code}")
	public String getbyemail(@PathVariable String email, @PathVariable String code) {
		List<User> obj = new ArrayList<>();
		obj = ss.findByEmailAndCode(email, code);
		if (obj.isEmpty()) {
			return "verification failed";
		} else {
			return "verified";
		}
	}

	@GetMapping("/getdetail/{username}")
	public List<User> getDetail(@PathVariable String username) {
		return ss.getUserbyname(username);
	}

	// @GetMapping("/userimage/{id}")
	// public List<User> userImage(int id) {
	// 	return ss.findById(id);
	// }
//	@DeleteMapping("/rty/{id}")
//	public String deldata(@PathVariable int id)
//	{
//		ss.deleteParentAndChildren(id);
//		return "deltef";
//	}
	

}
