// Box 
// Button

/*
    TODOs:

        1. Beim Klick auf den Button, wird die Box eingeblendet (mit einer eleganten Animation)
        2. Beim Scrollen nach unten wird ab einer Scroll-Position von 300px (von oben) die Box zu einem Kreis
        3. Bei jedem Klick auf den Button erhöht sich die Zahl in der Box

*/

let box = $('.box');
let btn = $('.btn');
let clk = 0;

let scrollPos;

let firstClick = true;

btn.click(function () {


    if(firstClick == true) {
        firstClick = false;

        box.animate({

            width: '300px',
            height: '300px',
    
        }, 2000);

    } else {

        clk += 1;
        $('.clk-num').html(clk); // STRICHPUNKT!!!!!!!
    
        if(scrollPos > 300) {
            // button führt an dieser Stelle nur den Code aus der an einer bestimmten scrollPos ausgeführt werden soll
        }
    }

    



});

let animationOnTheGo = false;

$(window).scroll(function () {

    scrollPos = Math.floor($(document).scrollTop());
    console.log(scrollPos);

    if (animationOnTheGo == false && scrollPos > 100) {
        animationOnTheGo = true;
        box.animate({
    
            borderRadius: '50%', //SCHREIBWEISE!!!!!!!!!!!!!!!!!

        }, 1000);

    }

});




/* let hideNumber = $('<div id="num-hide" class="hide"> <div class="clk"></div> </div>');

$('.btn').click(
    function(){

        hideNumber.removeClass('hide');

    }
);
*/







