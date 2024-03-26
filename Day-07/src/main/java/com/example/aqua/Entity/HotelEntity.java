package com.example.aqua.Entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

 
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name="HotelDetails")
public class HotelEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="hotelid")
	private int hotelid;
	@Column(name="hotelname")
	private String hotelname;
	@Column(name="Location")
	private String location;
	@Column(name="saved")
	private boolean saved;
	@Column(name="contact")
	private String contact;
	@Column(name="Rooms")
	private int rooms;
	@Column(name="Rooms_available")
	private int roomsAvailable;
	@Column(name="cost_per_room")
	private int cost;
	@Column(name="gallery")
	private List<String> gallery;
}
