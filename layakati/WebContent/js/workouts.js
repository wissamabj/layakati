	
/* Workout Section*/
function filterWorkout(filterCategory){
	$.each($("#lk-filter-by a"), function( index, item ) {
		if($(item).attr("data-category") === filterCategory){
			if($(item).hasClass("active") === false){
				$(item).addClass("active");
			}
		}else{
			$(item).removeClass("active");
		}
		
	});
	
	$.each($("#lk-workouts-list .lk-workout-card"), function( index, workoutCard ) {
		
		var workoutElement = getWorkoutFromId($(workoutCard).attr('id'));
		var workoutCategories = workoutElement.workoutCategories;
		
		var showElement=false;
		
		if($.inArray(filterCategory, workoutCategories) != -1){
			showElement=true;
		}

		
		
		if(showElement===false){
			$(workoutCard).parent().css("display","none");
		}else{
			$(workoutCard).parent().css("display","inline-block");
		}
		
	});
	
	
}

function drawWorkoutCards(){
/*	workoutId:"workout-1", 
	workoutThumbnail:"img/thumbnails/thumb-workout-adv-kettlbells.jpg",
	workoutPic:"img/workouts/workout-adv-kettlbells.jpg",
	workoutTitle:"ADVANCED KETTLEBELLS",
	workoutSlogan:"Move it",
	workoutPrice:"60.00 USD",
	workoutPeriod:"12 weeks",
	workoutLevel:["Intermediate","Advanced"],
	workoutObjective:["Fat loss","Muscle Growth"],
	workoutEquipment:["Gym"]*/
	$("#lk-workouts-list").empty();
	$.each(workoutTable, function( index, workout ) {
		/*Level Management*/
		var applyBeginnerLevel=((workout.workoutLevel.indexOf("Beginner")!==-1) ? ' apply ' : ' ');
		var applyIntermediateLevel=((workout.workoutLevel.indexOf("Intermediate")!==-1) ? ' apply ' : ' ');
		var applyAdvancedLevel=((workout.workoutLevel.indexOf("Advanced")!==-1) ? ' apply ' : ' ');
		
		var applyBeginnerIntermediateLevel=((workout.workoutLevel.indexOf("Beginner")!==-1 && workout.workoutLevel.indexOf("Intermediate")!==-1) ? ' apply ' : ' ');
		var applyIntermediateAdvancedLevel=((workout.workoutLevel.indexOf("Intermediate")!==-1 && workout.workoutLevel.indexOf("Advanced")!==-1) ? ' apply ' : ' ');
		/*End Of Level Management*/
		
		/*Objective Management*/
		var applyFatLossObjective=((workout.workoutObjective.indexOf("Fat Loss")!==-1) ? ' apply ' : ' ');
		var applyMuscleGrowthObjective=((workout.workoutObjective.indexOf("Muscle Growth")!==-1) ? ' apply ' : ' ');
		
		var applyFatLossMuscleGrowthObjective=((workout.workoutObjective.indexOf("Fat Loss")!==-1 && workout.workoutObjective.indexOf("Muscle Growth")!==-1) ? ' apply ' : ' ');
		/*End Of Objective Management*/
		
		/*Equipment Management*/
		var applyNoEquipmentsEquipment=((workout.workoutEquipment.indexOf("None")!==-1) ? ' apply ' : ' ');
		var applyFewEquipmentsEquipment=((workout.workoutEquipment.indexOf("Few")!==-1) ? ' apply ' : ' ');
		var applyGymWorkoutEquipment=((workout.workoutEquipment.indexOf("Gym")!==-1) ? ' apply ' : ' ');
		/*End Of Equipment Management*/
		
		
		var workoutColHtml=
			"<div class=\"col-12 col-md-6 col-lg-4 mb-3 lk-breakpoint-with-margin-x col-centered\">" + 
			"<div id=\"" + workout.workoutId + "\" class=\"card promoting-card border-0 lk-workout-card mx-auto wow swing\">" + 
			"    <!-- Card image -->" + 
			"    <div class=\"view overlay\">" + 
			"        <div class=\"row\">" + 
			"            <div class=\"col-5\">" + 
			"                <img class=\"card-img-top rounded-0\" src=\"" + workout.workoutThumbnail + "\" alt=\"Card image cap\">" + 
			"            </div>" + 
			"            <div class=\"col-7 mt-2\">" + 
			"                <div class=\"row\">" + 
			"                    <div class=\"col-12 pl-0\">" + 
			"                        <h3 class=\"lk-workout-title mb-0\"><strong>" + workout.workoutTitle + "</strong></h3>" + 
			"                        <h4 class=\"lk-workout-slogan mb-0\">" + workout.workoutSlogan + "</h4>" + 
			"                        <h5 class=\"lk-workout-price mt-2\"><strong>" + workout.workoutPrice + "</strong></h5> </div>" + 
			"                </div>" + 
			"				 <div class=\"row\">" + 
			"						<div class=\"col-12 pl-0 text-center\">" + 
			"							<div class=\"btn-group mt-0 lk-workout-card-buttons\" role=\"group\">" + 
			"				                <button class=\"btn btn-md  btn-secondary mr-1\" type=\"button\" onclick=\"gotoWorkoutDetail(this)\">Learn More</button>" + 
			"				                <button class=\"btn btn-md btn-secondary mr-4\" type=\"button\" onclick=\"addWorkoutToCart(this)\">Add To Cart</button>" + 
			"				            </div>" + 
			"						</div>" + 
			"				 </div>" +  			
			"            </div>" + 
			"        </div>" +  
			"    </div>" + 
			"    <!-- Card content -->" + 
			"    <div class=\"card-body\">" +
			"					<div class=\"row\">" + 
			"						<div class=\"col-12\">" + 
			"							<h5 class=\"lk-workout-details-label\"><strong>Equipment</strong></h5>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-1 pr-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-workout-equipment-diamond" + applyNoEquipmentsEquipment + "float-left\"></div>" + 
			"						</div>" + 
			"						<div class=\"col px-0 text-center\">" + 
			"							<div id=\"diamond-narrow\" class=\"lk-workout-equipment-diamond\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-1 px-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-workout-equipment-diamond" + applyFewEquipmentsEquipment + "ml-auto mr-auto\"></div>" + 
			"						</div>" + 
			"						<div class=\"col px-0 text-center\">" + 
			"							<div id=\"diamond-narrow\" class=\"lk-workout-equipment-diamond\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-1 pl-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-workout-equipment-diamond" + applyGymWorkoutEquipment + "float-right\"></div>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-12 d-inline-flex\">" + 
			"							<div class=\"lk-workout-equipment" + applyNoEquipmentsEquipment + "float-left\">None</div>" + 
			"							<div class=\"lk-workout-equipment" + applyFewEquipmentsEquipment + "ml-auto mr-auto\">Few</div>" + 
			"							<div class=\"lk-workout-equipment" + applyGymWorkoutEquipment + "float-right\">Gym</div>" + 
			"						</div>" + 
			"					</div>" + 
			"        <div class=\"row mt-3\">" + 
			"            <div class=\"col-12\">" + 
			"                <h5 class=\"lk-workout-details-label\"><strong>Level</strong></h5> </div>" + 
			"        </div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-1 pr-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-workout-level-diamond" + applyBeginnerLevel + "float-left\"></div>" + 
			"						</div>" + 
			"						<div class=\"col px-0 text-center\">" + 
			"							<div id=\"diamond-narrow\" class=\"lk-workout-level-diamond" + applyBeginnerIntermediateLevel +"mx-auto\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-1 px-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-workout-level-diamond" + applyIntermediateLevel + "mx-auto\"></div>" + 
			"						</div>" + 
			"						<div class=\"col px-0 text-center\">" + 
			"							<div id=\"diamond-narrow\" class=\"lk-workout-level-diamond" + applyIntermediateAdvancedLevel +"mx-auto\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-1 pl-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-workout-level-diamond" + applyAdvancedLevel + "float-right\"></div>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-12 d-inline-flex\">" + 
			"							<div class=\"lk-workout-level" + applyBeginnerLevel + "float-left\">Beginner</div>" + 
			"							<div class=\"lk-workout-level" + applyIntermediateLevel + "ml-auto mr-auto\">Intermediate</div>" + 
			"							<div class=\"lk-workout-level" + applyAdvancedLevel + "float-right\">Advanced</div>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row mt-3\">" + 
			"						<div class=\"col-12\">" + 
			"							<h5 class=\"lk-workout-details-label\"><strong>Objective</strong></h5>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-2 pr-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-workout-objective-diamond" + applyFatLossObjective + "float-left\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-8 px-0 text-center\">" + 
			"							<div id=\"diamond-narrow\" class=\"lk-workout-objective-diamond" + applyFatLossMuscleGrowthObjective + "mx-auto\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-2 pl-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-workout-objective-diamond" + applyMuscleGrowthObjective + "float-right\"></div>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-12\">" + 
			"							<div id=\"lk-fat-loss\" class=\"lk-workout-objective" + applyFatLossObjective + "float-left\">Fat Loss</div>" + 
			"							<div id=\"lk-muscle-growth\" class=\"lk-workout-objective" + applyMuscleGrowthObjective + "float-right\">Muscle Growth</div>" + 
			"						</div>" + 
			"					</div>" + 

			"				</div>" + 
			"	        </div>" +
			"		</div>"; 
					
		$("#lk-workouts-list").append(workoutColHtml);	
		
	});

}

