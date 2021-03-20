
/*
function checkforblank() {
    if(document.getElementById('email').value == '') {
        alert('field cannot be blank');
        return false;
    }
}
*/


// Input Field
const email = document.getElementById('email');

//Form
const form = document.querySelector('#form');

useremail.addEventListener('click', function (event) {
    event.preventDefault();
    
});

//validation colors
const red = '#F44336'


function returncheckforblank(){
    //check if empty
    if(checkIfEmpty('email')) return;
}

function checkIfEmpty(field){
    if(isEmpty(field.value.trim())){
        // set field invalid
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else {
        //set field valid
        setValid(field);
        return false;
    }
}

function isEmpty(value){
    if(value === '') return true;
    return false;
}
function setInvalid(field, message){
    field.className = 'invalid';
    field.nextElmentSibling.innerHTML = message;
    field.nextElmentSibling.style.color = red;
}
function setValid(field, message){
    field.className = 'valid';
    field.nextElmentSibling.innerHTML = '';
    //field.nextElmentSibling.style.color = red;//
}
