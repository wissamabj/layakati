	
/* Program Section*/
function filterProgram(criteria){
	$.each($("#lk-programs-list .lk-program-card"), function( index, programCard ) {
		
		/*if show all is the criteria then ignore everythin else*/
		if(criteria==="all"){
			$(programCard).parent().css("display","inline-block");
			return;
		}
		
		var isFatLoss=$(programCard).find("#lk-fat-loss").hasClass("apply");
		var isFatMuscleGrowth=$(programCard).find("#lk-muscle-growth").hasClass("apply");
		featuredProgramIds
		var isFeatured = $.inArray($(programCard).attr('id'),featuredProgramIds)!==-1;
		
		var showElement=false;
		
		if(criteria==='fat-loss'){
			showElement=isFatLoss && !isFatMuscleGrowth;
		}else{
			if(criteria==='muscle-growth'){
				showElement=isFatMuscleGrowth && !isFatLoss;
			}else{
				if(criteria==='both'){
					showElement=isFatMuscleGrowth && isFatLoss;
				}else{
					if(criteria==='featured'){
						showElement=isFeatured;
					}
				}
			}
		}
		if(showElement===false){
			$(programCard).parent().css("display","none");
		}else{
			$(programCard).parent().css("display","inline-block");
		}
		
	});
	
	
}

