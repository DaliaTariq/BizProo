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


////////////////////////////////////////////////
//Web Development bar
$('#WebDevelopment').LineProgressbar({
      percentage: 89 // 90%
    });

    $('#WebDevelopment').LineProgressbar({
          percentage: 89,
          ShowProgressCount: true
    });

    $('#WebDevelopment').LineProgressbar({
              percentage: 89,
              duration: 1000
    });

    $('#WebDevelopment').LineProgressbar({
          percentage: 89,
          fillBackgroundColor: '#d8545d',
          backgroundColor: '#fff',
          radius: '0px',
          height: '30px',
          width: '100%'
        });


            



/****
 * OWL
 *****/

    $(".owl-carousel").owlCarousel(
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
 


});