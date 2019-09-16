package com.imd.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.imd.configuration.JPAUtil;
import com.imd.entities.WorkoutEntity;

@Repository
public class WorkoutDAO {

	public List<WorkoutEntity> getListOfWorkouts() {
		EntityManager entityManager = JPAUtil.startTransaction();
		List<WorkoutEntity> list =  entityManager.createNamedQuery("Workout.RetrieveList", WorkoutEntity.class).getResultList();
		entityManager.close();
		return list;
	}
	
}