function drawProgramCards(){
/*	programId:"program-1", 
	programThumbnail:"img/thumbnails/thumb-program-adv-kettlbells.jpg",
	programPic:"img/programs/program-adv-kettlbells.jpg",
	programTitle:"ADVANCED KETTLEBELLS",
	programSlogan:"Move it",
	programPrice:"60.00 USD",
	programPeriod:"12 weeks",
	programLevel:["Intermediate","Advanced"],
	programObjective:["Fat loss","Muscle Growth"],
	programEquipment:["Gym Program"]*/
	$("#lk-programs-list").empty();
	$.each(programTable, function( index, program ) {
		/*Level Management*/
		var applyBeginnerLevel=((program.programLevel.indexOf("Beginner")!==-1) ? ' apply ' : ' ');
		var applyIntermediateLevel=((program.programLevel.indexOf("Intermediate")!==-1) ? ' apply ' : ' ');
		var applyAdvancedLevel=((program.programLevel.indexOf("Advanced")!==-1) ? ' apply ' : ' ');
		
		var applyBeginnerIntermediateLevel=((program.programLevel.indexOf("Beginner")!==-1 && program.programLevel.indexOf("Intermediate")!==-1) ? ' apply ' : ' ');
		var applyIntermediateAdvancedLevel=((program.programLevel.indexOf("Intermediate")!==-1 && program.programLevel.indexOf("Advanced")!==-1) ? ' apply ' : ' ');
		/*End Of Level Management*/
		
		/*Objective Management*/
		var applyFatLossObjective=((program.programObjective.indexOf("Fat Loss")!==-1) ? ' apply ' : ' ');
		var applyMuscleGrowthObjective=((program.programObjective.indexOf("Muscle Growth")!==-1) ? ' apply ' : ' ');
		
		var applyFatLossMuscleGrowthObjective=((program.programObjective.indexOf("Fat Loss")!==-1 && program.programObjective.indexOf("Muscle Growth")!==-1) ? ' apply ' : ' ');
		/*End Of Objective Management*/
		
		/*Requirement Management*/
		var applyNoEquipmentsEquipment=((program.programEquipment.indexOf("No Equipments")!==-1) ? ' apply ' : ' ');
		var applyFewEquipmentsEquipment=((program.programEquipment.indexOf("Few Equipments")!==-1) ? ' apply ' : ' ');
		var applyGymProgramEquipment=((program.programEquipment.indexOf("Gym Program")!==-1) ? ' apply ' : ' ');
		/*End Of Requirement Management*/
		
		
		var programColHtml=
			"<div class=\"col-12 col-sm-6 col-lg-4 col-xl-3 mb-3 col-centered\">" + 
			"	  <!-- Card -->" + 
			"	        <div id=\"" + program.programId+ "\" class=\"card promoting-card border-0 lk-program-card mx-auto wow swing\">" + 
			"	          <!-- Card image -->" + 
			"	          <div class=\"view overlay\">" + 
			"	            <img class=\"card-img-top rounded-0\" src=\"" + program.programPic + "\" alt=\"Card image cap\">" + 
			"	          </div>" + 
			"				<!-- Card content -->" + 
			"				<div class=\"card-body\">" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-12\">" + 
			"							<h3 class=\"lk-program-title mb-0\"><strong>" + program.programTitle + "</strong></h3>" + 
			"							<h5 class=\"lk-program-period\">" + program.programPeriod + " Program</h5>" + 
			"							<h5 class=\"lk-program-price mt-3\"><strong>" + program.programPrice + "</strong></h5>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row mt-3\">" + 
			"						<div class=\"col-12\">" + 
			"							<h5 class=\"lk-program-details-label\"><strong>Level</strong></h5>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-1 pr-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-program-level-diamond" + applyBeginnerLevel + "float-left\"></div>" + 
			"						</div>" + 
			"						<div class=\"col px-0 text-center\">" + 
			"							<div id=\"diamond-narrow\" class=\"lk-program-level-diamond" + applyBeginnerIntermediateLevel +"mx-auto\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-1 px-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-program-level-diamond" + applyIntermediateLevel + "mx-auto\"></div>" + 
			"						</div>" + 
			"						<div class=\"col px-0 text-center\">" + 
			"							<div id=\"diamond-narrow\" class=\"lk-program-level-diamond" + applyIntermediateAdvancedLevel +"mx-auto\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-1 pl-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-program-level-diamond" + applyAdvancedLevel + "float-right\"></div>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-12 d-inline-flex\">" + 
			"							<div class=\"lk-program-level" + applyBeginnerLevel + "float-left\">Beginner</div>" + 
			"							<div class=\"lk-program-level" + applyIntermediateLevel + "ml-auto mr-auto\">Intermediate</div>" + 
			"							<div class=\"lk-program-level" + applyAdvancedLevel + "float-right\">Advanced</div>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row mt-3\">" + 
			"						<div class=\"col-12\">" + 
			"							<h5 class=\"lk-program-details-label\"><strong>Objective</strong></h5>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-2 pr-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-program-objective-diamond" + applyFatLossObjective + "float-left\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-8 px-0 text-center\">" + 
			"							<div id=\"diamond-narrow\" class=\"lk-program-objective-diamond" + applyFatLossMuscleGrowthObjective + "mx-auto\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-2 pl-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-program-objective-diamond" + applyMuscleGrowthObjective + "float-right\"></div>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-12\">" + 
			"							<div id=\"lk-fat-loss\" class=\"lk-program-objective" + applyFatLossObjective + "float-left\">Fat Loss</div>" + 
			"							<div id=\"lk-muscle-growth\" class=\"lk-program-objective" + applyMuscleGrowthObjective + "float-right\">Muscle Growth</div>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row mt-3\">" + 
			"						<div class=\"col-12\">" + 
			"							<h5 class=\"lk-program-details-label\"><strong>Equipment</strong></h5>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-1 pr-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-program-equipment-diamond" + applyNoEquipmentsEquipment + "float-left\"></div>" + 
			"						</div>" + 
			"						<div class=\"col px-0 text-center\">" + 
			"							<div id=\"diamond-narrow\" class=\"lk-program-equipment-diamond\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-1 px-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-program-equipment-diamond" + applyFewEquipmentsEquipment + "ml-auto mr-auto\"></div>" + 
			"						</div>" + 
			"						<div class=\"col px-0 text-center\">" + 
			"							<div id=\"diamond-narrow\" class=\"lk-program-equipment-diamond\"></div>" + 
			"						</div>" + 
			"						<div class=\"col-1 pl-0\">" + 
			"							<div id=\"diamond-measure\" class=\"lk-program-equipment-diamond" + applyGymProgramEquipment + "float-right\"></div>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-12 d-inline-flex\">" + 
			"							<div class=\"lk-program-equipment" + applyNoEquipmentsEquipment + "float-left\">No Equipments</div>" + 
			"							<div class=\"lk-program-equipment" + applyFewEquipmentsEquipment + "ml-auto mr-auto\">Few Equipments</div>" + 
			"							<div class=\"lk-program-equipment" + applyGymProgramEquipment + "float-right\">Gym Program</div>" + 
			"						</div>" + 
			"					</div>" + 
			"					<div class=\"row\">" + 
			"						<div class=\"col-12 text-center\">" + 
			"							<div class=\"btn-group mt-4 lk-program-card-buttons\" role=\"group\">" + 
			"				                <button class=\"btn btn-md  btn-secondary mr-2\" type=\"button\" onclick=\"gotoProgramDetail(this)\">Learn More</button>" + 
			"				                <button class=\"btn btn-md btn-secondary\" type=\"button\" onclick=\"addProgramToCart(this)\">Add To Cart</button>" + 
			"				            </div>" + 
			"						</div>" + 
			"					</div>" + 
			"				</div>" + 
			"	        </div>" + 
			"	        <!-- Card -->" + 
			"		</div>"; 
					
		$("#lk-programs-list").append(programColHtml);	
		
	});

}
function addProgramToCart(element){
	var programId = $(element).closest(".lk-program-card").attr("id");
	if(checkProgramIdInCart(programId)){
		 boot4.alert({msg: "Program already in basket!",
				      title: "",
				      callback: function() {}
				    },"OK");
		 return;
	}
	cartTable.push({elementType:"p", elementId:programId});
	cartItemsNumber+=1;
	$(".lk-badge-span").html(cartItemsNumber);
	
	drawCartContent();
	
}
function gotoProgramDetail(element){
	var programId = $(element).closest(".lk-program-card").attr("id");
	
	$("#lk-program-detail-wrapper").css("display","block");
	$("#lk-program-detail-wrapper").css("left","100%");
	
	
	$("#lk-programs-wrapper").animate(
			{"left":"-100%"},
			500,
			"linear",
			function(){
				$("#lk-programs-wrapper").css("display","none");
				$("#lk-program-detail-wrapper span#lk-selected-program").html(programId);
				
				
				$("#lk-program-detail-wrapper").animate(
						{"left":"0"},
						500,
						"linear"
				);
			}
		);
}

