$(document).ready(function () {
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