package com.imd.bo;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.imd.dao.UserDAO;
import com.imd.entities.UserEntity;
import com.imd.vo.UserVO;

@Service
@Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
public class UserBO {

	@Autowired
	private UserDAO userDAO;

	@Autowired
	private ModelMapper modelMapper;

	public Boolean checkUserExistByMail(String email) {
		return userDAO.checkUserExistByMail(email);
	}

	public void updateUser(UserVO user) {
		UserEntity userEntity = modelMapper.map(user, UserEntity.class);
		userDAO.updateUser(userEntity);
	}

}
