package com.imd.entities;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "workout")
@NamedQuery(name = "Workout.RetrieveList", query = "SELECT w FROM WorkoutEntity w")
public class WorkoutEntity extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String thumbnail;
	private String pic;
	private String title;
	private String slogan;
	private Integer duration;
	private Integer price;
	private String currency;
	private String youtube;
	private String description;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "workout_exercice", joinColumns = { @JoinColumn(name = "workout_id") }, inverseJoinColumns = {
			@JoinColumn(name = "exercice_id") })
	private Set<ExerciceEntity> exerciceList;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "workout_objective", joinColumns = { @JoinColumn(name = "workout_id") }, inverseJoinColumns = {
			@JoinColumn(name = "objective_id") })
	private Set<ObjectiveEntity> objectiveList;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "workout_equipment", joinColumns = { @JoinColumn(name = "workout_id") }, inverseJoinColumns = {
			@JoinColumn(name = "equipment_id") })
	private Set<EquipmentEntity> equipmentList;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "workout_level", joinColumns = { @JoinColumn(name = "workout_id") }, inverseJoinColumns = {
			@JoinColumn(name = "level_id") })
	private Set<LevelEntity> levelList;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "workout_category", joinColumns = { @JoinColumn(name = "workout_id") }, inverseJoinColumns = {
			@JoinColumn(name = "category_id") })
	private Set<CategoryEntity> categoryList;

	public WorkoutEntity() {
		super();
	}

	public WorkoutEntity(String thumbnail, String pic, String title, String slogan, Integer duration, Integer price,
			String currency, String youtube, String description) {
		super();
		this.thumbnail = thumbnail;
		this.pic = pic;
		this.title = title;
		this.slogan = slogan;
		this.duration = duration;
		this.price = price;
		this.currency = currency;
		this.youtube = youtube;
		this.description = description;
	}

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

	public String getPic() {
		return pic;
	}

	public void setPic(String pic) {
		this.pic = pic;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSlogan() {
		return slogan;
	}

	public void setSlogan(String slogan) {
		this.slogan = slogan;
	}

	public Integer getDuration() {
		return duration;
	}

	public void setDuration(Integer duration) {
		this.duration = duration;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getYoutube() {
		return youtube;
	}

	public void setYoutube(String youtube) {
		this.youtube = youtube;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<ExerciceEntity> getExerciceList() {
		return exerciceList;
	}

	public void setExerciceList(Set<ExerciceEntity> exerciceList) {
		this.exerciceList = exerciceList;
	}

	public Set<ObjectiveEntity> getObjectiveList() {
		return objectiveList;
	}

	public void setObjectiveList(Set<ObjectiveEntity> objectiveList) {
		this.objectiveList = objectiveList;
	}

	public Set<EquipmentEntity> getEquipmentList() {
		return equipmentList;
	}

	public void setEquipmentList(Set<EquipmentEntity> equipmentList) {
		this.equipmentList = equipmentList;
	}

	public Set<LevelEntity> getLevelList() {
		return levelList;
	}

	public void setLevelList(Set<LevelEntity> levelList) {
		this.levelList = levelList;
	}

	public Set<CategoryEntity> getCategoryList() {
		return categoryList;
	}

	public void setCategoryList(Set<CategoryEntity> categoryList) {
		this.categoryList = categoryList;
	}

}
