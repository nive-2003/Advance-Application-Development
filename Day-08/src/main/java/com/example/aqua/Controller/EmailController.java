package com.example.aqua.Controller;

import java.util.HashMap;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.aqua.Entity.DTO.MailRequest;
import com.example.aqua.Entity.DTO.MailResponse;
import com.example.aqua.Service.EmailService;

import jakarta.mail.MessagingException;


@RestController
@RequestMapping("/api/auth")
public class EmailController {
    	@Autowired
	private EmailService service;
	
	@PostMapping("/sendingEmail")
	public MailResponse sendEmail(@RequestBody MailRequest request) throws MessagingException {
		
	    String otp = service.generateOTP(); // Generate OTP
	    
	    // Prepare data model for the email template
	    Map<String,Object> model = new HashMap<>();
	    model.put("Name", request.getName());
	    model.put("location", "Bangalore,India");
	    model.put("otp", otp); // Add OTP to the model
	    
	    // Send email with the OTP
	    return service.sendEmail(request, model);
		
	}

}
