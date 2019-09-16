package com.imd.test;

import static org.junit.Assert.assertNotEquals;

import javax.persistence.EntityManager;

import org.junit.Test;

import com.imd.configuration.JPAUtil;

public class TestJPAConnection {

	@Test
	public void testConnection() {
		EntityManager entityManager = JPAUtil.getEntityManagerFactory().createEntityManager();
		entityManager.getTransaction().begin();

		// Check database version
		String sql = "select version()";

		String result = (String) entityManager.createNativeQuery(sql).getSingleResult();
		System.out.println("result == "+result);

		entityManager.getTransaction().commit();
		entityManager.close();

		JPAUtil.shutdown();
		assertNotEquals(result, "");
	}
}
