let userNameFromDataBase = 'Roland';



function sayMyName(name) {

    if(checkMyInput(name) == true) {
        console.log('Your name is ' + name);
    }
}


function checkMyInput(input) {

    if( typeof input == 'string' ) {
        //console.log('yes, it is a string');
        return true;
    } else {
        //console.log('Your input is not a Name (or not a String)');
        return false;
    }
}



sayMyName('Manuel');
sayMyName('Thomas');
sayMyName('Bernhard');
sayMyName(userNameFromDataBase);

let ergebnisMeinerFunktion = sayMyName('Thomas');