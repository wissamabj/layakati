package com.imd.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.imd.configuration.JPAUtil;
import com.imd.entities.ExerciceEntity;

@Repository
public class ExerciceDAO {

	public List<ExerciceEntity> getListOfExercices() {
		EntityManager entityManager = JPAUtil.startTransaction();
		List<ExerciceEntity> list =  entityManager.createNamedQuery("Exercice.RetrieveList", ExerciceEntity.class).getResultList();
		entityManager.close();
		return list;
	}
}
