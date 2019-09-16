package com.imd.bo;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.imd.dao.CategoryDAO;
import com.imd.vo.CategoryVO;

@Service
public class CategoryBO extends BaseBO {

	@Autowired
	private CategoryDAO categoryDAO;
	
	public List<CategoryVO> getListOfCategories() {
		 return categoryDAO.getListOfCategories()
				.stream().map(s->getModelMapper().map(s, CategoryVO.class))
				.collect(Collectors.toList());
	}
}
