package com.imd.bo;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.imd.dao.ExerciceDAO;
import com.imd.vo.ExerciceVO;

@Service
public class ExerciceBO extends BaseBO {

	@Autowired
	private ExerciceDAO exerciceDAO;
	
	public List<ExerciceVO> getListOfExercices() {
		 return exerciceDAO.getListOfExercices()
				.stream().map(s->getModelMapper().map(s, ExerciceVO.class))
				.collect(Collectors.toList());
	}
}
