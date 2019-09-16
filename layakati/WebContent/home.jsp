<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ page import="java.util.Date" %>  
  
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>Layakati</title>
	<link rel="icon" type="image/png" href="img/icons/k-16x16.png" sizes="16x16">
	<link rel="icon" type="image/png" href="img/icons/k-32x32.png" sizes="32x32">
	<!-- Font Awesome Icons -->
	<link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
	
	
	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
		  
	 
	<!-- Jquery-ui CSS -->
	<link rel="stylesheet" href="vendor/jquery-ui/jquery-ui.css">
	<!-- Plugin CSS -->
	<link href="vendor/magnific-popup/magnific-popup-lk.css" rel="stylesheet">
	<!-- Theme CSS - Includes Bootstrap -->
	<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="vendor/bootstrap-social-master/css/bootstrap-social.css" rel="stylesheet">
	<!-- WOW css-->
	<link href="vendor/WOW-master/css/libs/animate.css" rel="stylesheet">
	<link href="vendor/intl-tel-input-master/build/css/intlTelInput.css" rel="stylesheet">
			
	<!-- LK custom css-->
	<%-- <link href="css/layakati.css?v=<%=(new Date()).toString()%>" rel="stylesheet"> --%>
	<link href="css/layakati.css" rel="stylesheet">
	<link href="css/fixed-sidebar.css" rel="stylesheet">
