/* Cart Section */
function drawCartContent(){

	var cartBodyUpperSeperator=	"<div class=\"row\"><div class=\"col-12\"><div class=\"border-top\"></div></div></div>";	
	$("#cartModal .modal-body").empty();
	$("#cartModal .modal-body").append(cartBodyUpperSeperator);	
								
	$.each(cartTable, function( index, element ) {
		var elementType=element.elementType;
		var elementId=element.elementId;
		
		var thumbnail=null;
		var title=null;
		var slogan=null;
		var price=null;
		
		var cartRow = null;
		if(elementType === "w"){
			cartRow = getWorkoutFromId(elementId);
			thumbnail=cartRow.workoutThumbnail;
			title=cartRow.workoutTitle ;
			slogan=cartRow.workoutSlogan;
			price=cartRow.workoutPrice;
		}else{
			cartRow = getProgramFromId(elementId);
			thumbnail=cartRow.programThumbnail;
			title=cartRow.programTitle ;
			slogan=cartRow.programSlogan;
			price=cartRow.programPrice;			
		}
		
		var cartRowHtml="<div class=\"row pt-4 lk-cart-row\">"+
						"	<div class=\"col-3\">"+
						"		<img class=\"lk-workout-thumbnail\" src=\"" + cartRow.workoutThumbnail + "\" alt=\"...\">"+
						"	</div>"+
						"	<div class=\"col-5\">"+
						"		<div class=\"row lk-workout-title\">"+
						"			<div class=\"col-12\">"+
						"				<span>" + cartRow.workoutTitle + "</span>"+
						"			</div>"+
						"		</div>"+
						"		<div class=\"row lk-workout-slogan\">"+
						"			<div class=\"col-9\">"+
						"				<span>" + cartRow.workoutSlogan + "</span>"+
						"			</div>"+
						"			<div class=\"col-3\">					"+
						"			</div>"+
						"		</div>"+
						"	</div>"+
						"	<div class=\"col-3\">"+
						"		<span class=\"lk-amount\">" + cartRow.workoutPrice + "</span>"+
						"	</div>"+
						"	<div class=\"col-1\">"+
						"		<button type=\"button\" class=\"close\ lk-remove-from-cart\" onclick=\"removeWorkoutFromCart(this, '" + cartRow.workoutId + "' )\">"+
						"		  <span aria-hidden=\"true\">&times;</span>"+
						"		</button>"+
						"	</div>"+
						"</div>";

		$("#cartModal .modal-body").append(cartRowHtml);	
		
	});
				
	var cartBodyLowerSeperator="<div class=\"row\"><div class=\"col-12\"><div class=\"border-top my-3\"></div></div></div>";
	$("#cartModal .modal-body").append(cartBodyLowerSeperator);	

	var cartBodySubtotalHtml=	"<div class=\"row lk-cart-subtotal-row\">" + 
								"	<div class=\"col-8\">" + 
								"		<span class=\"lk-label\">Subtotal</span>" + 
								"	</div>" + 
								"	<div class=\"col-4\">" + 
								"		<span class=\"lk-value\">" + subTotalStr + "</span>" + 
								"	</div>" + 
								"</div>";
	$("#cartModal .modal-body").append(cartBodySubtotalHtml);	

	var cartItemsPrevNumber=cartItemsNumber; /*this is used when capturing the change in the span showing the number;*/

	$(".lk-badge-span").on('DOMSubtreeModified', function () {
		//test if this is a text change and not some style or other change  
		if(cartItemsPrevNumber!==cartItemsNumber){
			cartItemsPrevNumber=cartItemsNumber;
			/*$(".lk-badge-container").effect("shake",{distance:6});*/
			$(".lk-badge-container").effect("bounce",{distance:50});
		}
	});

}


/* End of Cart Section */

/* Contact section*/
function resetContactForm(element){
	var elementid=element.attr('id');
	$("#" + elementid + " :input").each(function(){
		
		var input = $(this); // This is the jquery object of the input, do what you will
		input.val("");
	});
}
/* End of Contact section*/

function showWorkoutsSection(){
	if($("section#workouts").hasClass("d-none") === true){
		$("section#workouts").removeClass("d-none");
		
		if($("header.masthead").hasClass("d-none") === false){
			$("header.masthead").addClass("d-none");
		}
		if($("section#about").hasClass("d-none") === false){
			$("section#about").addClass("d-none");
		}
		if($("section#contact").hasClass("d-none") === false){
			$("section#contact").addClass("d-none");
		}
		if($("section#train").hasClass("d-none") === false){
			$("section#train").addClass("d-none");
		}
		if($("footer#lk-main-footer").hasClass("d-none") === false){
			$("footer#lk-main-footer").addClass("d-none");
		}
		
		//init workout section
		if($("#lk-workout-detail-wrapper").css("display") !== "none"){
			goBackToWorkouts();
		}
		
		if($("#lk-workout-menu-anchor").hasClass("active") === false){
			$("#lk-workout-menu-anchor").addClass("active");
		}
		
		$("#lk-train-menu-anchor").removeClass("active");
		
	}
}


function showTrainSection(){
	drawPurchasedWorkoutCards();
	if($("section#train").hasClass("d-none") === true){
		$("section#train").removeClass("d-none");
		
		if($("header.masthead").hasClass("d-none") === false){
			$("header.masthead").addClass("d-none");
		}
		if($("section#about").hasClass("d-none") === false){
			$("section#about").addClass("d-none");
		}
		if($("section#contact").hasClass("d-none") === false){
			$("section#contact").addClass("d-none");
		}
		if($("section#workouts").hasClass("d-none") === false){
			$("section#workouts").addClass("d-none");
		}
		if($("footer#lk-main-footer").hasClass("d-none") === false){
			$("footer#lk-main-footer").addClass("d-none");
		}
		
		//init train section
		
		//
		
		if($("#lk-train-menu-anchor").hasClass("active") === false){
			$("#lk-train-menu-anchor").addClass("active");
		}
		
		$("#lk-workout-menu-anchor").removeClass("active");
		
	}
}

function showHomeHideWorkoutsTrain(){
	$("header.masthead").removeClass("d-none");
	$("section#about").removeClass("d-none");
	$("section#contact").removeClass("d-none");
	$("footer#lk-main-footer").removeClass("d-none");
	$("#lk-workout-menu-anchor").removeClass("active");
	$("#lk-train-menu-anchor").removeClass("active");
	
	if($("section#workouts").hasClass("d-none") === false){
		$("section#workouts").addClass("d-none");
	}
	if($("section#train").hasClass("d-none") === false){
		$("section#train").addClass("d-none");
	}
	
	
	//cancel playing videos in workout details
	$("#lk-workout-detail-youtube").attr("src","");
	
}

function gotToSection(section){
    var url = location.href;               //Save down the URL without hash.
    location.href = "#"+section;                 //Go to the target element.
    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
}