function goBackToPrograms(){

	$("#lk-program-detail-wrapper").animate(
			{"left":"+100%"},
			500,
			"linear",
			function(){
				$("#lk-program-detail-wrapper").css("display","none");
				
				$("#lk-programs-wrapper").css("display","block");
				$("#lk-programs-wrapper").css("left","-100%");
				
				
				$("#lk-programs-wrapper").animate(
						{"left":"0"},
						500,
						"linear",
						function(){
							
						}
				);
			}
	);
	
}

function checkProgramIdInCart(programId){
	var i=0;
	for(i=0;i<cartTable.length;i++){
		var elementId = cartTable[i].elementId;
		var elementType = cartTable[i].elementType;
		
		if (elementType==="p" && elementId === programId){
			return true;
		}
	}
	return false;

}

function removeProgramFromCartArray(programId){
	var indexToRemove=-1;
	for(i=0;i<cartTable.length;i++){
		var elementId = cartTable[i].elementId;
		var elementType = cartTable[i].elementType;
		
		if (elementType==="p" && elementId === programId){
			indexToRemove = i;
		}
	}
	if(indexToRemove!==-1){
		cartTable.splice(indexToRemove, 1);
	}

}


function getProgramFromId(programId){
	var i=0;
	for(i=0;i<programTable.length;i++){
		var iterProgramId = programTable[i].programId;
		if (iterProgramId === programId){
			return programTable[i];
		}
	}
	return null;

}


function removeProgramFromCart(element, programId){
	var jqueryElement = $(element);
	jqueryElement.closest(".row").hide('slow', function(){ $(this).remove(); });
	removeProgramFromCartArray(programId);
	
	/*ajax call to update session with deleted element and "cartItemsNumber"*/
		cartItemsNumber=cartItemsNumber-1;
		$(".lk-badge-span").html(cartItemsNumber);
		/*get the new total from the ajax callback*/
		/*update the total variable 'subTotalStr' and show it in the html*/
	/*****/
}

/* End of Program section*/