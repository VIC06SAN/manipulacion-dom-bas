const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//cuando el evento es submit, por un formulario
//en la funcion que se agrega se tiene que agregar un parametro event
form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    //para que no recargue la pagina y el formulario funciones. 
    event.preventDefault();    
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    const sumaImputs = num1 + num2;
    pResult.innerText = "Resultado: "+sumaImputs;
}