</head>
   <body id="page-top" class="layakati">
      <!-- Bootstrap core JavaScript -->
      <script src="vendor/jquery/jquery.min.js"></script>
      <!-- Plugin JavaScript -->
      <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
      <script src="vendor/jquery-ui/jquery-ui.min.js"></script>
      <script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
	  
	    
	        <!-- Bootstrap core JavaScript -->
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<script src="vendor/malihu-custom-scrollbar-plugin-master/js/minified/jquery.mCustomScrollbar.min.js"></script>

 		<!-- WOW js -->
	    <script src="vendor/WOW-master/dist/wow.min.js"></script>
        <script>
        new WOW().init();
        </script>
        
        <!-- alert plugin js -->
       	<script src="vendor/alert-confirm-popup-boot4alert/boot4alert.js"></script>
       	
     <!-- Lk custom js -->  	       
    <script src="js/layakati.js"></script>
    <script src="js/workouts.js"></script>
    <script src="js/train.js"></script>   
	<script src="js/programs.js"></script>   
	<!-- Server Data exemples -->
   	<%-- <script src="js/server-data.js?v=<%=(new Date()).toString()%>"></script> --%>
   	
   	<script type="text/javascript">
	<jsp:include page="serverdata.jsp"></jsp:include>
	</script>
	<!-- for onload event-->
	<script>
		$( document ).ready(function() {
			$(".lk-badge-span").html(cartItemsNumber);
			
			$("#lk-contact-phone").html(contactPhoneNumber);
			$("#lk-contact-email").html(contactEmail);
			$("#lk-contact-address").html(contactAddress);
			
		});
	</script>
	
	
      <!-- Navigation -->
      <nav class="navbar navbar-expand-md navbar-light fixed-top py-1" id="mainNav">
         <div class="container mx-5 mw-100">
            <a class="navbar-brand js-scroll-trigger lk-logo-container" onclick="showHomeHideWorkoutsTrain();" href="#page-top">
            <img class="lk-logo-img" src="img/icons/layakati-logo.png"/>
            </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
               <ul class="navbar-nav ml-auto my-2 my-md-0">
                  <li class="nav-item d-none">
                     <a class="nav-link js-scroll-trigger" href="#programs">Programs</a>
                  </li>
                  <li class="nav-item">
                     <a id="lk-workout-menu-anchor" class="nav-link js-scroll-trigger" onclick="showWorkoutsSection();" href="#workouts">Workouts</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link js-scroll-trigger" onclick="showHomeHideWorkoutsTrain();" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link js-scroll-trigger" onclick="showHomeHideWorkoutsTrain();" href="#contact">Contact</a>
                  </li>
				  <li class="nav-item">
                     <a id="lk-train-menu-anchor" class="nav-link js-scroll-trigger" onclick="showTrainSection();" href="#train">Train!</a>
                  </li>
				  <li class="nav-item lk-signin">
					 <a class="nav-link js-scroll-trigger btn btn-primary" data-toggle="modal" data-target="#signinModal" href="#" role="button">Sign in</a>
                  </li>
				  <li class="nav-item lk-signout d-none">
					 <a class="nav-link js-scroll-trigger btn btn-primary" href="#" role="button">Sign out</a>
                  </li>
				  <li class="nav-item lk-cart">
                     <a class="nav-link js-scroll-trigger" data-toggle="modal" data-target="#cartModal" href="#" role="button">
						<div class="lk-badge-container">
						  <img class="lk-cart-img" src="img/icons/cart.png" alt="Cart">
						  <div class="top-left"><span class="lk-badge-span">0</span></div>
						</div>
					 </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
	  
	<!--modals-->
	 <!-- Singin Modal -->
		<div class="modal fade" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="Sign in with" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title" id="signinModal">Sign in with</h5>
				<div id="diamond">
					<button type="button" class="close my-modalclose" data-dismiss="modal" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				</div>
			  </div>
			  <div class="modal-body pt-0">
				<div class="row">
					<div class="col-12">
						<div class="border-top mb-3"></div>
					</div>
				</div>
			  
				<div class="row pt-2">
					<div class="col-12">
						<a class="lk-social-a lk-facebook-anchor btn btn-primary w-100">
						  <i class="fab fa-facebook"></i><span> Facebook</span></a>
					</div>
				</div>

				<div class="row pt-2">
					<div class="col-12">
						<a class="lk-social-a lk-google-anchor btn btn-primary w-100">
						  <i class="fab fa-google"></i><span> Google</span></a>
					</div>
				</div>
				<div class="row pt-2">
					<div class="col-12">
						<a class="lk-social-a lk-instagram-anchor btn btn-primary w-100">
						  <i class="fab fa-instagram"></i><span> Instagram</span></a>
					</div>
				</div>

			  </div>
			</div>
		  </div>
		</div>
		
		<!-- cart Modal -->
	
		<div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="Sign in with" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title" id="cartModal">My Cart</h5>
				<div id="diamond">
					<button type="button" class="close my-modalclose" data-dismiss="modal" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				</div>
			  </div>
			  <div class="modal-body pt-0">

			  </div>
			  <div class="modal-footer">
					<button type="button" class="btn btn-primary" data-dismiss="modal">Check out</button>
			  </div>
			  
			</div>
		  </div>
		</div>
		
<script>
drawCartContent();
</script>
	<!--end modals -->
	
	
      <!-- Masthead -->
      <header class="masthead">
         <div class="container h-100 mh-100 mx-0 mw-100 px-0">
			<div id="carouselIndicatorsId" class="carousel slide" data-ride="carousel" data-interval="3000">
			  <ol class="carousel-indicators">
				<li data-target="#carouselIndicatorsId" data-slide-to="0" class="active"><img src="img/indicators/selected.png" alt="..."></li>
				<li data-target="#carouselIndicatorsId" data-slide-to="1"><img src="img/indicators/selected.png" alt="..."></li>
				<li data-target="#carouselIndicatorsId" data-slide-to="2"><img src="img/indicators/selected.png" alt="..."></li>
			  </ol>
			  <div class="carousel-inner">
				<div class="carousel-item active">
				  <a href="#" onclick="showWorkoutsSection();">
					<img class="d-block w-100" src="img/cover_pic01.jpg" alt="First slide">
				  </a>
				</div>
 				<div class="carousel-item">
				  <a href="#" onclick="showWorkoutsSection();">
				    <img class="d-block w-100" src="img/cover_pic02.jpg" alt="Second slide">
				  </a>
				</div>
				<div class="carousel-item">
				  <a href="#" onclick="showWorkoutsSection();">
					<img class="d-block w-100" src="img/cover_pic03.jpg" alt="Third slide">
				  </a>
				</div>
			  </div>
			  <a class="carousel-control-prev" href="#carouselIndicatorsId" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#carouselIndicatorsId" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			  </a>
			</div>
			
			
         </div>
      </header>
      
      
