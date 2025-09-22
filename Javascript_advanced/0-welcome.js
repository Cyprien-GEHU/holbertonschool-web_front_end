// function takes 2 argument (firstName and lastName)
// print a full name
function welcome(firstName, lastName) {
    const fullName = firstName + '' + lastName;
    function displayFullName() {
        alert('Welcome ' + fullName + ' !');
    }
    displayFullName();
}
