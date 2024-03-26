package com.example.aqua.Controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.aqua.Entity.HotelEntity;
import com.example.aqua.Entity.UserBooking;
import com.example.aqua.Entity.DTO.BookingRequest;
import com.example.aqua.Service.ImageuserService;
import com.example.aqua.repo.UserBookingRepoInt;

import org.springframework.http.HttpStatus;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;


@RestController
@CrossOrigin("*")
@RequestMapping("/image_user")
public class ImageUserController {
	@Autowired
	ImageuserService ius;
	@Autowired
	UserBookingRepoInt iuri;
	// @PostMapping("/Entries")
	// public String postMethodName(@RequestBody String entity) {
	// 	//TODO: process POST request
		
	// 	return entity;
	// }
	
	// @Operation(summary = "Add new image of a user")
	// @ApiResponses(value = {
	// 		@ApiResponse(responseCode = "201", description = "image posted  successfully"),
	// 		@ApiResponse(responseCode = "400", description = "Could not post image")
	// })
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping("/postimagesbyuser")
	public ResponseEntity<UserBooking>postUserImages(@RequestBody BookingRequest iue)
	{
		return ResponseEntity.ok(ius.userBookings(iue));
	}
	@Operation(summary = "Get image of a user")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "image got successfully"),
			@ApiResponse(responseCode = "400", description = "Could not image image")
	})
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping("/getuserandiamge")
	public List<UserBooking>getallbooking()
	{
		return ius.getAllBookings();
	}
	@GetMapping("/available")
    public List<UserBooking> getAvailableRooms(@RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
    @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        return ius.getAvailableRooms(startDate, endDate);
    }


//
//	@GetMapping("/byusername/{username}")
//	public List<ImageUserEntity>getuserandimageByName(@PathVariable String username)
//	{
//		return ius.getByUsername(username);
//	}	
}
