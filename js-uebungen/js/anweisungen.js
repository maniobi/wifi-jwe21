// true
if(typeof 'Apfel' == 'string') {
    
}

// true
if( 1 > 0 ) {

}
// same, true
if ( 0 < 1 ) {

}

// true
if( 1 == 1) {

}

// true
if( 0 <= 1 ) {

}

// false
if( 0 >= 1) {

}

// true
if ( 0 != 1) {

}

// true
if(!(0 == 1)) {

}

// false
if( (1 < 5) && (9 == 14) ) {

}

// true
if( (1 < 5) || (9 == 14) ) {

}

// true
if( ( 2 > 1 && 4 == 6 ) || 1 == 1 ) {

}

// false
if( 2 == 2 && 3 == 2 || 1 == 1 ) {

}

// false
if( 'Name' == 'Name2' ) {

}

// false
if ('Name'.length < 4) {

}

// = 4, daher true
if( 'Name'.length > 3) {

}

// true (Vorsicht: Stelle 0 vs. Stelle 1)
if( 'Jasmin'.indexOf('a') == 1 ) {
    
}


let vorname = 'Markus';

switch ( vorname ) {
    case 'Roland':
        console.log('Ich bin Netflix-Fan');
        break;

    case 'Qendrim':
        console.log('Ich habe coding für mich entdeckt!');
        break;

    default:
        console.log('alles halb so wild :-)');
}




