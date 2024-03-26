package com.example.aqua.Entity;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
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
@Table(name = "UserDetails")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "username")
	private String username;
	@Column(name = "profileurl")
	private String profileurl;
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;
	@Column(name = "code")
	private String code;
	@Column(name = "isactive")
	private boolean isactive;

	// @OneToMany
	// @JoinColumn(name = "booking_id", referencedColumnName = "id")
    // private List<UserBooking> userBooking;

	// private Set<Integer> likes = new HashSet<>();


}