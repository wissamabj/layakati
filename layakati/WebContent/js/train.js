
function drawPurchasedWorkoutCards(){
	$("#lk-purchased-workouts-list").empty();
	$.each(purchasedTable, function( index, purchasedWorkout ) {
		
		//only workouts
		if(purchasedWorkout.elementType !== "w"){
			return;
		}
		
		var workout = getWorkoutFromId(purchasedWorkout.elementId);
		

		
		var workoutColHtml=
			"<div class=\"col-12 col-sm-6 col-lg-4 col-xl-3 mb-3 col-centered\">" + 
			"<div id=\"" + workout.workoutId + "\" class=\"card promoting-card border-0 lk-workout-card mx-auto wow swing\">" + 
			"    <!-- Card image -->" + 
			"    <div class=\"view overlay\">" + 
			"        <div class=\"row\">" + 
			"            <div class=\"col-12\">" + 
			"                <img class=\"card-img-top rounded-0\" src=\"" + workout.workoutPic+ "\" alt=\"Card image cap\">" + 
			"            </div>" + 
			"        </div>" +  
			"    </div>" + 
			"    <!-- Card content -->" + 
			"    <div class=\"card-body\">" +
			"	 	<div class=\"row\">" + 
			"       	<div class=\"col-12 pl-0\">" + 
			"           	<h3 class=\"lk-workout-title mb-0\"><strong>" + workout.workoutTitle + "</strong></h3>" + 
			"            	<h4 class=\"lk-workout-slogan mb-0\">" + workout.workoutSlogan + "</h4>" + 
			"           </div>" + 
			"	 	</div>" + 
			"	 	<div class=\"row pt-3\">" + 
			"       	<div class=\"col-12\">" +
			"				<button class=\"btn btn-md btn-secondary\" type=\"button\" onclick=\"gotoTraining('"+workout.workoutId+"')\">Start</button>" + 
			"           </div>" + 
			"	 	</div>" + 
			"	 </div>" +			
			"</div>" +  			
			"</div>"; 
					
		$("#lk-purchased-workouts-list").append(workoutColHtml);	
		
	});

}
function getExerciceFromId(exerciceId){
	var i=0;
	for(i=0;i<exerciceTable.length;i++){
		var iterExercicetId = exerciceTable[i].exerciceId;
		if (iterExercicetId === exerciceId){
			return exerciceTable[i];
		}
	}
	return null;

}

/*this returns the first uncompleted exercice in the list*/
function getDefaultExercice(exercicesList){
	var index;
	
	for(index=0;index<exercicesList.length;index++){
		if(exercicesList[index].completed === false){
			return getExerciceFromId(exercicesList[index].exerciceId);
		}
	}
	
	/*in case all exercice are completed we return the last exercice in the list*/
	return getExerciceFromId(exercicesList[exercicesList.length-1].exerciceId);
}

