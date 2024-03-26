package com.example.aqua.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.aqua.Entity.UserBooking;
import com.example.aqua.Entity.HotelEntity;
import com.example.aqua.repo.hotelRepoInt;
// import com.example.aqua.repo.imageuserRepoInt;
@Service
public class hotelService implements hotelServiceInt {
 @Autowired
 private hotelRepoInt iri;
//  @Autowired
//  private imageuserRepoInt iuri;


@Override
public void postData(HotelEntity ie) {
	iri.save(ie);
	
}

@Override
public List<HotelEntity> getAllHotel() {
	// TODO Auto-generated method stub
	return iri.findAll();
}



// public List<HotelEntity> getAllImages(String username) {
	
// 	ImageUserEntity user = iuri.getByUsername(username).get(0);
	
// 	return user.getImages();
// }

// @Override
// public void updateLikeData(HotelEntity ie) {
// 	// TODO Auto-generated method stub
// 	iri.save(ie);
// }

@Override
public HotelEntity findByHotelId(int id) {
	// TODO Auto-generated method stub
	return iri.findByHotelid(id);
}

// @Override
// public List<HotelEntity> findByCategory(String category) {
// 	// TODO Auto-generated method stub
// 	return iri.findByCategory(category);
// }

@Override
public List<HotelEntity> findByHotelnameContainingIgnoreCase(String hotelname) {
	// TODO Auto-generated method stub
	return (List<HotelEntity>) iri.findByHotelnameContainingIgnoreCase(hotelname);
	
}

@Override
public void updateData(HotelEntity ie) {
	// TODO Auto-generated method stub
   
	iri.save(ie);
}

@Override
public HotelEntity addHotelimages(HotelEntity he) {
	// TODO Auto-generated method stub
	return iri.save(he);
}



}
