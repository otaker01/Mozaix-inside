/**
 * Toolkit JavaScript
 */

'use strict';

require('./components/events.js');

var $ = require('jquery');
var events = require('./events/src/calendar.js');

// var Modernizr = require('modernizr');

// Third-party modules
// require('../../vendor/example/plugin.js');

// Foundation JS
// require('./foundation.js');

// Utilities
// require('./utils/reinit-components.js');

// Compatibility
// require('./compatibility/modernizr-tests.js');

// Components
// require('./components/owl-carousel.js');

$(function(){
	// $('input, textarea').placeholder();
	// $(document).foundation();

	$('#calendar-test').calendar({
		data: [
			{
			  date: '2015/12/24',
			  value: 'Christmas Eve'
			},
			{
			  date: '2015/12/25',
			  value: 'Merry Christmas'
			},
			{
			  date: '2016/01/01',
			  value: 'Happy New Year'
			}
		  ]
	});
	
	setTimeout(function(){
		$(".fouc").css('opacity',1);
	},200);
});


$(".newpost-input").click(function(){
	// $(".rightbar, .sidebar, .header").css("filter", "brightness(0.5)")
	$(".onclick-dark").css("display", "flex")
	$(".newpost-button").css("display", "initial")
	$(".attachment").css("display", "initial")
	$("#newpost2").addClass('box-newpost')
	$(".newpost-2").css("display", "flex")
	// $(".newpost2-b").addClass(".newpost2-b-active")
});

$(".newpost2-b").click(function() {
	// $(".newpost2-b").addClass("active-newpost2-b")
})

$('body').click(function(e){
	// console.log($(e.target))
	if (!$(e.target).is(".newpost-input, .newpost, .newpost-2, .newpost-button, .newpost-button, .icon-send-button, .newpost2-b, .icon-attachment") || $(".newpost-input").has(e.target).length) {
		// $(".rightbar, .sidebar, .header").css("filter", "none");
		$(".attachment").css("display", "none")

		$(".onclick-dark").css("display", "none")
		$(".newpost-button").css("display", "none")
		$("#newpost2").removeClass('box-newpost')
		$(".newpost-2").css("display", "none")
	}
});


// $('.more-text').click(function(){
// 	$("hideen-text-report").css("color", "red")
// 	$("hideen-div-report").css("color", "red")
// })


// FIRST  SPLASH SCREEN   
// FIRST  SPLASH SCREEN   
$(".checked").click(function(){
	$("#report-splash").css("display", "initial");
})

// FIRST SPLASH SCREEN IF U CLICK EXIT
// FIRST SPLASH SCREEN IF U CLICK EXIT
$("#exit").click(function(){
	$(".splash-black-screen").css("filter", "none");
	$(".splash-black-screen").css("overflow", "unset");
	$("#report-splash").css("display", "none");
})

// SECOND SPLASH SCREEN IF U CLICKED NEXT
// SECOND SPLASH SCREEN IF U CLICKED NEXT
$("#next").click(function(){
	$(".splash-black-screen").css("filter", "brightness(0.5)");
	$(".splash-black-screen").css("overflow", "hidden");
	$("#report-splash").css("display", "none");
	$("#report-write").css("display", "initial");
})

//SECOND SCREEN BACK BUTTON
//SECOND SCREEN BACK BUTTON
$("#back2").click(function(){
	$(".splash-black-screen").css("filter", "brightness(0.5)");
	$(".splash-black-screen").css("overflow", "hidden");
	$("#report-write").css("display", "none");
	$("#report-splash").css("display", "unset");
})


