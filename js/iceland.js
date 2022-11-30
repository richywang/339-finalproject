const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
$(document).ready(function() {

    console.log(mediaQuery);
    if(!mediaQuery.matches) {
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){

          $('.flexrow').each( function(i){
              
            let top_of_object = $(this).position().top + $(this).outerHeight()/2;
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object ){
                
                $(this).animate({'top': '0', 'opacity':'1'},1000);
                    
            }
            
        }); 
      
      });
    }
    else {
            /* Check the location of each desired element */
            $('.travelsection').each( function(i){
                
                $(this).css('opacity',1);
                $(this).css('top',0);
  
            }); 
  
            $('.traveltextsection').each( function(i){
                
              $(this).css('opacity',1);
              $(this).css('top',0);
              
          }); 
    }
      
  });