<!-- Programs Section -->
<section class="page-section d-none" id="programs">
<div class="container-fluid-xl" id="lk-programs-wrapper">

	<div class="row mb-3">
		<div class="col-md-12 text-center">
			<ul class="nav nav-pills mb-3 d-inline-flex lk-program-nav-pills" id="pills-tab" role="tablist">
			  <li class="nav-item mr-2">
			    <a class="nav-link active" id="pills-all-tab" data-toggle="pill" href="#" role="tab" aria-selected="true" onclick="filterProgram('all');">All Programs</a>
			  </li>
			  <li class="nav-item mr-2">
			    <a class="nav-link" id="pills-featured-tab" data-toggle="pill" href="#" role="tab" aria-selected="false" onclick="filterProgram('featured');">Featured</a>
			  </li>
			  <li class="nav-item mr-2">
			    <a class="nav-link" id="pills-muscle-and-loss-tab" data-toggle="pill" href="#" role="tab" aria-selected="false" onclick="filterProgram('both');">Muscle Growth & Fat Loss</a>
			  </li>
			  <li class="nav-item mr-2">
			    <a class="nav-link" id="pills-muscle-tab" data-toggle="pill" href="#" role="tab" aria-selected="false" onclick="filterProgram('muscle-growth');">Muscle Growth</a>
			  </li>
			  <li class="nav-item mr-2">
			    <a class="nav-link" id="pills-loss-tab" data-toggle="pill" href="#" role="tab" aria-selected="false" onclick="filterProgram('fat-loss');">Fat Loss</a>
			  </li>
			</ul>
		</div>
	</div>
		
	

	<div class="row row-centered" id="lk-programs-list">
		

	</div>
