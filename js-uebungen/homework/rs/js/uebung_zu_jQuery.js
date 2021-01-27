let box = $('.animatedBox');


function showBox() {
    box.addClass('flex');
    box.animate( 
        {
           
            left: '300px',
            top:"300px"
        }, 
        1000,  
        'linear', 
        function() {
            console.log('Animation abgeschlossen')
        }
    );
    
  

    box.html(parseInt(box.html( ))+1);
}


$(window).scroll(function(){
    


    // Abrunden der abgefragten Positionswerte um nur ganze Zahlen zu erhalten
    let scrollPos = Math.floor( $(document).scrollTop() );



    if(scrollPos >= 300) {
        box.addClass('circle');
    } else {
        box.removeClass('circle');
    }

    box.css({
        'transform': 'translateY('+Math.floor(scrollPos*0.6)+'px)',
    });
    
});