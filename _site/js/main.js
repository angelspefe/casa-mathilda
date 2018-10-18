
// - - - - - - - - - - - LAZY LOAD
$('document').ready(function(){
  var myLazyLoad = new LazyLoad({
      elements_selector: ".lazy"
    });
    

    var preloader    = $('.loaderArea'), // селектор прелоадера
        imagesCount  = $('img').length, // количество изображений
        scriptsCount = $('script').length,
        percent      = 100 / (imagesCount + scriptsCount), // количество % на одну картинку
        progress     = 0, // точка отсчета
        imgSum       = 5, // количество картинок
        loadedImg    = 0, // счетчик загрузки картинок
        loader = preloader.find('.loader');
        str = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'; 
        jQuery(str).insertAfter(loader);
        /*var p = document.createElement('img');
        p.src="/images/loader.gif";
        preloader.append(p);*/
        console.log(imagesCount + " " + scriptsCount + " " + percent);


    if (imagesCount >= imgSum && imagesCount > 0) {

        for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений
            var img_copy        = new Image();
            img_copy.src        = document.images[i].src;
            img_copy.onload     = img_load;
            img_copy.onerror    = img_load;

        }


        for (var i = 0; i < scriptsCount; i++) { // создаем клоны изображений
          document.scripts[i].onload = img_load;
          document.scripts[i].onerror = img_load;
      }


        function img_load () {
            progress += percent;
            loadedImg++;
            console.log(loadedImg);
            loader.html(progress.toFixed(0) + '%')
            if (progress >= 100 || loadedImg == imagesCount) {
               // preloader.delay(400).fadeOut('slow');
            }
           
        }
    } else {
        preloader.remove();
    }
  
});

// - - - - - - - - - - -




// has jquery as a dependcy

$(document).ready(function() {
  /* filtering */

  $('nav#portfolio-filter a').click(function(e) {
    e.preventDefault();
    console.log("We clicked it");

    /* make this <li> class active and remove class 'active' from any other <li>s */
    $('nav#portfolio-filter .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).attr('id');

    $('#portfolio-grid .filterable-item').each(function() {
      if (filterVal == 'all') {
        $(this).removeClass('hidden');
      } else {
        if (!$(this).hasClass(filterVal)) {
          $(this).addClass('hidden'); // hide those that don't have the filter
        } else {
          $(this).removeClass('hidden'); // show those that do have the filter
        }
      };
    });

  });

  /* filtering */

  $('nav#rooms-filter a').click(function(e) {
    e.preventDefault();
    console.log("We clicked it");

    /* make this <li> class active and remove class 'active' from any other <li>s */
    $('nav#rooms-filter .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).attr('id');

    $('#rooms-grid .filterable-item').each(function() {
      if (filterVal == 'all') {
        $(this).removeClass('hidden');
      } else {
        if (!$(this).hasClass(filterVal)) {
          $(this).addClass('hidden'); // hide those that don't have the filter
        } else {
          $(this).removeClass('hidden'); // show those that do have the filter
        }
      };
    });

  });

  // end filterable gallery


});


// - - - - - - - - - - - MAGNIFIC POP UP GALLERY

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
});



// Smooth Scroll

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// end smooth scroll


// magnific popup


$(document).ready(function() {
  $("#hide-1").click(function() {
    $("#popup-room-details-1").hide();
  });
  $("#show-1").click(function() {
    $("#popup-room-details-1").show();
  });
  $("#hide-2").click(function() {
    $("#popup-room-details-2").hide();
  });
  $("#show-2").click(function() {
    $("#popup-room-details-2").show();
  });
  $("#hide-3").click(function() {
    $("#popup-room-details-3").hide();
  });
  $("#show-3").click(function() {
    $("#popup-room-details-3").show();
  });
});



// Slide 2

// This creates a function that allows a button to take you back to the last page you visited, to use it create a button like this <button onclick="goBack()">Go Back</button>

function goBack() {
  window.history.back();
}

// - - - - - - - - BURGER MENU
$(".burger-button").click(function() {
  $(".burger-button").toggleClass("active");
  $(".burger-menu").slideToggle("slow");
});

// - - - - - - - - MAGNIFIC POPUP

$(document).ready(function() {
  $(window).on('load', function() {
    var now, lastDatePopupShowed;
    now = new Date();

    if (localStorage.getItem('lastDatePopupShowed') !== null) {
      lastDatePopupShowed = new Date(parseInt(localStorage.getItem('lastDatePopupShowed')));
    }

    if (((now - lastDatePopupShowed) >= (15 * 86400000)) || !lastDatePopupShowed) {
      $.magnificPopup.open({
        items: {
          src: '#launch-popup',
          type: 'inline'
        }
      });

      localStorage.setItem('lastDatePopupShowed', now);
    }
  });
});



// - - - - - - - - COOKIES CONSENT
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  palette: {
    popup: {
      background: "#879d99",
      text: "#ffffff",
    },
    button: {
      background: "#cecbc2",
      text: "#ffffff",
    }
  },
  position: 'top',
  content: {
    message: 'Utilizamos cookies para dar la mejor experiencia al usuario en nuestra web. Si continúa navegando, asumiremos que está de acuerdo con nuestra',
    link: 'política de privacidad',
    href: '/privacidad',
    dismiss: 'OK',
    target: '_blank',
  }
})});
