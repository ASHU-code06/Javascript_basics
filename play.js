const name = 'Max';
var age = 29;
age = 30; // var can be changed or overwritten as here age is comming 30
const hasHobbies = true;

// hasHobbies = false; typeerror : assignment to constant variable 
function summarizeUser(userName,userAge,userHasHobby){
    return(
        'Name is '+ userName +', Age is '+userAge+' and the user has hobbies: '+userHasHobby
    );
}
console.log(summarizeUser(name,age,hasHobbies));