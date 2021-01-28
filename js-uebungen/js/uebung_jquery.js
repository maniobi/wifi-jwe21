let btn = $('button');
let box = $('#box');
let boxIsVisible = false;
let count = 1;

btn.click(function() {

    if(boxIsVisible == false) {
        boxIsVisible = true;

        box.stop().animate({
            opacity: 1,
            top: '-=100px',
            width: '300px',
            height: '300px',
            fontSize: '200%'

        }, 1000, 'easeOutExpo', function() {
            console.log('Die Box wurde eingeblendet');
        });

        btn.html('Count up');

    } else {

        if (count > 99) {
            count = 1;
        }

        box.html(count);

        // Ansteigende Schriftgröße
        box.css({
            'font-size': 180 / ( 10 / count * 1.5 ) + '%',
            'transition': 'font-size 1s ease'
        });
        count++;
    }

    
});


let scrollPostitionBasedAnimationStarted = false;
let boxShape = 'square';

$(window).scroll(function() {
    
    let scrollPos = $(document).scrollTop();

    if(scrollPos > 300) {

        if(scrollPostitionBasedAnimationStarted != true && boxShape == 'square') {
            
            scrollPostitionBasedAnimationStarted = true;

            box.stop().animate({
                borderRadius: '50%'
            }, 100, 'linear', function() {
                console.log('Box-Transformation abgeschlossen.');
                scrollPostitionBasedAnimationStarted = false;
                boxShape = 'disc';
            });

        }
    } else {
        if(scrollPostitionBasedAnimationStarted != true && boxShape == 'disc') {
            scrollPostitionBasedAnimationStarted = true;

            box.stop().animate({
                borderRadius: '0%'
            }, 100, 'linear', function() {
                console.log('Box-Transformation abgeschlossen.');
                scrollPostitionBasedAnimationStarted = false;
                boxShape = 'square';
            });

        }
    }

});