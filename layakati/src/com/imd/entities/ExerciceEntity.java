package com.imd.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "exercice")
@NamedQuery(name = "Exercice.RetrieveList", query = "SELECT e FROM ExerciceEntity e")
public class ExerciceEntity extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String thumbnail;
	private String video;
	private String description;
	private String title;
	
	public ExerciceEntity() {
		super();
	}
	
	public ExerciceEntity(String thumbnail, String video, String description, String title) {
		super();
		this.thumbnail = thumbnail;
		this.video = video;
		this.description = description;
		this.title = title;
	}

	@ManyToMany(mappedBy = "exerciceList", fetch = FetchType.EAGER)
	private List<WorkoutEntity> workoutList = new ArrayList<WorkoutEntity>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	public String getVideo() {
		return video;
	}

	public void setVideo(String video) {
		this.video = video;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<WorkoutEntity> getWorkoutList() {
		return workoutList;
	}

	public void setWorkoutList(List<WorkoutEntity> workoutList) {
		this.workoutList = workoutList;
	}
}