</div>
<script>
drawProgramCards();
</script>
<div class="container" id="lk-program-detail-wrapper">
 	<div class="row">
 		<div class="col-12">
 			<button class="btn btn-primary backBtn btn-lg pull-left" type="button" onclick="goBackToPrograms()">
				<i class="fa fa-angle-left"></i> Back To Programs
			</button>
 		</div>
 	</div>
 	<div class="row">
		<div class="col-12 text-center">
			<span id="lk-selected-program"></span> was clicked 
			<div id="program-3" class="card promoting-card border-0 lk-program-card">
	
	          <!-- Card image -->
	          <div class="view overlay">
	            <img class="card-img-top rounded-0" src="img/programs/program-the-caveman.jpg" alt="Card image cap">
	          </div>
	
				<!-- Card content -->
				<div class="card-body">
					<div class="row">
						<div class="col-12">
							<h3 class="lk-program-title mb-0"><strong>The caveman</strong></h3>
							<h5 class="lk-program-period">12 Weeks Program</h5>
							<h5 class="lk-program-price mt-3"><strong>56.00 USD</strong></h5>
						</div>
					</div>
					<div class="row mt-3">
						<div class="col-12">
							<h5 class="lk-program-details-label"><strong>Level</strong></h5>
						</div>
					</div>
					<div class="row">
						<div class="col-12 d-inline-flex">
							<div id="diamond-measure" class="lk-program-level-diamond float-left"></div>
							<div id="diamond-narrow" class="lk-program-level-diamond"></div>
							<div id="diamond-measure" class="lk-program-level-diamond apply ml-auto mr-auto"></div>
							<div id="diamond-narrow" class="lk-program-level-diamond apply"></div>
							<div id="diamond-measure" class="lk-program-level-diamond apply float-right"></div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 d-inline-flex">
							<div class="lk-program-level float-left">Beginner</div>
							<div class="lk-program-level apply ml-auto mr-auto">Intermediate</div>
							<div class="lk-program-level apply float-right">Advanced</div>
						</div>
					</div>
					
					<div class="row mt-3">
						<div class="col-12">
							<h5 class="lk-program-details-label"><strong>Objective</strong></h5>
						</div>
					</div>
					<div class="row">
						<div class="col-12 d-inline-flex">
							<div id="diamond-measure" class="lk-program-objective-diamond float-left"></div>
							<div id="diamond-narrow" class="lk-program-objective-diamond"></div>
							<div id="diamond-measure" class="lk-program-objective-diamond apply float-right"></div>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<div id="lk-fat-loss" class="lk-program-objective float-left">Fat Loss</div>
							<div id="lk-muscle-growth" class="lk-program-objective apply float-right">Muscle Growth</div>
						</div>
					</div>
					
					<div class="row mt-3">
						<div class="col-12">
							<h5 class="lk-program-details-label"><strong>Equipment</strong></h5>
						</div>
					</div>
					<div class="row">
						<div class="col-12 d-inline-flex">
							<div id="diamond-measure" class="lk-program-equipment-diamond float-left"></div>
							<div id="diamond-narrow" class="lk-program-equipment-diamond"></div>
							<div id="diamond-measure" class="lk-program-equipment-diamond ml-auto mr-auto"></div>
							<div id="diamond-narrow" class="lk-program-equipment-diamond"></div>
							<div id="diamond-measure" class="lk-program-equipment-diamond apply float-right"></div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 d-inline-flex">
							<div class="lk-program-equipment float-left">No Equipment</div>
							<div class="lk-program-equipment ml-auto mr-auto">Few Equipment</div>
							<div class="lk-program-equipment apply float-right">Gym Program</div>
						</div>
					</div>
				</div>
	        </div>
		</div>
	</div>
</div>
</section>

<!-- Workouts Section -->
<section class="page-section d-none" id="workouts">
   <div class="addit-wrapper" id="lk-workouts-wrapper">
    <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div class="sidebar-header pl-1 pb-1">
			    <a class="btn btn-primary backBtn btn-lg mb-3" type="button" onclick="showHomeHideWorkoutsTrain();" href="#mainNav">
					<i class="fa fa-angle-left"></i> Main Page
				</a>
                <h5 class="pl-2">Filter by:</h5>
            </div>

            <ul class="list-unstyled components pl-2 pr-2 pt-1" id="lk-filter-by">
				<li><a href="#" class="active pt-0" data-category="1" onclick="filterWorkout('1')">Featured</a></li>
				<li class="lk-kettlbells-trend"><a href="#" data-category="2" onclick="filterWorkout('2')">Kettlebells</a></li>
				<li><a href="#" data-category="3" onclick="filterWorkout('3')">Whole body</a></li>
				<li><a href="#" data-category="4" onclick="filterWorkout('4')">Chest</a></li>
				<li><a href="#" data-category="5" onclick="filterWorkout('5')">Back</a></li>
				<li><a href="#" data-category="6" onclick="filterWorkout('6')">Legs</a></li>
				<li><a href="#" data-category="7" onclick="filterWorkout('7')">Abs</a></li>
				<li><a href="#" data-category="8" onclick="filterWorkout('8')">Biceps</a></li>
				<li><a href="#" data-category="9" onclick="filterWorkout('9')">Triceps</a></li>
				<li><a href="#" data-category="10" onclick="filterWorkout('10')">Shoulders</a></li>
				<li><a href="#" data-category="11" onclick="filterWorkout('11')">Glutes</a></li>
            </ul>

        </nav>

        <!-- Page Content  -->
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light lk-toggle-sidebar">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <!-- <span>Toggle Sidebar</span> -->
                    </button>
                </div>
            </nav>
            <div class="container-fluid-xl">
				<div class="row row-centered" id="lk-workouts-list">
				</div>
			</div>
			<div class="bg-light py-5" id="lk-workout-footer">
			   <div class="container">
			      <div class="small text-center text-muted">Copyright &copy; 2019 - Layakati</div>
			   </div>
			</div>
			
        </div>
    </div>
 </div>
  
