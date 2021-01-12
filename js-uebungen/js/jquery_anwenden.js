//$('body').html('<div id="js-element"></div>');
//document.getElementsByTagName('body').innerHTML = '<div id="neues-js-element"></div>';
console.log('die Seite ist geladen');



$('#calc').click(
    function() {
        console.log('button clicked');

        let eingabe = $('#input').val();
        let result = eval(eingabe);
        $('#result').val(result);

    }
);

// https://www.w3schools.com/jquery/jquery_events.asp
$('#events').on(
    {
    
        'mouseenter': function() {
            
            $(this).css(
                {
                    'background-color': 'yellow',
                    'color': 'red'
                }
            );
        },

        'mouseleave': function() {
            $(this).css(
                {
                    'background-color': 'blue',
                    'color': 'white'
                }
            );
        }
    
    }
);

$('#events2').on({
    'mouseenter': function() {
        $(this).addClass('mouseover');
    },

    'mouseleave': function() {
        $(this).removeClass('mouseover');
    }
});