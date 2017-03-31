// Author (C) - Tomasz Niedziela-Brach



function SimpleRotator(wrapper){

	var self;

	var wrapper = wrapper;

	var wrapper_width = $(wrapper).width();

	var wrapper_height = $(wrapper).height();

	var container = $(wrapper).find('.rotator-container');

	var navigation = $(wrapper).find('.navigation');

	var image_width = $(wrapper).width();

	var image_height = $(wrapper).height();

	var aspect_radio = image_width/image_height;

	var margin_tweak = 0;

	var lock = false;

	this.images = []

	this.active = 0;

	this.mobile = 860;

	this.interval;

	this.slideCallback = null;

	

	var dotClickCallback = function dotClickCallback(){

		var index = this.getAttribute('index');

		goTo(parseInt(index));

	}



	var goTo = function goTo(index){

		onSlide();

		if(!lock && index < self.images.size()){

			if(typeof(self.interval) !== 'undefined'){

				clearInterval(self.interval)

			}

			lock = true;

			var margin_delta = self.leftMargin(self.currentIndexOf(index)) - self.leftMargin(self.currentIndexOf(self.active));

			// console.log("Margin delta: " + margin_delta);

			self.updateStuff();



			$(container).animate({

		    	marginLeft: '+=' + margin_delta

			}, 700,"easeInOutExpo", function(){

				lock = false;

				self.active = index;

				window.resetTimeout(self);

			});

		}

	}



	var onSlide = function onSlide(){

		self.slideCallback(self.currentIndexOf(self.active), "img", container);

		$(container).css("margin-left", self.leftMargin(self.currentIndexOf(self.active)));

	}



	this.init = function init(){

		self = this;

		this.images = $(wrapper).find('img');

		image_width = this.images[0].width;

		image_height = this.images[0].height;

		aspect_radio = image_width/image_height;

		console.log("w: " + image_width + " h: " + image_height + " a: " + aspect_radio);

		this.updateStuff();

		this.expandNav();

		window.resetTimeout(this);

	}





	this.leftMargin = function leftMargin(index){

		return -index*image_width + margin_tweak;

	}



	this.currentIndexOf = function currentIndexOf(img_index){

		return $(container).find('img').index(this.images[img_index]);

	}



	this.expandNav = function expandNav(){

		var count = 0;

		this.images.each(function(i){

			var dot = document.createElement('li');

			dot.setAttribute('index', i);

			dot.addEventListener('click', dotClickCallback, false);

			navigation.append(dot);

			count += 1;

		});

		$(navigation).height(count * 19);

	}



	this.updateStuff = function updateStuff(){

		wrapper_width = $(wrapper).width();

		wrapper_height = $(wrapper).height();

		container.css("margin-top", "");

		$(wrapper).removeAttr('style');

		this.images.removeAttr('style');

		margin_tweak = 0;

		if(wrapper_width <= this.mobile){

			this.images.width(wrapper_width);

			updateImageSize();

			$(wrapper).height(this.images[0].height);

		}

		else if(wrapper_width/wrapper_height > aspect_radio){

			this.images.width(wrapper_width);

			updateImageSize();

			container.css("margin-top", -(this.images[0].height - wrapper_height)/2);

		}

		else if(wrapper_width/wrapper_height < aspect_radio){

			this.images.height(wrapper_height);

			updateImageSize();

			margin_tweak = -(image_width - wrapper_width)/2;

		}

		container.width(image_width*this.images.size());

		container.css("margin-left", this.leftMargin(this.currentIndexOf(this.active)));

	}



	var updateImageSize = function updateImageSize(){

		image_width = self.images[0].width;

		image_height =self.images[0].height;

	}



	this.getWrapper = function getWrapper(){

		return wrapper;

	}



	this.nextImg = function nextImg(){

		var next = this.active + 1;

		if(next >= this.images.size()){

			next = 0;

		}

		// console.log("Active: " + this.active + " Next: " + next);

		goTo(next);

	}



	this.previousImg = function previousImg(){

		var previous = this.active - 1;

		if(previous < 0){

			previous = this.images.size()-1;

		}

		goTo(previous);

	}

}



var rotators = []

var timeout = 4500

var resetTimeout = function resetTimeout(rotator){

	if(typeof(rotator.interval) !== 'undefined'){

		clearInterval(rotator.interval);

	}

	rotator.interval = setInterval( function(){ rotator.nextImg() }, timeout);

}



$(window).resize(function(){

	$(rotators).each(function(x){

		this.updateStuff();

	});

});