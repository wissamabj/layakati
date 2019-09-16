package com.imd.test;

import static org.junit.Assert.assertTrue;

import java.util.List;

import javax.persistence.EntityManager;

import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.imd.bo.WorkoutBO;
import com.imd.configuration.JPAUtil;
import com.imd.configuration.SpringConfiguration;
import com.imd.entities.ExerciceEntity;
import com.imd.entities.UserEntity;
import com.imd.vo.WorkoutVO;

public class TestDBCRUDWorkoutData {

	AnnotationConfigApplicationContext context;
	{
		context = 
	            new AnnotationConfigApplicationContext(SpringConfiguration.class);
	}
	
	@Test
	public void testWorkoutList() {
		WorkoutBO workoutBO = context.getBean(WorkoutBO.class);
		List<WorkoutVO> workoutList = workoutBO.getListOfWorkouts();
		assertTrue(workoutList.size()>0);
		workoutList
		.stream()
		.forEach(s->System.out.println(s.getId()
				+"-"+s.getPic()
				+"-"+s.getThumbnail()
				+"-"+s.getTitle()
				+"-"+s.getDuration()
				+"-"+s.getPrice()
				+"-"+s.getCurrency()
				+"-"+s.getDescription()));
		
	}
	
	
	
}
