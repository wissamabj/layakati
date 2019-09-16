var programTable=[{	programId:"program-1", 
							programThumbnail:"img/thumbnails/thumb-program-adv-kettlbells.jpg",
							programPic:"img/programs/program-adv-kettlbells.jpg",
							programTitle:"ADVANCED KETTLEBELLS",
							programSlogan:"Move it",
							programPrice:"60.00 USD",
							programPeriod:"12 weeks",
							programLevel:["Intermediate","Advanced"],
							programObjective:["Fat Loss","Muscle Growth"],
							programEquipment:["Gym Program"]
							},
		                  {	programId:"program-2", 
							programThumbnail:"img/thumbnails/thumb-program-let-it-burn.jpg",
							programPic:"img/programs/program-let-it-burn.jpg",
							programTitle:"LET IT BURN",
							programSlogan:"Strength Program",
							programPrice:"45.00 USD",
							programPeriod:"8 weeks",
							programLevel:["Beginner","Intermediate"],
							programObjective:["Fat Loss"],
							programEquipment:["Gym Program"]
							},
		                  {	programId:"program-3", 
							programThumbnail:"img/thumbnails/thumb-program-the-caveman.jpg",
							programPic:"img/programs/program-the-caveman.jpg",
							programTitle:"THE CAVEMAN",
							programSlogan:"Unleash The Beast In You",
							programPrice:"56.00 USD",
							programPeriod:"12 weeks",
							programLevel:["Intermediate","Advanced"],
							programObjective:["Muscle Growth"],
							programEquipment:["Gym Program"]
							},
						  { programId:"program-4", 
							programThumbnail:"img/thumbnails/thumb-program-the-caveman.jpg",
							programPic:"img/programs/program-the-caveman.jpg",
							programTitle:"THE CAVEMAN",
							programSlogan:"Unleash The Beast In You",
							programPrice:"56.00 USD",
							programPeriod:"12 weeks",
							programLevel:["Intermediate","Advanced"],
							programObjective:["Muscle Growth"],
							programEquipment:["Gym Program"]
							}
						
					 ];
		var featuredProgramIds=['program-2','program-3'];
		
		
		var workoutTable=[{	workoutId:"workout-1", 
							workoutThumbnail:"img/thumbnails/thumb-workout-adv-kettlbells.jpg",
							workoutPic:"img/workouts/workout-adv-kettlbells.jpg",
							workoutTitle:"ADVANCED KETTLEBELLS",
							workoutSlogan:"Move it",
							workoutDuration:"30 min",
							workoutPrice:"10.00 USD",
							workoutYoutube:"https://www.youtube.com/embed/c4tOCNQg4Wk?autoplay=1",
							workoutLevel:["Intermediate","Advanced"],
							workoutObjective:["Fat Loss","Muscle Growth"],
							workoutEquipment:["None"],
							workoutCategories:["1","2"],
							workoutDescription:"Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus lectus pellentesque dictumst curae dictumst Nisl molestie in tempor ad imperdiet eleifend a elit potenti sapien enim auctor aliquam Cursus et feugiat ut erat odio vulputate id praesent volutpat varius",
							workoutExercices:[
							                  {exerciceId:"ex-1", completed: true},
							                  {exerciceId:"ex-2", completed: false},
							                  {exerciceId:"ex-3", completed: false},
							                  {exerciceId:"ex-4", completed: false}
											]
							},
				          {	workoutId:"workout-2", 
							workoutThumbnail:"img/thumbnails/thumb-workout-let-it-burn.jpg",
							workoutPic:"img/workouts/workout-let-it-burn.jpg",
							workoutTitle:"LET IT BURN",
							workoutSlogan:"Strength Program",
							workoutPrice:"15.00 USD",
							workoutYoutube:"https://www.youtube.com/embed/RHTCKVfelFQ?autoplay=1",
							workoutDuration:"30 min",
							workoutLevel:["Beginner","Intermediate"],
							workoutObjective:["Fat Loss"],
							workoutEquipment:["Gym"],
							workoutCategories:["1","2","3"],
							workoutDescription:"Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus lectus pellentesque dictumst curae dictumst Nisl molestie in tempor ad imperdiet eleifend a elit potenti sapien enim auctor aliquam Cursus et feugiat ut erat odio vulputate id praesent volutpat varius",
							workoutExercices:[
							                  {exerciceId:"ex-2", completed: true},
							                  {exerciceId:"ex-3", completed: false},
							                  {exerciceId:"ex-4", completed: false},
							                  {exerciceId:"ex-5", completed: false}
											]
							},
				          {	workoutId:"workout-3", 
							workoutThumbnail:"img/thumbnails/thumb-workout-the-caveman.jpg",
							workoutPic:"img/workouts/workout-the-caveman.jpg",
							workoutTitle:"THE CAVEMAN",
							workoutSlogan:"Unleash The Beast In You",
							workoutDuration:"30 min",
							workoutPrice:"16.00 USD",
							workoutYoutube:"https://www.youtube.com/embed/xaERbUQ3VNY?autoplay=1",
							workoutLevel:["Intermediate","Advanced"],
							workoutObjective:["Muscle Growth"],
							workoutEquipment:["Few"],
							workoutCategories:["1","4","5"],
							workoutDescription:"Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus lectus pellentesque dictumst curae dictumst Nisl molestie in tempor ad imperdiet eleifend a elit potenti sapien enim auctor aliquam Cursus et feugiat ut erat odio vulputate id praesent volutpat varius",
							workoutExercices:[
							                  {exerciceId:"ex-1", completed: false},
							                  {exerciceId:"ex-3", completed: true},
							                  {exerciceId:"ex-4", completed: false},
											]
							},
						  { workoutId:"workout-4", 
							workoutThumbnail:"img/thumbnails/thumb-workout-the-caveman.jpg",
							workoutPic:"img/workouts/workout-the-caveman.jpg",
							workoutTitle:"BACK WORKOUT",
							workoutSlogan:"Tag Line Goes Here",
							workoutPrice:"9.00 USD",
							workoutYoutube:"https://www.youtube.com/embed/O1avHkZR-hc?autoplay=1",
							workoutLevel:["Intermediate","Advanced"],
							workoutObjective:["Muscle Growth"],
							workoutEquipment:["Gym"],
							workoutCategories:["1","5"],
							workoutDescription:"Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus lectus pellentesque dictumst curae dictumst Nisl molestie in tempor ad imperdiet eleifend a elit potenti sapien enim auctor aliquam Cursus et feugiat ut erat odio vulputate id praesent volutpat varius",
							workoutExercices:[
							                  {exerciceId:"ex-1", completed: true},
							                  {exerciceId:"ex-2", completed: true},
							                  {exerciceId:"ex-3", completed: true},
											]
							}
						
					 ];
		var exerciceTable=	[{
								exerciceId:"ex-1",
								exerciceThumbnail:"img/thumbnails/ex1-thumb.png", 
								exerciceVideo:"videos/exercices/ex1.MOV", 
								exerciceDescription:"Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus", 
								exerciceTitle:"Dragon Tail",
							},
							{
								exerciceId:"ex-2",
								exerciceThumbnail:"img/thumbnails/ex2-thumb.png", 
								exerciceVideo:"videos/exercices/ex2.MOV", 
								exerciceDescription:"Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus", 
								exerciceTitle:"Mountain Climber",
							},
							{
								exerciceId:"ex-3",
								exerciceThumbnail:"img/thumbnails/ex3-thumb.png", 
								exerciceVideo:"videos/exercices/ex3.MOV", 
								exerciceDescription:"Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus", 
								exerciceTitle:"Weighted Sit Ups",
							},
							{
								exerciceId:"ex-4",
								exerciceThumbnail:"img/thumbnails/ex4-thumb.png", 
								exerciceVideo:"videos/exercices/ex4.MOV", 
								exerciceDescription:"Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus", 
								exerciceTitle:"Thread The Needle",
							},
							{
								exerciceId:"ex-5",
								exerciceThumbnail:"img/thumbnails/ex5-thumb.png", 
								exerciceVideo:"videos/exercices/ex5.MOV", 
								exerciceDescription:"Odio lectus sodales interdum diam sit tempor ipsum suscipit amet vel vestibulum sodales Nec leo per venenatis curabitur conubia praesent mauris suspendisse dui conubia Cubilia elit dapibus metus libero elementum tortor class donec senectus Donec platea iaculis dictumst nibh tincidunt mattis dolor commodo amet varius Porttitor litora vivamus auctor morbi erat felis amet Fusce egestas tortor commodo ad risus", 
								exerciceTitle:"Bar Front Squat",
							}
							];
		
		
		
		var cartTable=[{elementType:"w", elementId:"workout-3"}];
		var purchasedTable=[{elementType:"w", elementId:"workout-1"}, {elementType:"w", elementId:"workout-2"}];
		
		var subTotalStr="101.00 USD";
		var cartItemsNumber=1;
		
		var contactPhoneNumber="+961 70 22 66 75";
		var contactEmail="info@layakati.com";
		var contactAddress="Zouk Mosbeh, Lebanon";
		
		var categories=[
		                {categoryId:"1",categoryLabel:"Featured"},
		                {categoryId:"2",categoryLabel:"Kettlebells"},
		                {categoryId:"3",categoryLabel:"Whole body"},
		                {categoryId:"4",categoryLabel:"Chest"},
		                {categoryId:"5",categoryLabel:"Back"},
		                {categoryId:"6",categoryLabel:"Legs"},
		                {categoryId:"7",categoryLabel:"Abs"},
		                {categoryId:"8",categoryLabel:"Biceps"},
		                {categoryId:"9",categoryLabel:"Triceps"},
		                {categoryId:"10",categoryLabel:"Shoulders"},
		                {categoryId:"11",categoryLabel:"Glutes"}		                
		                ];
		
		