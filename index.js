let button = document.querySelector('.button');
let input = document.querySelector('.input');

button.addEventListener('click', function(){
    console.log(input.value.match('[A-Z]'))
    if(input.value.match('[0-9]') === null){
        alert('Harus Angka')
    }
    else{
       alert('ini angka')
    }
})