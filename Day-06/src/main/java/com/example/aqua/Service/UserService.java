package com.example.aqua.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.aqua.Entity.User;
import com.example.aqua.Repo.UserRepo;




@Service
public class UserService implements UserServiceInt {
		
		
	@Autowired
	private UserRepo iri;

    @Override
    public List<User> getData() {
        // TODO Auto-generated method stub
        return iri.findAll();
    }

    @Override
    public void postData(User se) {
        // TODO Auto-generated method stub
        iri.save(se);
    }

    @Override
    public void updateData(User se) {
        // TODO Auto-generated method stub
        iri.save(se);
    }

    @Override
    public void deleteData(int id) {
        // TODO Auto-generated method stub
        return;
    }
	
	

	
	
	

	
}