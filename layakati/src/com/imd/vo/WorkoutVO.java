package com.imd.vo;

import java.util.Set;

public class WorkoutVO extends BaseVO {

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

	private Set<ObjectiveVO> objectiveList;
	private Set<ExerciceVO> exerciceList;
	private Set<LevelVO> levelList;
	private Set<EquipmentVO> equipmentList;
	private Set<CategoryVO> categoryList;

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

	public Set<ObjectiveVO> getObjectiveList() {
		return objectiveList;
	}

	public void setObjectiveList(Set<ObjectiveVO> objectiveList) {
		this.objectiveList = objectiveList;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Set<ExerciceVO> getExerciceList() {
		return exerciceList;
	}

	public void setExerciceList(Set<ExerciceVO> exerciceList) {
		this.exerciceList = exerciceList;
	}

	public Set<LevelVO> getLevelList() {
		return levelList;
	}

	public void setLevelList(Set<LevelVO> levelList) {
		this.levelList = levelList;
	}

	public Set<EquipmentVO> getEquipmentList() {
		return equipmentList;
	}

	public void setEquipmentList(Set<EquipmentVO> equipmentList) {
		this.equipmentList = equipmentList;
	}

	public Set<CategoryVO> getCategoryList() {
		return categoryList;
	}

	public void setCategoryList(Set<CategoryVO> categoryList) {
		this.categoryList = categoryList;
	}

}
