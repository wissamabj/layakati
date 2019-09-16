package com.imd.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = {"com.imd.bo","com.imd.dao"})
public class SpringConfiguration {

	@Bean
	public ModelMapper modelMapper() {
	    return new ModelMapper();
	}
}