<script>
drawWorkoutCards();
filterWorkout("1");
</script> 
  
<div class="container-fluid" id="lk-workout-detail-wrapper" data-workoutId="">
 	<div class="row pt-1 pb-2">
 		<div class="col-12">
 			<button class="btn btn-primary backBtn btn-lg pull-left" type="button" onclick="goBackToWorkouts()">
				<i class="fa fa-angle-left"></i> Back To Workouts
			</button>
 		</div>
 	</div>
 	<div class="row px-3">
		<div class="col-12 col-lg-5" id="lk-left-workout-detail">
			<div class="row">
				<div class="col-12 px-0">
					<iframe height="472.5" id="lk-workout-detail-youtube" src="" allow="autoplay"></iframe>
				</div>
			</div>
			<div class="row lk-light-bg lk-align-row-middle mb-3">
				<div class="col-6">
					<div class="col-12 mt-2 pl-0">
						<h3 class="lk-workout-title mb-0"><strong><span id="lk-workout-detail-title"></span></strong></h3> 
						<h4 class="lk-workout-slogan mb-0"><span id="lk-workout-detail-slogan"></span></h4> 
						<h5 class="lk-workout-price mt-2"><strong><span id="lk-workout-detail-price"></span></strong></h5> 
					</div> 
				</div>
				<div class="col-6">
					<div class="btn-group mt-0 lk-workout-card-buttons float-right" role="group">
						<button class="btn btn-md btn-secondary mr-4" type="button" onclick="addWorkoutDetailToCart(this)">Add To Cart</button>
					</div>
				</div>
			</div>
		</div>
		
		<div class="col-12 col-lg-7">
			<div class="row">
				<div class="col-6">
					<span class="lk-label">Level:</span>
					<span id="lk-label-level-value"></span>
				</div>
				<div class="col-6">
					<span class="lk-label">Objective:</span>
					<span id="lk-label-objective-value"></span>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-6">
					<span class="lk-label">Equipment:</span>
					<span id="lk-label-equipment-value"></span>
				</div>
				<div class="col-6">
					<span class="lk-label">Duration:</span>
					<span id="lk-label-duration-value"></span>
				</div>
			</div>
			<div class="row mt-4">
				<div class="col-12">
					<span class="lk-workout-detail-description" id="lk-workout-detail-description">
					</span>
				</div>
			</div>
		</div>
	</div>
</div>


</section>



<!-- Train Section -->
<section class="page-section d-none" id="train">
<div id="lk-train-wrapper">
	<h3 class="lk-train-title text-center">Choose your workout</h3>
    <div class="container-fluid-xl mt-5">
		<div class="row row-centered" id="lk-purchased-workouts-list">
		</div>
	</div>
</div>