function isExerciceCompleted(workoutElement,exerciceId){
	var exercicesList = workoutElement.workoutExercices;
	var index;
	for(index=0;index<exercicesList.length;index++){
		if(exercicesList[index].exerciceId === exerciceId){
			return exercicesList[index].completed;
		}
	}
}
function fillSelectedExercice(theExercice,exerciceCompleted){
	$(".lk-current-exercice").attr("data-id",theExercice.exerciceId);
	//$("#lk-train-selected-video-src").attr("src",defaultExerciceElement.exerciceVideo);
	
	$("#lk-train-selected-video-div").html("<video width=\"100%\" controls controlsList=\"nodownload\"><source src=\"" + theExercice.exerciceVideo + "\" type=\"video/mp4\"></video>");
	
	$("#lk-train-selected-exercice-title").html("<strong>" + theExercice.exerciceTitle + "</strong>");
	
	if(exerciceCompleted){
		$("#lk-train-markascomplete-button").css("display","none");
		$("#lk-train-unmarkascomplete-button").css("display","block");
	}else{
		$("#lk-train-markascomplete-button").css("display","block");
		$("#lk-train-unmarkascomplete-button").css("display","none");
	}
	
	$("#lk-train-exercice-desc").html(theExercice.exerciceDescription);
	
}
function gotoTraining(workoutId){
/*	exerciceId:"ex-1",
	exerciceThumbnail:"img/thumbnails/ex1-thumb.png", 
	exerciceVideo:"videos/exercices/ex1.MOV", 
	exerciceDescription:"Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus", 
	exerciceTitle:"Dragon Tail",*/
	var workoutElement=getWorkoutFromId(workoutId);
	$("#lk-train-detail-wrapper").css("display","block");
	$("#lk-train-detail-wrapper").css("left","100%");
	$("#lk-train-detail-wrapper").attr("data-workoutId",workoutId);
	$("#lk-train-workout-title").html("<strong>" + workoutElement.workoutTitle + "</strong>");
	$("#lk-train-workout-slogan").html(workoutElement.workoutSlogan);
	
	var defaultExerciceElement=getDefaultExercice(workoutElement.workoutExercices);
	var exerciceCompleted = isExerciceCompleted(workoutElement,defaultExerciceElement.exerciceId);
	
	fillSelectedExercice(defaultExerciceElement,exerciceCompleted);
	
	
	/*Draw the exercice list*/
	$("#lk-exercices-list").empty();
	$.each(workoutElement.workoutExercices, function( index, workoutExercice ) {
		var exerciceElement = getExerciceFromId(workoutExercice.exerciceId);
		var completed = workoutExercice.completed;
		var completedMarkerHtml="";
		if(completed){
			completedMarkerHtml = ""; 
		}else{
			completedMarkerHtml = " d-none ";
		}
		var isActive = exerciceElement.exerciceId === defaultExerciceElement.exerciceId;
		var activeClass="";
		if(isActive){
			activeClass=" active ";
		}
		var exerciceItemHtml = "				" +
		"				<div class=\"row lk-exercice-item py-2 " + activeClass + "\" data-id=\"" + exerciceElement.exerciceId + "\" onclick=\"selectExercice(this)\">" + 
		" 					<div class=\"col-4\">" + 
		" 						<img class=\"lk-exercice-thumbnail\" src=\"" + exerciceElement.exerciceThumbnail + "\" alt=\"exercice thumbnail\">" + 
		" 					</div>" + 
		" 					<div class=\"col-8\">" + 
		" 						<h3 class=\"lk-exercice-title\"><strong>" + exerciceElement.exerciceTitle + "</strong></h3> " + 
		"						<h4 class=\"lk-exercice-check " + completedMarkerHtml + "\"><i class=\"fa fa-check-circle\"></i></h4> " +
		" 					</div>" + 
		" 				</div>";
		
		$("#lk-exercices-list").append(exerciceItemHtml);	
	});

	/*animate the appearance*/
	$("#lk-train-wrapper").animate(
			{"left":"-100%"},
			500,
			"linear",
			function(){
				$("#lk-train-wrapper").css("display","none");
				/*$("#lk-train-detail-wrapper span#lk-selected-workout").html(workoutId);*/
				
				
				$("#lk-train-detail-wrapper").animate(
						{"left":"0"},
						500,
						"linear"
				);
			}
		);
}
function selectExercice(divElement){
	$(".lk-exercice-item.active").removeClass("active");
	$(divElement).addClass("active");
	
	var selectedExerciceId = $(divElement).attr("data-id");
	var selectedExercice = getExerciceFromId(selectedExerciceId);
	var exerciceCompleted = $(divElement).find(".lk-exercice-check.d-none").length<=0;
	fillSelectedExercice(selectedExercice,exerciceCompleted);
	
	$("html, body").animate({ scrollTop: 0 }, "slow");
}
function markAsComplete(button){
	var exerciceId=$(button).closest(".lk-current-exercice").attr("data-id");
	var workoutId=$(button).closest("#lk-train-detail-wrapper").attr("data-workoutid");
	/*ajax call to mark as complete then in callback*/
	updateExerciceInWorkoutTable(exerciceId,workoutId,true); //update the data table
	
	$("#lk-train-markascomplete-button").css("display","none");
	$("#lk-train-unmarkascomplete-button").css("display","block");
	$(".lk-exercice-item.active .lk-exercice-check").removeClass("d-none");
	/******/
}

function unmarkAsComplete(button){
	var exerciceId=$(button).closest(".lk-current-exercice").attr("data-id");
	var workoutId=$(button).closest("#lk-train-detail-wrapper").attr("data-workoutid");
	/*ajax call to mark as complete then in callback*/
	updateExerciceInWorkoutTable(exerciceId,workoutId,false); //update the data table
	
	$("#lk-train-markascomplete-button").css("display","block");
	$("#lk-train-unmarkascomplete-button").css("display","none");
	$(".lk-exercice-item.active .lk-exercice-check").addClass("d-none");
	/******/
}
function updateExerciceInWorkoutTable(exerciceId,workoutId,completed){
	var index;
	for(index=0;index<workoutTable.length;index++){
		if(workoutTable[index].workoutId === workoutId){
			var indexEx;
			for(indexEx=0;indexEx<workoutTable[index].workoutExercices.length;indexEx++){
				if(workoutTable[index].workoutExercices[indexEx].exerciceId === exerciceId){
					workoutTable[index].workoutExercices[indexEx].completed = completed;
					return;
				}
			}
		}
	}
}
function goBackToPurchasedWorkouts(){
	//cancel playing videos in workout details
	/*$("#lk-workout-detail-youtube").attr("src","");*/
	
	$("#lk-train-detail-wrapper").animate(
			{"left":"+100%"},
			500,
			"linear",
			function(){
				$("#lk-train-detail-wrapper").css("display","none");
				
				$("#lk-train-wrapper").css("display","block");
				$("#lk-train-wrapper").css("left","-100%");
				
				
				$("#lk-train-wrapper").animate(
						{"left":"0"},
						500,
						"linear",
						function(){
							
						}
				);
			}
	);
	
}