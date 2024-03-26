 package com.example.aqua.repo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.aqua.Entity.UserBooking;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param; 
import org.springframework.stereotype.Repository;

import com.example.aqua.Entity.UserBooking;

 @Repository
 public interface UserBookingRepoInt extends JpaRepository<UserBooking, Integer> {
    @Query("SELECT u FROM UserBooking u WHERE u.username = ?1")
    public List<UserBooking> getByUsername(String username);
     List<UserBooking> findByStartdateLessThanEqualAndEnddateGreaterThanEqual(LocalDate endDate, LocalDate startDate);

     public List<UserBooking> findByEnddateBefore(LocalDate currentDate);
}
