// Author (C) - Tomasz Niedziela-Brach

function TrainRotator(container, height){
	var h = height;
	var s = $(window).width();
	var p = 5;
	this.active = 0;
	this.images = [];
	this.sum = 0;
	var container = container;
	var sizeOf = $(container).find('li').size();
	var flag = 1;

	this.leftMargin = function leftMargin(i){
		return -(widthSum(this.images.slice(0,i))+i*p-(s-$(this.images[i]).width())/2)-24;
	}

	var widthSum = function widthSum(arr){
		var sum = 0;
		$(arr).each(function(i,v){
			sum += $(v).width();
		})
		return sum;
	}
	this.updateStuff = function updateStuff(){
		if( this.active == 0 ){
			$(container).find('li:last-child').prependTo($(container).find('ul'));
			$(container).find('li:last-child').prependTo($(container).find('ul'));
			this.active = 2;
		}
		s = $(window).width();
		sizeOf = $(container).find('li').size();
		this.images = $(container).find('img');
		this.images.height(h);
		this.sum = widthSum(this.images);
		$(container).find('li').each(function(i,v){
			$(v).width($(v).find('img').width());
			$(v).css("margin-right", p);
		})
		$(container).find('ul').css( "margin-left", this.leftMargin(this.active) );
		$(container).find('ul').css( "width", this.sum + p*sizeOf);
		this.toggleActive();
	}

	this.goToIndex = function goToIndex(i){
		if( flag ){
			flag=0;
			if( this.active == 2 && i < this.active ){
				$(container).find('li:last-child').prependTo($(container).find('ul'));
				this.active++;
				i++;
			}
			if( this.active == sizeOf-3 && i > this.active ){

				$(container).find('li:first-child').appendTo($(container).find('ul'));
				this.active--;
				i--;
			}
			if( i == 0 ){
				$(container).find('li:last-child').prependTo($(container).find('ul'));
				this.active++;
				i++;
			}
			if( i == sizeOf-1 ){
				$(container).find('li:first-child').appendTo($(container).find('ul'));
				this.active--;
				i--;
			}
			this.updateStuff();
			var t = this.leftMargin(i)-this.leftMargin(this.active);
			$(container).find('ul').animate({
		    	marginLeft: '+='+t
			}, 500, function(){
				flag = 1;
			});

			this.active = i;
			this.toggleActive();
			return 1;
		}
	}
	
	this.toggleActive = function toggleActive(){
		$(container).find('li').removeClass('active');
		$(container).find('li').eq(this.active).toggleClass('active');
	}
	this.nextImg = function nextImg(){
		this.goToIndex(this.active+1);
	}

	this.prevImg = function prevImg(){
		this.goToIndex(this.active-1);
	}
}
