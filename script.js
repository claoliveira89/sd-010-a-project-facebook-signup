const selectButton = document.querySelector('#button-login');
const selectInput = document.querySelector('#user-email-phone');
const sendForm = document.querySelector('#facebook-register');
const slctInput = document.querySelectorAll('.main-content input');
const selectForm = document.querySelector('#form-signup');
const createSpan = document.createElement('span');

function alertInput() {
  alert(selectInput.value);
}

function checkInputs(event) {
  for (let index = 0; index < slctInput.length; index += 1) {
    const element = slctInput[index];
    if (element.value === '') {
      event.preventDefault();
      createSpan.innerText = 'Campos inválidos';
      selectForm.appendChild(createSpan);
    }
  }
}

selectButton.addEventListener('click', alertInput);
sendForm.addEventListener('click', checkInputs);
