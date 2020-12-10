let farben = [
    'yellow',
    'brown',
    'deepred',
    'green',
    'orange'
];

function randomColor() {
    let zufallszahl = Math.floor( 
        Math.random() * farben.length 
    );

    return farben[zufallszahl];
}

$('button.random').click( function(){
    $('#farbe').css({
        'background-color' : randomColor()
    });
});