$(window).on("load",function(){
	//home section slideshow
	let slideIndex = $(".slide.active").index();
	 const slideLen = $(".slide").length;
 
 function slideshow(){
 	
 	$(".slide").removeClass("active").eq(slideIndex).addClass("active");
 	if(slideIndex == slideLen-1){
 		slideIndex = 0;
 	}
 	else{
 		slideIndex++;
 	}
 	setTimeout(slideshow,5000);
 }
 slideshow();
})
 
 $(document).ready(function(){


 	$(".hamburger-btn").click(function(){
 		$(".header .nav").slideToggle();
 	})
 	$(".header .nav a").click(function(){
 		if($(window).width() < 768){
 			$(".header .nav").slideToggle();
 		}
 	})

  $(window).scroll(function(){

	if($(this).scrollTop() > 100){
		$(".header").addClass("fixed");
	}
	else{
		$(".header").removeClass("fixed");
	}
})
 
  
  
peopleFilter($(".filter-btn.active").attr("data-target"))
  $(".filter-btn").click(function(){
  	if(!$(this).hasClass("active")){
  		peopleFilter($(this).attr("data-target"))
  	}
  })
  function peopleFilter(target){
  	$(".filter-btn").removeClass("active");
  	$(".filter-btn[data-target='"+target+"']").addClass("active");
  	$(".people-item").hide();
  	$(".people-item[data-category='"+target+"']").fadeIn();

  }
})
  
 




 