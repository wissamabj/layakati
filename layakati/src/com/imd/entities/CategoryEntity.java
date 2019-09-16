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
@Table(name = "category")
@NamedQuery(name = "Category.RetrieveList", query = "SELECT c FROM CategoryEntity c")
public class CategoryEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String description;

	@ManyToMany(mappedBy = "categoryList", fetch = FetchType.EAGER)
	private List<WorkoutEntity> workoutList = new ArrayList<WorkoutEntity>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
