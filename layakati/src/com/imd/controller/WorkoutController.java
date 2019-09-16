package com.imd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.imd.bo.CategoryBO;
import com.imd.bo.ExerciceBO;
import com.imd.bo.WorkoutBO;
import com.imd.vo.CategoryVO;
import com.imd.vo.ExerciceVO;
import com.imd.vo.WorkoutVO;

@Controller
public class WorkoutController {

	@Autowired
	private WorkoutBO workoutBO;
	
	@Autowired
	private ExerciceBO exerciceBO;
	
	@Autowired
	private CategoryBO categoryBO;

	@RequestMapping("/home")
	public ModelAndView getTestData() {

		List<WorkoutVO> workoutVO = workoutBO.getListOfWorkouts();
		List<ExerciceVO> exerciceVO = exerciceBO.getListOfExercices();
		List<CategoryVO> categoryVO = categoryBO.getListOfCategories();

		ModelAndView mv = new ModelAndView();
		mv.setViewName("home");
		mv.getModel().put("workout", workoutVO);
		mv.getModel().put("exercice", exerciceVO);
		mv.getModel().put("category", categoryVO);

		return mv;
	}

	public WorkoutBO getWorkoutBO() {
		return workoutBO;
	}

	
	public void setWorkoutBO(WorkoutBO workoutBO) {
		this.workoutBO = workoutBO;
	}
}
