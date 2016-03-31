var myFunction = function(){

// For the home page, I want my name to fade in once the page is loaded.
	$('.title').fadeIn(1000);
	$('.subtitle').delay(500).fadeIn(1000);

// My name will disappear once I scroll down.

$(window).scroll(function() {

    if ($(this).scrollTop()>10)
     {
        $('.name').fadeOut();
     }
    else
     {
      $('.name').fadeIn();
     }
 });


// This is for the hamburger menu. 

    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
 
        $(".hamburger").click(function () {
        	$(".menu").toggleClass("open");
    });

// for the submit button

	$(".submit").on('submit', function () {
		event.preventDefault();
   if ( $('.text').val() == '' ) {
      alert('This message is empty.');
   } else {
      alert('Thanks for your message!');
   }
	});

}

$(document).ready(myFunction); // Now the document is ready.

