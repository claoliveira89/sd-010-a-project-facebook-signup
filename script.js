const botaoEntrar = document.getElementById('button-login');

function alerta() {
  const email = document.getElementById('user-email-phone').value;
  if (email !== undefined) {
    alert(email);
  }
}
botaoEntrar.addEventListener('click', () => {
  alerta();
});

// Requisito 18

// const fieldsForm = document.querySelectorAll('[required]');

const buttonSubmit = document.getElementById('facebook-register');

/* function clearMessage() {
  const clearParagraph = document.querySelector('.alert-form');
  clearParagraph.remove();
} */

function checkInput() {
  const formCheck = document.getElementById('inputs-form');
  const checkInputs = formCheck.getElementsByTagName('input');

  for (let index = 0; index < checkInputs.length; index += 1) {
    if (checkInputs[index].value === undefined) {
      return false;
    }
  }
}

function checkRadio() {
  const checkRadioTarget = document.querySelectorAll('input[name="gender"]');
  let contCheck = 0;

  for (let index = 0; index < checkRadioTarget.length; index += 1) {
    if (checkRadioTarget[index].checked === false) {
      contCheck += 1;
    } if (contCheck === 3) {
      return false;
    }
  }
}

function createAlertForm() {
  const formCheck = document.getElementById('form-criacao');
  const messageError = document.createElement('p');

  formCheck.appendChild(messageError);
  messageError.className = 'incomplete';
  messageError.innerText = 'Campos inválidos';
}

function checkAll() {
  const inputChecked = checkInput();
  const radioChecked = checkRadio();

  if (inputChecked === false || radioChecked === false) {
    return createAlertForm();
  }
}

buttonSubmit.addEventListener('click', (event) => {
  // clearMessage();
  event.preventDefault();
  checkAll();
});

// Requisito 19

const clickCustom = document.getElementById('check-personalizado');

function createElement() {
  const genderContent = document.querySelector('.gender-content');
  const inputCustom = document.createElement('input');

  genderContent.appendChild(inputCustom);
  inputCustom.placeholder = 'Gênero (opcional)';
  inputCustom.name = 'gender-custom';
}

clickCustom.addEventListener('click', createElement);

// Requisito 20//

function getElements() {
  const name = document.querySelector('input[name="firstname"]').value;
  const lastName = document.querySelector('input[name="lastname"]').value;
  const phoneEmail = document.querySelector('input[name="phone_email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const birthdate = document.querySelector('input[name="birthdate"]').value;
  const result = [name, lastName, phoneEmail, birthdate, password];
  return result;
}

function getGender() {
  let result = '';
  const fem = document.querySelector('input[value="Feminino"]').checked;
  const masc = document.querySelector('input[value="Masculino"]').checked;
  const person = document.querySelector('input[value="Personalizado"]').checked;
  if (fem === true) {
    result = 'Feminino';
  } else if (masc === true) {
    result = 'Masculino';
  } else if (person === true) {
    result = 'Personalizado';
  }
  return result;
}
