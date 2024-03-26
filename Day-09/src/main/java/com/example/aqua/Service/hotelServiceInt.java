package com.example.aqua.Service;

import java.util.List;

import com.example.aqua.Entity.HotelEntity;

public interface hotelServiceInt {
	public void postData(HotelEntity ie);
	public List<HotelEntity> getAllHotel();
	// public void updateLikeData(HotelEntity se);
	public HotelEntity findByHotelId(int id);
	// public List<HotelEntity>findByCategory(String category);
	public void updateData(HotelEntity ie);
	public List<HotelEntity>findByHotelnameContainingIgnoreCase(String imagecaption);
	public HotelEntity addHotelimages(HotelEntity he);

}
