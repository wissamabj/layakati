package com.imd.bo;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.imd.dao.WorkoutDAO;
import com.imd.vo.WorkoutVO;

@Service
public class WorkoutBO extends BaseBO {

	@Autowired
	private WorkoutDAO workoutDAO;
	
	public List<WorkoutVO> getListOfWorkouts() {
		 return workoutDAO.getListOfWorkouts()
				.stream().map(s->getModelMapper().map(s, WorkoutVO.class))
				.collect(Collectors.toList());
	}
}
