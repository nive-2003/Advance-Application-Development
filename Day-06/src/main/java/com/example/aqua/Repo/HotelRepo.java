package com.example.aqua.Repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.aqua.Entity.Hotel;


@Repository
public interface HotelRepo extends JpaRepository<Hotel, Integer> {
	

}