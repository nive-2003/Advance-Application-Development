package com.example.aqua.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.aqua.Entity.HotelEntity;
import com.example.aqua.Entity.User;

@Repository
public interface hotelRepoInt extends JpaRepository<HotelEntity, Integer> {
	public HotelEntity findByHotelid(int id);
	public HotelEntity deleteById(int id);
	List<HotelEntity> findById(int id);
	// List<HotelEntity>findByCategory(String category);
	List<HotelEntity>findByHotelnameContainingIgnoreCase(String hotelname);

}
