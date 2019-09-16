package com.imd.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

import com.imd.configuration.JPAUtil;
import com.imd.entities.UserEntity;

@Repository
@Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
public class UserDAO {

	public Integer createUser(UserEntity user) {
		EntityManager entityManager = JPAUtil.startTransaction();
		
		entityManager.persist(user);
		entityManager.getTransaction().commit();
		entityManager.close();
		
		return user.getId();
	}
	
	public Boolean checkUserExistByMail(String email) {
		EntityManager entityManager = JPAUtil.startTransaction();
		
		UserEntity userDTO = new UserEntity();
		userDTO.setEmail(email);
		
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<UserEntity> queryObj = builder.createQuery(UserEntity.class);
		Root<UserEntity> root = queryObj.from(UserEntity.class);
		queryObj.select(root).where(builder.equal(root.get("email"), email));
		
		List<UserEntity> userList = entityManager.createQuery(queryObj).getResultList();
		entityManager.close();
		
		return userList !=null && userList.size()>0;
	}
	
	public void updateUser(UserEntity user) {
		EntityManager entityManager = JPAUtil.getEntityManagerFactory().createEntityManager();
		UserEntity dbUser = entityManager.find(UserEntity.class, user.getId());
		dbUser.setEmail(user.getEmail());
		dbUser.setFname(user.getFname());
		dbUser.setLname(user.getLname());
		entityManager.getTransaction().begin();
		entityManager.getTransaction().commit();
		entityManager.close();
	}
}
