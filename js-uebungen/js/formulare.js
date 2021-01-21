// die Variable für die Punktezahl der Validität muss Global definiert sein
let f_username_isValid;

let f_username = $('#username');
f_username.keyup(function(){

    // Zu Beginn der Prüfung muss die Punktezahl auf 0 gesetzt werden
    f_username_isValid = 0;

    let wert = $(this).val(); 
    console.log('## Aktuelle Eingabe: ' + wert);

    // Enthält zumindest einen Buchstaben und hat eine Länge von zumindest 6 Zeichen
    // Rückgabewert bei einem Match ist ein Array ['gefundeneZeichenkette']

    if(wert.match( /[a-zA-Z]+/g ) != null && wert.length > 5) {
        console.log('Ihr Benutzername enthält zumindest 6 Buchstaben.');
        f_username_isValid++;
    } else {
        console.warn('Ihr Benutzername muss zumindest 6 Buchstaben enhalten.');
        f_username_isValid = 0;
    }

    // Enthält kein Sonderzeichen
    // würde es ein Sonderzeichen enthalten wäre der Rückgabewert ein Array ['gefundeneZeichenkette']
    if(wert.match(/[!@#$%\^&*(){}[\]<>?/|\-+]/) == null) {
        console.log('Ihr Benutzername enthält kein Sonderzeichen. Das ist gut!');
        f_username_isValid++;
    } else {
        console.warn('Ihr Benutzername enthält Sonderzeichen. Das ist schlecht!');
        f_username_isValid = 0;
    }


    // enthält kein Leerzeichen
    // würde es ein Leerzeichen enthalten wäre der Rückgabewert ein Array ['gefundeneLeerzeichen']
    if(wert.match(/\s/g) == null) {
        console.log('Ihr Benutzername enthält keine Leerzeichen. Wunderbar!');
        f_username_isValid++;
    } else {
        console.warn('Ihr Benutzername enthält Leerzeichen. Die sind nicht erwünscht!');
        f_username_isValid = 0;
    }

});

let f_submit = $('#checkoutSubmit');
f_submit.click(function(e) {

    // Treffen alle 3 Bedingungen zu dann ist das Feld "username" korrekt ausgefüllt
    if(f_username_isValid == 3) {
        $(this).closest('form').submit();
        return true;
    }
    
    e.preventDefault();
    return false;

});