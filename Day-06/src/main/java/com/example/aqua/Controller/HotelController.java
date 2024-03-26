package com.example.aqua.Controller;


import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.aqua.Entity.Hotel;
import com.example.aqua.Repo.UserRepo;
import com.example.aqua.Service.HotelService;
import com.example.aqua.Service.UserServiceInt;



@RestController
@CrossOrigin("*")
public class HotelController {
	@Autowired
	private HotelService is;
	@Autowired
	private UserServiceInt ss;
	@Autowired
	private UserRepo sri;
	
	// @GetMapping("/image/{category}")
	// public List<HotelEntity>getImageByCategory(@PathVariable String category)
	// {
	// 	return is.findByCategory(category);
	// }
	
	@PostMapping("/hotel/savedata")
	public String savedata(@RequestBody Hotel ie)
	{	
		is.postData(ie);
		return "hotel added";	
	}
	@GetMapping("/hotel/data")
	public List<Hotel>getHotelData()
	{
		return is.getAllHotel();
	}
	
	
	// @PostMapping(value = "/hotelimages/{hotelid}/{gallery}")
	// public String hotelImages(@PathVariable int hotelid,@PathVariable String gallery) { 
	// 	//TODO: process POST request
	// 	HotelEntity he  = is.findByHotelId(hotelid);
	// 	// System.out.print("---------------------"+hotelid);
	// 	List<String>gal = he.getGallery();
	// 	gal.add(gallery);
	// 	// he.setGallery(add(img));
	// 	is.addHotelimages(he);
	// 	return "image added";
	// }
}