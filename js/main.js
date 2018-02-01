/*menu img*/
$( document ).ready(function() {
		$('.li_1').css('background','transparent');
			$('.btn_menu_1').css('color','#fff');
/*Carousel*/
var owl = $(".carousel");
	owl.owlCarousel({
		items : 4,
		autoHeight : true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});


	});

function item1(){
	$('.menu_img').css('background','url(img/menu_img_1.jpg)50% 50% no-repeat');
	$('.li_1').css('background','transparent');
	$('.btn_menu_1').css('color','#fff');
		$('.li_2,.li_3,.li_4,.li_5').css('background','url(img/img_menu_back.jpg)no-repeat');
		$('.btn_menu_2,.btn_menu_3,.btn_menu_4,.btn_menu_5').css('color','#2f3638');



}

function item2(){
	$('.menu_img').css('background','url(img/menu_img_2.jpg)50% 50% no-repeat');
	$('.li_2').css('background','transparent');
	$('.btn_menu_2').css('color','#fff');
		$('.li_1,.li_3,.li_4,.li_5').css('background','url(img/img_menu_back.jpg)no-repeat');
		$('.btn_menu_1,.btn_menu_3,.btn_menu_4,.btn_menu_5').css('color','#2f3638');


}

function item3(){
	$('.menu_img').css('background','url(img/menu_img_3.jpg)50% 50% no-repeat');
	$('.li_3').css('background','transparent');
	$('.btn_menu_3').css('color','#fff');
		$('.li_1,.li_2,.li_4,.li_5').css('background','url(img/img_menu_back.jpg)no-repeat');
		$('.btn_menu_1,.btn_menu_2,.btn_menu_4,.btn_menu_5').css('color','#2f3638');


}


function item4(){
	$('.menu_img').css('background','url(img/menu_img_4.jpg)50% 50% no-repeat');
	$('.li_4').css('background','transparent');
	$('.btn_menu_4').css('color','#fff');
		$('.li_1,.li_2,.li_3,.li_5').css('background','url(img/img_menu_back.jpg)no-repeat');
		$('.btn_menu_1,.btn_menu_2,.btn_menu_3,.btn_menu_5').css('color','#2f3638');


}

function item5(){
	$('.menu_img').css('background','url(img/menu_img_5.jpg)50% 50% no-repeat');
	$('.li_5').css('background','transparent');
	$('.btn_menu_5').css('color','#fff');
		$('.li_1,.li_2,.li_3,.li_4').css('background','url(img/img_menu_back.jpg)no-repeat');
		$('.btn_menu_1,.btn_menu_2,.btn_menu_3,.btn_menu_4').css('color','#2f3638');


}
	
/*end menu img*/
/*burger*/
	function brg(){
		$('.nav_burger').slideToggle();
	}
/*end burger*/