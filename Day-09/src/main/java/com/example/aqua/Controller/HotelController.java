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

import com.example.aqua.Entity.HotelEntity;
import com.example.aqua.Service.UserService;
import com.example.aqua.Service.hotelService;
import com.example.aqua.repo.UserRepoInt;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin("*")
@RequestMapping("/permitall")
@Tag(name = "Hotel", description = "Endpoints for Hotels")
public class HotelController {
	@Autowired
	private hotelService is;
	@Autowired
	private UserService ss;
	@Autowired
	private UserRepoInt sri;
	
	// @GetMapping("/image/{category}")
	// public List<HotelEntity>getImageByCategory(@PathVariable String category)
	// {
	// 	return is.findByCategory(category);
	// }
	
	@PostMapping("/hotel/savedata")
	@Operation(summary = "Post Hotel details", description = "Adds data for a new hotel registration")

	public String savedata(@RequestBody HotelEntity ie)
	{	
		is.postData(ie);
		return "hotel added";	
	}
	@GetMapping("/hotel/data")
	@Operation(summary = "Retrieve all hotels data", description = "Retrieves dynamic hotel data that has been registered")
	public List<HotelEntity>getHotelData()
	{
		return is.getAllHotel();
	}

	@GetMapping("/gg")
	public String getSumme() {
		return "HELLO";
	}
	
	// @GetMapping("/{username}/getAll")
	// public ResponseEntity<List<HotelEntity>> getAllImages(@PathVariable String username) {
	// 	return ResponseEntity.ok(is.getAllHotel(username));
	// }
	
	// @PutMapping("/updateimage/likes/{imageid}/{username}")
	// public String updatelike(@PathVariable int imageid,@PathVariable String username)
	// {
	// 	HotelEntity image = is.findByHotelId(imageid);
		// User user = ss.findByUsername(username);
		// if(user.getLikes()==null) {
		// 	Set<Integer> likes = new HashSet<>();
		// 	user.setLikes(likes);
		// }
		// if(user.getLikes().add(imageid))
		// {
		// 	image.setLikes(image.getLikes()+1);
		// 	is.updateLikeData(image);
		// 	sri.save(user);
		// 	return "likes added";
		// }
		// else 
		// {
		// 	image.setLikes(image.getLikes()-1);
		// 	is.updateLikeData(image);
		// 	user.getLikes().remove(imageid);
		// 	sri.save(user);
		// 	return "likes removed";
		// }
	// }

	@GetMapping(value = "/getbytitle/{hotelname}")
	@Operation(summary = "Retrieve hotel by names", description = "Retrieves dynamic hotel data from database by username")

	private ResponseEntity<Object> getEstatebyname(@PathVariable String hotelname) {
		List<HotelEntity> estateModel = is.findByHotelnameContainingIgnoreCase(hotelname);
		return new ResponseEntity<>(estateModel, HttpStatus.OK);
	}
	// @PutMapping("/updateimageData/{imageid}/{category}/{description}")
	// public String updateDetails(@PathVariable int imageid,@PathVariable String category,@PathVariable String description) {
	// 	HotelEntity ie =   is.findByHotelId(imageid);
	// 	System.out.print(ie);
	// 		if(ie!=null)
	// 		{
	// 			ie.setCategory(category);
	// 			ie.setDescription(description);
	// 			is.updateData(ie);
	// 		}
			
	// 	return "updated info sucessfully";
	// }
	@PostMapping(value = "/hotelimages/{hotelid}/{gallery}")
	@Operation(summary = "post hotel images", description = "post mulitple hotel images")

	public String hotelImages(@PathVariable int hotelid,@PathVariable String gallery) { 
		//TODO: process POST request
		HotelEntity he  = is.findByHotelId(hotelid);
		// System.out.print("---------------------"+hotelid);
		List<String>gal = he.getGallery();
		gal.add(gallery);
		// he.setGallery(add(img));
		is.addHotelimages(he);
		return "image added";
	}
}
