const name = 'Max';
var age = 29;
const hasHobbies = true;
function summarizeUser(userName,userAge,userHasHobby){
    return(
        'Name is '+ userName +', Age is '+userAge+' and the user has hobbies: '+userHasHobby
    );
}
console.log(summarizeUser(name,age,hasHobbies));