function addWorkoutToCartHelper(workoutId){
	if(checkWorkoutIdInCart(workoutId)){
		 boot4.alert({msg: "Workout already in basket!",
				      title: "",
				      callback: function() {}
				    },"OK");
		 return;
	}
	cartTable.push({elementType:"w", elementId:workoutId});
	cartItemsNumber+=1;
	$(".lk-badge-span").html(cartItemsNumber);
	
	drawCartContent();
}
function addWorkoutDetailToCart(element){
	var workoutId= $(element).closest("#lk-workout-detail-wrapper").attr("data-workoutId");
	 addWorkoutToCartHelper(workoutId);
}

function addWorkoutToCart(element){
	var workoutId = $(element).closest(".lk-workout-card").attr("id");
	addWorkoutToCartHelper(workoutId)
}

function getLongWorkoutLevel(levels){
	var workoutLevelLongString=levels[0];
	var index=0;
	for(index=1;index<levels.length;index++){
		workoutLevelLongString += " To " + levels[index];
	}
	return workoutLevelLongString;
}

function getLongWorkoutRequirement(equipment){
	var workoutRequirementLongString=equipment[0];
	var index=0;
	for(index=1;index<equipment.length;index++){
		workoutRequirementLongString += " To " + equipment[index];
	}
	return workoutRequirementLongString;
}

