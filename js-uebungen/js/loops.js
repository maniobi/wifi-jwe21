
let namen = [
    'Robert',
    'Jasmin',
    'Ulvi',
    'Florian'
];

/*
    Fix definierte Anzahl an loops mit einer Laufzeitvariable (i)
*/
for(let i = 0; i < 3; i++) {
    //console.log('hey: ' + i);
    let html = '<img src="https://placehold.it/300x200?text=' + namen[i] + '" class="bild-'+i+'">';
    //console.log(html);
    //document.getElementById('gallery').innerHTML += html;
    // document.getElementById('gallery').innerHTML = document.getElementById('gallery').innerHTML + html;
}

/*
    Ausgabe eines Arrays ohne die Länge zu wissen
*/
namen.forEach(elm => {
        console.log(elm);

        let html = '<img src="https://placehold.it/300x200?text=' + elm + '" class="bild-'+i+'">';

        document.getElementById('gallery').innerHTML += html;
    }
);






