package com.imd.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.imd.configuration.JPAUtil;
import com.imd.entities.CategoryEntity;

@Repository
public class CategoryDAO {

	public List<CategoryEntity> getListOfCategories() {
		EntityManager entityManager = JPAUtil.startTransaction();
		List<CategoryEntity> list =  entityManager.createNamedQuery("Category.RetrieveList", CategoryEntity.class).getResultList();
		entityManager.close();
		return list;
	}
}
