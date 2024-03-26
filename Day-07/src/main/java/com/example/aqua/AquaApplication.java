package com.example.aqua;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.aqua.Security.RegisterRequest;
import com.example.aqua.Service.AuthenticationService;
import static com.example.aqua.Entity.Role.ADMIN;
import static com.example.aqua.Entity.Role.MANAGER;

@SpringBootApplication
public class AquaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AquaApplication.class, args);
	}

	public static void hello(){
		System.out.print("HELO");
	}
		@Bean
	public CommandLineRunner commandLineRunner(AuthenticationService service) {
		return args -> {
			var admin = RegisterRequest.builder()
					.username("Admin")
					.email("admin@gmail.com")
					.password("admin")
					.role(ADMIN)
					.code("fwefs")
					.build();
			System.out.println("Admin token: " + service.register(admin).getToken());

			var manager = RegisterRequest.builder()
					.username("Manager")
					.email("manager@gmail.com")
					.password("manager")
					.role(MANAGER)
					.build();
			System.out.println("Manager token: " + service.register(manager).getToken());

		};
	}


}
