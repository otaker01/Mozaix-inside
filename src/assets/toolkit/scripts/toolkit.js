/**
 * Toolkit JavaScript
 */

'use strict';

var $ = require('jquery');
// var Modernizr = require('modernizr');

// Third-party modules
// require('../../vendor/example/plugin.js');

// Foundation JS
require('./foundation.js');

// Utilities
// require('./utils/reinit-components.js');

// Compatibility
// require('./compatibility/modernizr-tests.js');

// Components
// require('./components/owl-carousel.js');

$(function(){
	// $('input, textarea').placeholder();
	$(document).foundation();
	
	setTimeout(function(){
		$(".fouc").css('opacity',1);
	},200);
});

// let searchResults = document.getElementById('search-result');
// let searchbar = document.getElementById('searchbar');

// searchbar.addEventListener('click', () => {
// 	searchResults.classList.add("displayFlex")
// })

$("#searchbar").click(function(){
	$(".search-results").addClass("displayFlex");
  });