<div id="lk-train-detail-wrapper" data-workoutId="">
	<div class="container-fluid">
	 	<div class="row pb-3">
	 		<div class="col-12">
	 			<a class="btn btn-primary backBtn btn-lg pull-left" href="#" onclick="goBackToPurchasedWorkouts()">
					<i class="fa fa-angle-left"></i> Back To Purchased Workouts
				</a>
	 		</div>
 		</div>
		<div class="row px-5">
 			<div class="col-12 px-0 mb-2">
				<h3 class="lk-workout-title mb-0" id="lk-train-workout-title"></h3>
	        	<h4 class="lk-workout-slogan" id="lk-train-workout-slogan"></h4> 
			</div>
 		</div>
		<div class="row">
			<div class="col-12 col-lg-8 lk-current-exercice" data-id="">
				<div class="row px-5">
					<div class="col-12 px-0" id="lk-train-selected-video-div" >
						<!-- <video width="100%" controls>
						  <source src="videos/exercices/ex2.MOV" type="video/mp4">
						</video> -->
					</div>
					<div class="col-12 py-2 lk-exercice-desc-area">
						<h3 class="lk-exercice-title float-left" id="lk-train-selected-exercice-title"></h3>
						<button id="lk-train-markascomplete-button" class="lk-complete-button btn btn-secondary btn-sm float-right" type="button" onclick="markAsComplete(this)">Mark As Complete</button>
						<button id="lk-train-unmarkascomplete-button" class="lk-uncomplete-button btn btn-secondary btn-sm float-right" type="button" onclick="unmarkAsComplete(this)">Completed</button>
					</div>
					<div class="col-12 py-2 lk-exercice-desc-area">
					<span class="lk-exercice-text" id="lk-train-exercice-desc"></span>
					</div>
				</div>
				
			</div>
			<div class="col-12 col-lg-4 mt-2 mt-lg-0 px-5 px-lg-2" id="lk-exercices-list">
				
			</div>
		</div>
	</div>
</div>

 </section> 
   
   
   
<!-- About Section -->
<section class="page-section bg-primary" id="about">
	<div class="container wow bounceInDown center">
		<div class="row ">
			<div class="col-12 col-lg-6">
				<div class="row">
					<div class="col-12">
						<img class="lk-about-img" src="img/about-pic.jpg"/>
					</div>
					<div class="col-12 lk-social-icons-list">
						<a href="https://www.facebook.com/HappyWallPaints" target="_blank">
							<i class="fab fa-facebook-square lk-transition-icon"></i>
						</a>
					
						<a href="https://www.instagram.com/happywallpaints" target="_blank">
							<i class="fab fa-instagram lk-transition-icon"></i>
						</a>
					
						<a href="https://www.instagram.com/happywallpaints" target="_blank">
							<i class="fab fa-youtube lk-transition-icon"></i>
					</a>
					</div>
				</div>
				
			</div>
			<div class="col-12 col-lg-6">
				<h5><strong>Charles Ghannoum</strong></h5>
				<h6 class="mb-4">Fitness trainer</h6>
				
				<span class="lk-about-text">
					Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus lectus pellentesque dictumst curae dictumst Nisl molestie in tempor ad imperdiet eleifend a elit potenti sapien enim auctor aliquam Cursus et feugiat ut erat odio vulputate id praesent volutpat varius
				</span>
			</div>
		</div>
		<div class="row">
			<div class="col-5 lk-social-icons-list">
			
								
			</div>
			<div class="col-7">
			</div>
		</div>
	</div>