function getLongWorkoutObjective(objectives){
	var workoutObjectiveLongString=objectives[0];
	var index=0;
	for(index=1;index<objectives.length;index++){
		workoutObjectiveLongString += " & " + objectives[index];
	}
	return workoutObjectiveLongString;
}

function gotoWorkoutDetail(element){
	var workoutId = $(element).closest(".lk-workout-card").attr("id");
	
	var workoutElement=getWorkoutFromId(workoutId);
	var youtubeURL=workoutElement.workoutYoutube;
	$("#lk-workout-detail-youtube").attr("src",youtubeURL);
	$("span#lk-workout-detail-title").html(workoutElement.workoutTitle);
	$("span#lk-workout-detail-slogan").html(workoutElement.workoutSlogan);
	$("span#lk-workout-detail-price").html(workoutElement.workoutPrice);
	
	$("#lk-workout-detail-wrapper").attr("data-workoutId",workoutId);
	
	$("#lk-workout-detail-wrapper").css("display","block");
	$("#lk-workout-detail-wrapper").css("left","100%");
	
	
	var workoutLevelLongString = getLongWorkoutLevel(workoutElement.workoutLevel);
	$("#lk-workout-detail-wrapper #lk-label-level-value").html(workoutLevelLongString);
	
	var workoutObjectiveLongString = getLongWorkoutObjective(workoutElement.workoutObjective);
	$("#lk-workout-detail-wrapper #lk-label-objective-value").html(workoutObjectiveLongString);
	
	var workoutRequirementLongString = getLongWorkoutRequirement(workoutElement.workoutEquipment);
	$("#lk-workout-detail-wrapper #lk-label-equipment-value").html(workoutRequirementLongString);
	
	$("#lk-workout-detail-wrapper #lk-label-duration-value").html(workoutElement.workoutDuration);
	
	$("#lk-workout-detail-description").html(workoutElement.workoutDescription);
	
	$("#lk-workouts-wrapper").animate(
			{"left":"-100%"},
			500,
			"linear",
			function(){
				$("#lk-workouts-wrapper").css("display","none");
				$("#lk-workout-detail-wrapper span#lk-selected-workout").html(workoutId);
				
				
				$("#lk-workout-detail-wrapper").animate(
						{"left":"0"},
						500,
						"linear"
				);
			}
		);
}

function goBackToWorkouts(){
	//cancel playing videos in workout details
	$("#lk-workout-detail-youtube").attr("src","");
	
	$("#lk-workout-detail-wrapper").animate(
			{"left":"+100%"},
			500,
			"linear",
			function(){
				$("#lk-workout-detail-wrapper").css("display","none");
				
				$("#lk-workouts-wrapper").css("display","block");
				$("#lk-workouts-wrapper").css("left","-100%");
				
				
				$("#lk-workouts-wrapper").animate(
						{"left":"0"},
						500,
						"linear",
						function(){
							
						}
				);
			}
	);
	
}

function checkWorkoutIdInCart(workoutId){
	var i=0;
	for(i=0;i<cartTable.length;i++){
		var elementId = cartTable[i].elementId;
		var elementType = cartTable[i].elementType;
		
		if (elementType==="w" && elementId === workoutId){
			return true;
		}
	}
	return false;

}

function removeWorkoutFromCartArray(workoutId){
	var indexToRemove=-1;
	for(i=0;i<cartTable.length;i++){
		var elementId = cartTable[i].elementId;
		var elementType = cartTable[i].elementType;
		
		if (elementType==="w" && elementId === workoutId){
			indexToRemove = i;
		}
	}
	if(indexToRemove!==-1){
		cartTable.splice(indexToRemove, 1);
	}

}


function getWorkoutFromId(workoutId){
	var i=0;
	for(i=0;i<workoutTable.length;i++){
		var iterWorkoutId = workoutTable[i].workoutId;
		if (iterWorkoutId === workoutId){
			return workoutTable[i];
		}
	}
	return null;

}


function removeWorkoutFromCart(element, workoutId){
	var jqueryElement = $(element);
	jqueryElement.closest(".row").hide('slow', function(){ $(this).remove(); });
	removeWorkoutFromCartArray(workoutId);
	
	/*ajax call to update session with deleted element and "cartItemsNumber"*/
		cartItemsNumber=cartItemsNumber-1;
		$(".lk-badge-span").html(cartItemsNumber);
		/*get the new total from the ajax callback*/
		/*update the total variable 'subTotalStr' and show it in the html*/
	/*****/
}

/* End of Workout section*/