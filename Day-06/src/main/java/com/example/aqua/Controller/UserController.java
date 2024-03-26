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
import com.example.aqua.Repo.UserRepo;
import com.example.aqua.Service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService ss;
	
	@Autowired
	private UserRepo sri;


	
    @PostMapping("/postuser")
    public String postUserdet(@RequestBody User user) {
        //TODO: process POST request
        ss.postData(user);
        return "posted user";
    }
    

	// @GetMapping("/userimage/{id}")

	

}