</section>
<!-- Contact Section -->
<section class="page-section" id="contact">
         <div class="container wow bounceInLeft">
	         <form id="contact-form">
	            <div class="row">
					<div class="col-12 col-lg-5">
						<div class="row lk-phone-email-address-row">
							<div class="col-4 col-lg-12 hidden-md-down">
								<i class="fas fa-phone lk-contact-icon fa-rotate-90"></i>
								<span class="d-none d-lg-inline lk-label">&nbsp;&nbsp;&nbsp; Phone:&nbsp;&nbsp;</span>
								<span id="lk-contact-phone" class="lk-value"></span>
							</div>
							<div class="col-4 col-lg-12">
								<i class="fas fa-envelope lk-contact-icon"></i>
								<span class="d-none d-lg-inline lk-label">&nbsp;&nbsp;&nbsp; E-mail:&nbsp;&nbsp;</span>
								<span id="lk-contact-email" class="lk-value"></span>
							</div>
							<div class="col-4 col-lg-12">
								<i class="fas fa-map-marker lk-contact-icon"></i>
								<span class="d-none d-lg-inline lk-label">&nbsp;&nbsp;&nbsp; Address:&nbsp;&nbsp;</span>
								<span id="lk-contact-address" class="lk-value"></span>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-7">
						<div class="row">
							<div class="col-12 col-lg-6 form-group">
								<label for="lk-contact-name" class="control-label required"><strong>Name</strong></label>
								<input type="text" value="" class="form-control" id="lk-contact-name" placeholder="Enter your name">
							</div>
							<div class="col-12 col-lg-6 form-group">
								<label for="lk-contact-email" class="control-label required"><strong>E-mail</strong></label>
								<input type="email" value="" class="form-control" id="lk-contact-email" placeholder="Enter your e-mail">
							</div>
						</div>
						<div class="row">
							<div class="col-12 col-lg-6 form-group lk-country-col">
								<label for="lk-phone" class="control-label"><strong>Country/Phone</strong></label>
								<input type="tel" class="form-control" id="lk-phone">
							</div>
						</div>
						<div class="row">
							<div class="col-12 col-lg-12 form-group">
								<label for="lk-message" class="control-label required"><strong>Message</strong></label>
								<textarea class="form-control" rows="10" id="lk-message"></textarea>
							</div>
						</div>
						<div class="row">
							<div class="col-12 col-lg-12 form-group">
								<div class="btn-group float-right mt-2" role="group">
					                <button class="btn btn-secondary btn-md mr-1" type="button" onclick="resetContactForm($('#contact-form'))">Reset</button>
					                <button class="btn btn-md btn-secondary" type="submit" >Send</button>
					            </div>
							</div>
						</div>
					</div>
				</div>
			</form>
         </div>
  
</section>
	  
	  
	  
      <!-- Footer -->
      <footer class="bg-light py-5" id="lk-main-footer">
         <div class="container">
            <div class="small text-center text-muted">Copyright &copy; 2019 - Layakati</div>
         </div>
      </footer>

      <!-- Custom scripts for this template -->
      <script src="js/creative.js?v=4"></script>
	  
	  <script src="vendor/intl-tel-input-master/build/js/intlTelInput-jquery.min.js"></script> 
	  <script src="vendor/intl-tel-input-master/build/js/intlTelInput.min.js"></script> 	
	  <script>
			$("#lk-phone").intlTelInput({
				utilsScript: "vendor/intl-tel-input-master/build/js/utils.js",
				separateDialCode: true
			});
			$("#lk-phone").intlTelInput("setCountry", "lb");

			var initPhoneBorderStyle=$("#lk-phone").css("border-style");
			var initPhoneBorderColor=$("#lk-phone").css("border-color");
			
			$("#lk-phone").change(function(){
				var telInput = $(this);
				if ($.trim(telInput.val())){
					if (telInput.intlTelInput("isValidNumber")){
						telInput.css("border-style",initPhoneBorderStyle);
					   	telInput.css("border-color",initPhoneBorderColor);
					} else{
					  	telInput.css("border-style","solid");
					  	telInput.css("border-color","red");
					}
				}
			});
			
	  </script>
	  
	  
	   <!-- Menu Toggle Script -->
	  <script>
/* 	    $("#menu-toggle").click(function(e) {
	      e.preventDefault();
	      $("#wrapper").toggleClass("toggled");
	      
	      if($("#wrapper").hasClass("toggled")){
	    	  $("#lk-toggle-menu").html("<strong><i class='fa fa-arrow-right'></i> Show Them Back</strong>");
	      }else{
	    	  $("#lk-toggle-menu").html("<strong><i class='fa fa-arrow-left'></i> Hide Them</strong>");
	      }
	    }); */
	    
        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar, #content').toggleClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });
	  </script>
  
   </body>
</html>