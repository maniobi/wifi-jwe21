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


/*
    dynamische Ausgabe von HTML (Formular Felder)
*/

/* 
    Anzahl der Kinder 'children' 
    und <div />, indem sich später die Felder für das Alter der jeweilien Kinder befinden 'children_ages' 
    global verfügbare Variablen
*/
let f_children = $('#children');
let f_children_ages = $('#children_ages');

f_children.change(
    function() {

        // momentan ausgewählter Wert (Value) des Select-Feldes
        let amount =  $(this).val();
        console.log(amount);
        
        // Entfernen von (eventuell zuvor durch vorherige Auswahl eingefügtem) HTML
        f_children_ages.html('');


        // Schleife verwendet 'amount' aus dem Select-Feld um die Anzahl der Wiederholungen festzulegen
        for( let i=0; i < amount; i++ ) {
            console.log('Kind ' + (i+1) );
            
            /* 
                Zusammenbauen einer Zeichenkette (String HTML-Code) für ein neues Feld
                 => input-Variable wird mit jeder Zeile um HTML-Code erweitert
                 => Template Schreibweise ${i+1} für das einfügen des Index
                 => input = '<neuer HTML-Code />' + input (bisheriger Wert der input-Variable)
                 => Anfügen an bestehendes HTML

            */
           
            let input = `<input type="text" id="child_${i+1}_age" class="form-control child-age" required>`;
            input = `<label for="child_${i+1}_age">Alter Kind ${i+1}:</label>` + input;

            // Das bisherige HTML wird nun durch ein <div>-Kontrukt umschlossen
            input = `<div class="row child">  <div class="col-md-3"> ` + input + ` </div>  </div> `;



            /*
                Ergebniss eines Durchgangs der Schleife sollte sein (am Beispiel ${i+1} = 1):

                 <div class="row child">
                    <div class="col-md-3">
                      <label for="child_1_age">Alter Kind 1:</label>
                      <input type="text" id="child_1_age" class="form-control" required>
                    </div>
                  </div> 
            
            */
            // Anhängen des zusammengebauten HTML-Konstruktes
            f_children_ages.append( input );
        }
    }
);


// Zugriff auf die <textarea /> 'message'
let message = $('#message');

// Zugriff auf den Counter-Tag (<strong id="counter" />)
let counter = $('#counter');

message.keyup(function() {
    // wurde etwas vereinfacht (!)
    // im Vergleich zu der gezeigten Variante wurde die Ausgabe direkt (ohne Variablendeklaration) geschrieben  
    counter.html( $(this).val().length );
});


let f_submit = $('#checkoutSubmit');

/* 
    globale Definition nicht unbedingt notwendig.

    Könnte auch innerhalb der 
        f_submit.click(function(e) {
            let f_children_ages_isValid;
        });
    definiert werden solange die Variable nirgendwo außerhalb benötigt wird.

*/
let f_children_ages_isValid;

f_submit.click(function(e) {

    // Zu Beginn des Events auf 0 setzen
    f_children_ages_isValid = 0;
    
    $('input.child-age').each(function(){
        
        let field = $(this);

        /* 
            Der Inhalt (die Zeichenlänge) ist größer 0
            => da Feld wurde befüllt, daher wird die Variable um 1 erhöht
            => hier könnte noch eine explizite Prüfung für das Alter erfolgen            
        */
        if(field.val().length > 0) {
            f_children_ages_isValid++;
        }
    });

    /*
        Ist die Zahl in 'f_children_ages_isValid' gleich hoch wie die Zahl in 'f_children.val()'
        UND
        f_username_isValid == 3
        dann ist der gesamte Ausdruck: true
        und das Formular wird per .submit() abgeschickt
    */
    if( f_children_ages_isValid == f_children.val() && f_username_isValid == 3) {
        $(this).closest('form').submit();
        return true;
    }

    // durch ein vorangestelltes return true; wird der nachstehende Code nicht mehr ausgeführt.

    e.preventDefault();
    return false;

});