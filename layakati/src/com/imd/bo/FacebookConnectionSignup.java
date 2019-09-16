package com.imd.bo;

import org.apache.commons.lang3.RandomStringUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionSignUp;
import org.springframework.stereotype.Service;

import com.imd.dao.UserDAO;
import com.imd.entities.UserEntity;

@Service
public class FacebookConnectionSignup implements ConnectionSignUp {

    @Autowired
    private UserDAO userDAO;

    @Override
    public String execute(Connection<?> connection) {
        System.out.println("signup === ");
        final UserEntity user = new UserEntity();
        user.setEmail(connection.getDisplayName());
        user.setPassword(RandomStringUtils.randomAlphabetic(8));
        userDAO.createUser(user);
        return user.getEmail();
    }

}