let cuentas = [
    { nombre: 'Sofía', saldo: 200, password: 4892 },
    { nombre: 'Macarena', saldo: 290, password: 4892 },
    { nombre: 'Citlali', saldo: 67, password: 4892 },
  ];


//get elements in the DOM
const accountSelected = document.querySelector('#select-account');
const textPass = document.querySelector('#input-password');  
const buttonEnter = document.querySelector('#enter-btn');
const hint = document.querySelector('#hint');
console.log(hint);
function valuePassword () {

  if(accountSelected.value === 'Selecciona una cuenta:'){
    accountSelected.classList = 'form-select is-invalid'
    hint.classList = 'alert alert-warning';
    hint.textContent = 'Selecciona una cuenta!';  
    window.localStorage.clear();
    return;
  }
  
  function restartStyle () {
    accountSelected.classList = 'form-select';
    textPass.classList = 'form-control';
  }

  restartStyle();
  const accountNumber = parseInt(accountSelected.value);
  const inputPass = parseInt(textPass.value);
  const valuePassAccount = cuentas[accountNumber].password;
  console.log(accountNumber);
  console.log(inputPass);
  console.log(valuePassAccount);
  console.log(inputPass===valuePassAccount);

  if(inputPass === valuePassAccount){
    console.log(`Bienvenid@ ${cuentas[accountNumber].nombre}`);
    hint.textContent = 'Bienvenid@'; 
    hint.classList = 'alert alert-success';
  } else {
    textPass.classList = 'form-control is-invalid'
    hint.classList = 'alert alert-danger';
    hint.textContent ='🔒Password incorrecto!';  
  }
  
}

buttonEnter.addEventListener('click', valuePassword);