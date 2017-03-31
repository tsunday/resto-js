// Author (C) - Tomasz Niedziela-Brach

var continueSlide = function(index, element, parent, onLast){
	var childs = $(parent).children(element);
	var len = childs.size();
	if(len <= 3 || onLast){
		if(index==0){
			$(parent).prepend(childs[len-1])
		}
		else if(index == len-1){
			$(parent).append(childs[0])
		}
		return
	}
	if(index == 1){
		$(parent).prepend(childs[len-1])
	}
	else if(index == len-2){
		$(parent).append(childs[0])
	}
}

var scrollMargin = function(){
	return $(window).width()<=860?10:115;
}

var scrollUnHide = function(element){
	$(element).css("padding-top", 0);
}

var scrollHide = function(element){
	$(element).css("padding-top", 1000);
}
$(document).ready(function(){
	$("#topMenu .slide, .topBack").click(function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		var stop = $(target).offset().top;
		$('html, body').animate({ scrollTop: stop-scrollMargin()}, 700);
		$("#topMenu .slide, .topBack").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
	});

	$(".back a").click(function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		var stop = $(target).offset().top;
		$('html, body').animate({ scrollTop: stop}, 140);
	});

	$(".next a").click(function(e){
		e.preventDefault();
		var sections = document.getElementsByTagName("section");
		var currentSection = this.parentElement.parentElement;
		var i;
		for (i = 0; i < sections.length; i++) {
		 	if(currentSection == sections[i]){
		 		break;
		 	}
		 }; 
		 stop = $(sections[i + 1]).offset().top;
		$('html, body').animate({ scrollTop: stop-scrollMargin()}, 700);
	});

	$(".mobile-menu img").click(function(){
		$("#topMenu ul").slideToggle({
			duration: 600,
			easing: 'easeOutBack'
		});
	});

	$(window).scroll(function(){
		var sides = $(".side");
		var current = $(this).scrollTop()+scrollMargin()+10;
		var topBar = $("#topMenu .slide");
		$(sides).each(function(n, k){
			pos = $(sides[n]).offset().top;
			if(current > pos){
				topBar.removeClass("active");
				$(topBar[n]).addClass("active") 
			}
		});
	});

});
