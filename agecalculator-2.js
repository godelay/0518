let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date();

function calculaterAge(){
    // let birthDate = new Date(el.value);\
    let birthDate = new Date('1990-05-06');
    let age;
    if (today.getMonth()> birthDate.getMonth()||
        (today.getMonth() == birthDate.getMonth() && 
        today.getDate() >= birthDate.getDate()
        )
    ){
        age = today.getFullYear()-birthDate.getFullYear();
    }else {
        age = today.getFullYear() - birthDate.getFullYear() -1;
    }

    return age;

}
