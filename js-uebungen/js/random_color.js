let zufallszahl;

let farben = [
    'yellow',
    'brown',
    'red',
    'green',
    'orange'
];

function randomColor() {

    let neueZahl = Math.floor( 
        Math.random() * farben.length 
    );

    if( neueZahl != zufallszahl) {
        zufallszahl = neueZahl;

        $('#farbe').css({
            'background-color' : farben[zufallszahl]
        });
        
        console.log(farben[zufallszahl]);

    } else {
        randomColor();
    }
}


$('button.random').click( function(){
    randomColor();
});