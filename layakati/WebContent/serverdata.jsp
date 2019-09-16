<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
var workoutTable=[];
	<c:forEach items="${workout}" var="workout">
		

		var workout={		workoutId:"workout-${workout.id}", 
							workoutThumbnail:"${workout.thumbnail}",
							workoutPic:"${workout.pic}",
							workoutTitle:"${workout.title}",
							workoutSlogan:"${workout.slogan}",
							workoutDuration:"${workout.duration} min",
							workoutPrice:"${workout.price} ${workout.currency}",
							workoutYoutube:"${workout.youtube}",
							workoutLevel:[
								<c:forEach items="${workout.levelList}" var="level">
				                  "${level.description}",
		                  		</c:forEach>
							],
							workoutObjective:[
								<c:forEach items="${workout.objectiveList}" var="objective">
				                  "${objective.description}",
		                  		</c:forEach>
							],
							workoutEquipment:[
								<c:forEach items="${workout.equipmentList}" var="equipment">
				                  "${equipment.description}",
		                  		</c:forEach>
							],
							workoutCategories:[
								<c:forEach items="${workout.categoryList}" var="category">
				                  "${category.id}",
		                  		</c:forEach>
							],
							workoutDescription:"${workout.description}",
							workoutExercices:[
								<c:forEach items="${workout.exerciceList}" var="exercice">
					                  {exerciceId:"ex-${exercice.id}", completed: true},
		                  		</c:forEach>
							]
						};
		workoutTable.push(workout);	 
	 </c:forEach>
	 
	 var exerciceTable = [];
	 <c:forEach items="${exercice}" var="exercice">
	 	var exercice={
	 					exerciceId:"ex-${exercice.id}",
						exerciceThumbnail:"${exercice.thumbnail}", 
						exerciceVideo:"${exercice.video}", 
						exerciceDescription:"${exercice.description}", 
						exerciceTitle:"${exercice.title}",
	 				};
	 	exerciceTable.push(exercice);
	 </c:forEach>

		
		
		
		var cartTable=[{elementType:"w", elementId:"workout-3"}];
		var purchasedTable=[{elementType:"w", elementId:"workout-3"}, {elementType:"w", elementId:"workout-4"}];
		
		var subTotalStr="101.00 USD";
		var cartItemsNumber=1;
		
		var contactPhoneNumber="+961 70 22 66 75";
		var contactEmail="info@layakati.com";
		var contactAddress="Zouk Mosbeh, Lebanon";
		
	 var categories = [];
	 <c:forEach items="${category}" var="category">
	 	var category={
	 		categoryId:"${category.id }",
	 		categoryLabel:"${category.description }"};
	 	categories.push(category);
	 </c:forEach>
		
