package com.imd.test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import javax.persistence.EntityManager;

import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.imd.bo.UserBO;
import com.imd.configuration.JPAUtil;
import com.imd.configuration.SpringConfiguration;
import com.imd.entities.UserEntity;
import com.imd.vo.UserVO;

public class TestDBCRUDUserData {
	AnnotationConfigApplicationContext context;
	{
		context = 
	            new AnnotationConfigApplicationContext(SpringConfiguration.class);
	}

	@Test
	public void fillUserDataTest() {
		
		if(!getUserId().getFname().equals("Celine")) {
		
			UserEntity user = new UserEntity("Celine", "ABJ", "celine@test.com");
			EntityManager entityManager = JPAUtil.startTransaction();
			
			entityManager.persist(user);
			entityManager.getTransaction().commit();
			entityManager.close();
			
			assertNotNull(user.getId());
		}
		assertNotNull(getUserId());
		printListOfUsers();
	}
	
	private UserEntity getUserId() {
		EntityManager entityManager = JPAUtil.startTransaction();
		
		UserEntity userDTO = entityManager.find(UserEntity.class, 2);
		return userDTO;
		
	}
	
	@Test
	public void checkUserExistByMailTest() {
		UserEntity user = new UserEntity();
		user.setEmail("celine@test.com");
		
		UserBO userBO = context.getBean(UserBO.class);
		assertFalse(userBO.checkUserExistByMail("wissam@test.com"));
		assertTrue(userBO.checkUserExistByMail("celine@test.com"));
	}
	
	private void printListOfUsers() {
		EntityManager entityManager = JPAUtil.startTransaction();
		
		entityManager.createNamedQuery("User.RetrieveList", UserEntity.class)
		.getResultList()
		.stream()
		.forEach(s -> System.out.println(s.getId()+"-"+s.getFname()+"-"+s.getLname()+"-"+s.getEmail()));
		
	}
	
	@Test
	public void updateUserTest() {
		UserVO userVO = new UserVO();
		userVO.setId(1);
		userVO.setFname("Wissam");
		userVO.setLname("ABJ");
		userVO.setEmail("wissam@mail.com");
		
		UserBO userBO = context.getBean(UserBO.class);
		userBO.updateUser(userVO);
		
	}
}
