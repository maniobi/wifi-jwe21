$('#set_cookie').click(function(){

    let cookieValue = $('#cookie_value').val();

    if(cookieValue.length > 0) {
        Cookies.set( 'jwe', cookieValue, { expires: 7 });
        console.log(`Cookie wurde mit dem Wert ${cookieValue} erstellt.`);
    } else {
        console.warn('Sie haben keinen Wert für den Cookie angegeben!');
    }

});

$('#read_cookie').click(function(){
    // vom gelesenen Cookie bereitgestellter Wert wird in die Variable gespeichert
    let cookieValue = Cookies.get('jwe');
    // Übergabe des Wertes über die Variable an das <div id="output" />
    $('#output').html(cookieValue);
});

