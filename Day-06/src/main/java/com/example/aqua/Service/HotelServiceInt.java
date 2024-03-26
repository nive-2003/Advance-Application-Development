package com.example.aqua.Service;

import java.util.List;

import com.example.aqua.Entity.Hotel;



public interface HotelServiceInt {
	public void postData(Hotel ie);
	public List<Hotel> getAllHotel();
	// public void updateLikeData(Hotel se);
	// public Hotel findByHotelId(int id);
	// public List<Hotel>findByCategory(String category);
	public void updateData(Hotel ie);
	
}