$(document).ready(function () {
    /*Scroll Top**/
   
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
    /**Active Navbar Links*******/
    $('.nav-item .nav-link').click(function(){
        $('.nav-item .nav-link').removeClass("active");
        $(this).addClass("active");
    });

    //
    //Default active on home
    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        
        //smoothscroll
        $('.nav-link[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
          
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.navbar-nav li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu-center ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
    /******************Gellary*******************/
       //ctive Navbar Links
       $('.nav-item .nav-link').click(function(){
        $('.nav-item .nav-link').removeClass("active");
        $(this).addClass("active");
    });
    //Filter
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000').add('animated', 'fadeInUp');
            $('.filter').filter('.'+value).show('3000').add('animated', 'fadeInUp');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");


///////////////Progress Par/////////////////

$('#WebDevelopment').LineProgressbar({
    percentage: 85 ,// 85%
    ShowProgressCount: true,
    duration: 1000,
    radius: '0px',
    height: '30px',
    width: '100%',
    fillBackgroundColor: '#d73e4d',
    backgroundColor: '#ffffff',
  });

  $('#onlineMarketing').LineProgressbar({
    percentage: 58 ,// 85%
    ShowProgressCount: true,
    duration: 1000,
    radius: '0px',
    height: '30px',
    width: '100%',
    fillBackgroundColor: '#d73e4d',
    backgroundColor: '#ffffff',
  });

  $('#digitalMedi').LineProgressbar({
    percentage: 49 ,// 85%
    ShowProgressCount: true,
    duration: 1000,
    radius: '0px',
    height: '30px',
    width: '100%',
    fillBackgroundColor: '#d73e4d',
    backgroundColor: '#ffffff',
  });
  $('#Photography').LineProgressbar({
    percentage: 76 ,// 85%
    ShowProgressCount: true,
    duration: 1000,
    radius: '0px',
    height: '30px',
    width: '100%',
    fillBackgroundColor: '#d73e4d',
    backgroundColor: '#ffffff',
  });

  $('#creativeDesign').LineProgressbar({
    percentage: 64 ,// 85%
    ShowProgressCount: true,
    duration: 1000,
    radius: '0px',
    height: '30px',
    width: '100%',
    fillBackgroundColor: '#d73e4d',
    backgroundColor: '#ffffff',
  });

  var offsetTop = $('#skills').offset().top;
	$(window).scroll(function() {
  var height = $(window).height();
  if($(window).scrollTop()+height > offsetTop) {
    jQuery('.bar').each(function(){
      jQuery(this).find('.skillBar').animate({
        width:jQuery(this).attr('data-percent')
      },2000);
    });
  }
  });       



/****
 * OWL
 *****/
     //Clients
    $(".owl-carousel.client").owlCarousel(
        {
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        }
    );

    //partner
    $(".owl-carousel.part").owlCarousel(
        {
            loop:true,
           margin:-1,
           width:234.8,
            nav:false,
            autoplay:true,
            autoplayTimeout:8000,
            responsive:{
                0:{
                    items:5
                },
                600:{
                    items:5
                },
                1000:{
                    items:5
                }
            }
        }
    );
 




});