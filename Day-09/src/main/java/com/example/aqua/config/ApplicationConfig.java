package com.example.aqua.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
// import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.ui.freemarker.FreeMarkerConfigurationFactoryBean;

import com.example.aqua.repo.UserRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

	private final UserRepository repository;
	 @Bean
	    public UserDetailsService userDetailsService() {
	        return username -> repository.findByUsername(username)
	                .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
	    }

	    @Bean
	    public AuthenticationProvider authenticationProvider() {
	        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
	        daoAuthenticationProvider.setUserDetailsService(userDetailsService());
	        daoAuthenticationProvider.setPasswordEncoder(passworEncoder());
	        return daoAuthenticationProvider;
	    }

	    @Bean
	    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
	            throws Exception {
	        return authenticationConfiguration.getAuthenticationManager();
	    }

	    @Bean
	    public PasswordEncoder passworEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	// 	 @Bean
    // 	public FreeMarkerConfigurationFactoryBean getFreeMarkerConfiguration() {
    //     FreeMarkerConfigurationFactoryBean fmConfigFactoryBean = new FreeMarkerConfigurationFactoryBean();
    //     fmConfigFactoryBean.setTemplateLoaderPath("/templates/");
    //     return fmConfigFactoryBean;
    // }
}
