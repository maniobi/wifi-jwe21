let output = '*';
let spaceFromLeft;
const stamm = output;

for (let i = 1; i <= 6; i++) {
    //console.log(i);

    if(i == 1) {
        spaceFromLeft = '    ';
    } 
    if(i == 2) {
        spaceFromLeft = '   '
    } 
    if(i == 3) {
        spaceFromLeft = '  '
    } 
    if(i == 4) {
        spaceFromLeft = ' '
    } 
    if(i == 5) {
        spaceFromLeft = ''
    } 

    if(i != 1) {
        output = output + '**';
    }

    if(i == 6) {
        console.log('    *');
    } else {
        console.log(spaceFromLeft + output);
    }


}
