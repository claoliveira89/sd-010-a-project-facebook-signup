const button = document.getElementById('button-login');
const valorDoInput = document.querySelector('#user-email-phone');
button.addEventListener('click', () => {
  alert(valorDoInput.value);
});

function verificaNome() {
  const valorNome = document.getElementById('firstname');
  if (valorNome.value === '') {
    return true;
  }
}

function verificaSobrenome() {
  const valorSobrenome = document.getElementById('lastname');
  if (valorSobrenome.value === '') {
    return true;
  }
}

function verificaEmailPhone() {
  const valorEmailPhone = document.getElementById('phone_email');
  if (valorEmailPhone.value === '') {
    return true;
  }
}

function verificaInputsVazios() {
  if (verificaNome() || verificaSobrenome() || verificaEmailPhone()) {
    console.log('entrou no if do verificaInputsVazios');
    const paragrafo = document.createElement('p');
    const divPai = document.querySelector('.msg-invalido');
    paragrafo.innerHTML = 'Campos inválidos';
    divPai.appendChild(paragrafo);
  }
}

const botaoCadastro = document.getElementById('facebook-register');
botaoCadastro.addEventListener('click', verificaInputsVazios);

function stopDefAction(event) {
  event.preventDefault();
}

botaoCadastro.addEventListener('click', stopDefAction, false);