//THIRD SCREEN IF U CLICKED NEXT IN THE SECOND SCREEN
//THIRD SCREEN IF U CLICKED NEXT IN THE SECOND SCREEN
$("#next2").click(function(){
	$(".splash-black-screen").css("filter", "brightness(0.5)");
	$(".splash-black-screen").css("overflow", "hidden");
	$("#report-write").css("display", "none");
	$("#report-splash").css("display", "none");
	$("#report-splash-out").css("display", "unset");
})
//THIRD SCREEN IF U CLICK STAY IN THE THIRD SCREEN
//THIRD SCREEN IF U CLICK STAY IN THE THIRD SCREEN
$("#stay, #logOut").click(function(){
	$(".splash-black-screen").css("filter", "none");
	$(".splash-black-screen").css("overflow", "unset");
	$(".splash-black-screen").css("width", "calc(100vw - 17px)");
	$("#report-write").css("display", "none");
	$("#report-splash").css("display", "none");
	$("#report-splash-out").css("display", "none");
	
})



//LOGIN BUTTON
//LOGIN BUTTON

$('#login').click(function(){
	// alert('By clicking Log in you agree to all our Tearms and Conditions')
	location.replace("http://localhost:3000/pages/home.html")

})
$('#terms-conditions').click(function(){
	location.replace("http://localhost:3000/pages/terms.html")

})


$('input, textarea').attr("spellcheck", "false");
/**
 * Toolkit JavaScript
 */

'use strict';

var $ = require('jquery');
// var Modernizr = require('modernizr');

// Third-party modules
// require('../../vendor/example/plugin.js');

// Foundation JS
// require('./foundation.js');

// Utilities
// require('./utils/reinit-components.js');

// Compatibility
// require('./compatibility/modernizr-tests.js');

// Components
// require('./components/owl-carousel.js');

$(function(){
	// $('input, textarea').placeholder();
	// $(document).foundation();
	
	setTimeout(function(){
		$(".fouc").css('opacity',1);
	},200);
});


$(".newpost-input").click(function(){
	// $(".rightbar, .sidebar, .header").css("filter", "brightness(0.5)")
	$(".onclick-dark").css("display", "flex")
	$(".newpost-button").css("display", "initial")
	$("#newpost2").addClass('box-newpost')
	$(".newpost-2").css("display", "flex")
	// $(".newpost2-b").addClass(".newpost2-b-active")
	$(".saysomething__overlay").css("display", "initial")
	$(".saysomething__content").css("z-index", "300")
});

$(".newpost2-b").click(function() {
	// $(".newpost2-b").addClass("active-newpost2-b")
})

$('body').click(function(e){
	// console.log($(e.target))
	if (!$(e.target).is(".newpost-input, .newpost, .newpost-2, .newpost-button, .newpost-button, .icon-send-button, .newpost2-b, .icon-attachment") || $(".newpost-input").has(e.target).length) {
		// $(".rightbar, .sidebar, .header").css("filter", "none");
		$(".onclick-dark").css("display", "none")
		$(".newpost-button").css("display", "none")
		$("#newpost2").removeClass('box-newpost')
		$(".newpost-2").css("display", "none")
		$(".saysomething__overlay").css("display", "none")

	}
});


// FIRST  SPLASH SCREEN   
// FIRST  SPLASH SCREEN   
$(".checked").click(function(){
	$("#report-splash").css("display", "initial");
	console.log("Sdasd")
})

$("#exit").click(function(){
	$("#report-write").css("display", "none");
	$("#report-splash").css("display", "none");
	$("#report-splash-out").css("display", "none");
})

// SECOND SPLASH SCREEN IF U CLICKED NEXT
// SECOND SPLASH SCREEN IF U CLICKED NEXT
$("#next").click(function(){
	$("#report-splash").css("display", "none");
	$("#report-write").css("display", "initial");
})

//SECOND SCREEN BACK BUTTON
//SECOND SCREEN BACK BUTTON
$("#back2").click(function(){
	$("#report-write").css("display", "none");
	$("#report-splash").css("display", "unset");
})


