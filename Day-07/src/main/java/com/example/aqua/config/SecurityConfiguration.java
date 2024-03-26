package com.example.aqua.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import static com.example.aqua.Entity.Permission.ADMIN_CREATE;
import static com.example.aqua.Entity.Permission.ADMIN_DELETE;
import static com.example.aqua.Entity.Permission.ADMIN_READ;
import static com.example.aqua.Entity.Permission.ADMIN_UPDATE;
import static com.example.aqua.Entity.Permission.MANAGER_CREATE;
import static com.example.aqua.Entity.Permission.MANAGER_DELETE;
import static com.example.aqua.Entity.Permission.MANAGER_READ;
import static com.example.aqua.Entity.Permission.MANAGER_UPDATE;
import lombok.RequiredArgsConstructor;
import static com.example.aqua.Entity.Role.ADMIN;
import static com.example.aqua.Entity.Role.MANAGER;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

	private final  JwtAuthenticationFilter jwtAuthFilter;
	private final  AuthenticationProvider authenticationProvider;
	private final UserDetailsService userDetailsService;
	private final LogoutHandler logoutHandler;

        private static final String[] PublicEndPoints = {
                      
                "/swagger-ui/**",
                "/swagger-ui.html/",
                "/v3/api-docs/**"
};

	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(requests -> requests
                .requestMatchers(PublicEndPoints).permitAll()
                        .requestMatchers("/api/auth/**").permitAll()
                        .requestMatchers("/permitall/**").permitAll()
                        // .requestMatchers(GET, "/api/admin/**").permitAll()
                        .requestMatchers("/api/management/**").permitAll()
                        .requestMatchers("/image_user/**").permitAll()
                        .requestMatchers("/api/feedback/**").permitAll()
                        

                        .requestMatchers(GET, "/api/management/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
                        .requestMatchers(POST, "/api/management/**").hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
                        .requestMatchers(PUT, "/api/management/**").hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
                        .requestMatchers(DELETE, "/api/management/**").hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name())

                        .requestMatchers("/api/admin/**").hasRole(ADMIN.name())
                        .requestMatchers("/api/management/**").hasRole(MANAGER.name())


                        .requestMatchers(GET, "/api/admin/**").hasAuthority(ADMIN_READ.name())
                        .requestMatchers(POST, "/api/admin/**").hasRole(ADMIN_CREATE.name())
                        .requestMatchers(PUT, "/api/admin/**").hasRole(ADMIN_UPDATE.name())
                        .requestMatchers(DELETE, "/api/admin/**").hasAuthority(ADMIN_DELETE.name())
                        .anyRequest()
                        .authenticated())
                .sessionManagement(management -> management
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//		.logout(logout -> logout.logoutUrl("/api/v1/auth/logout").addLogoutHandler(logoutHandler).logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext()))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration cors = new CorsConfiguration();
		cors.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
		cors.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
		cors.setAllowCredentials(true);
		cors.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", cors);
		return source;
	}
}
