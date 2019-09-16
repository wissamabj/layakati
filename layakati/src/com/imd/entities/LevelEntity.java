package com.imd.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "level")
public class LevelEntity extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String description;

	@ManyToMany(mappedBy = "levelList", fetch = FetchType.EAGER)
	private List<WorkoutEntity> workoutList = new ArrayList<WorkoutEntity>();

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<WorkoutEntity> getWorkoutList() {
		return workoutList;
	}

	public void setWorkoutList(List<WorkoutEntity> workoutList) {
		this.workoutList = workoutList;
	}

}