//THIRD SCREEN IF U CLICKED NEXT IN THE SECOND SCREEN
//THIRD SCREEN IF U CLICKED NEXT IN THE SECOND SCREEN
$("#next2").click(function(){
	$("#report-write").css("display", "none");
	$("#report-splash").css("display", "none");
	$("#report-splash-out").css("display", "unset");
})
//THIRD SCREEN IF U CLICK STAY IN THE THIRD SCREEN
//THIRD SCREEN IF U CLICK STAY IN THE THIRD SCREEN
$("#stay").click(function(){
	$("#report-write").css("display", "none");
	$("#report-splash").css("display", "none");
	$("#report-splash-out").css("display", "none");
	
})
$("#logOut").click(function() {
	location.replace("http://localhost:3000/pages/login.html")
})



//LOGIN BUTTON
//LOGIN BUTTON

$('#login').click(function(){
	// alert('By clicking Log in you agree to all our Tearms and Conditions')
	location.replace("http://localhost:3000/pages/home.html")

})
// LOGIN PAGE BUTTON TO TERMS&CONDITIONS
// LOGIN PAGE BUTTON TO TERMS&CONDITIONS
$('#terms-conditions').click(function(){
	location.replace("http://localhost:3000/pages/terms.html")

})

// REMOVING RED LINE UNDER INPUTS AND TEXTAREA TEXTS
$('input, textarea').attr("spellcheck", "false");


// LIKE Function START
// function like(e) {
// 	$(e.target).toggleClass('liked');
// }

// $(".like").click(like);

$('.select-labels').each((idx, el) => {
	el = $(el);
	let checkboxes = el.find("input");
	let selectedOptions = el.find('.selected-options');
	checkboxes.on('change', (e) => {
		let ch = $(e.target);
		if( e.target.checked ) {
			ch.parent('label').hide();
			let sel = $('<div/>').addClass("selected-op").text(ch.data('name'));
			selectedOptions.append(sel);
			sel.on('click', () => {
				sel.remove();
				e.target.checked = false;
				ch.parent('label').show();
			})
		}
	});
})



$(".like").click(function(e) {
	console.log(e.target, e)
	// $(e.target.parentElement).toggleClass('liked');
	// $(e.target).toggleClass('icon-liked');
	$(e.currentTarget).toggleClass('liked');
	// $(e.target.parentElement).toggleClass('liked');
	// $(e.target).toggleClass('icon-liked');
	// alert("hello")
})

$('.event-file-input').change(function() {
	var file = $('.event-file-input')[0].files[0].name;
	$('.event-input').text(file);
  });


function comment(e) {
	// console.log(e.target.parentElement.parentElement.parentElement.find(".comments"));
	// console.log(e.target.parentElement.parentE+lement.parentElement.children(".comments"));
		
}
$(".comment-b").click(comment)


$(".comment-b").click(function(e) {
	$(e.target).parents(".simplecard").find(".comments").toggleClass("appear")
})


$(".more-text").click(function(e) {
	$(e.target).parents(".simplecard").find(".hidden").toggleClass("toggle-active")
	$(e.target).parents(".simplecard").find(".view-all-report").toggleClass("hide")
	// $(e.target).parents(".simplecard").find(".view-all-report").toggleClass("toggle-active")

	
})


// $(".deadline-complete").click(function (e) {

// 	$(e.target).toggleClass("completed")
// 	console.log(e.target)
// })

//  DEADLINE COMPLETE BUTTON
$(".complete-span, .complete-text").click(function (e) {
	$(e.target.parentElement).toggleClass("completed")
	console.log(e.target)
})


$("#add-deadline").click(function() {
	$(".new-deadline").toggleClass("new-deadline-active");
	// $("new-deadline").css("display", "initial")
	// alert("hello")
}) 	


$("#cancel-deadline, #create-deadline").click(function() {
	$(".new-deadline").removeClass("new-deadline-active");
	
}) 	
$("#create-event").click(function() {
	$(".new-event").toggleClass("active");
	// $("new-deadline").css("display", "initial")
	// alert("hello")
}) 	


$("#event-cancel, #event-create").click(function() {
	$(".new-event").removeClass("active");
	
}) 	





function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.s-photo').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$(".file-input").change(function(){
    readURL(this);
});