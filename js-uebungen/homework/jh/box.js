var i = 0;
function buttonClick() {
    console.log(i + ++i);
}


let firstClick = true;

let num = 1;

$( '.btn' ).click(function() {


    if(firstClick) {
      
      firstClick = false;

      $( '#box' ).animate({
        opacity: 0.35,
        width : "toggle" ,
        height: "toggle" ,
       
      }, 2000,  
      function() {
        console.log('Animation complete');
        
      });
    } else {
      $('#box').html(num);
      num++;
    }

    
  });


  $(window).scroll(function(){

    let scrollPos = Math.floor ( $(document).scrollTop() );

    //$('#box').html(scrollPos);

    if(scrollPos > 300) {
        $('#box').css( {
            'border-radius' : '50%' ,
        });
    } else {
        $('#box').css({
            'border-radius' : '15px'
        });
    }

  });
