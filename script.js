// requisito 7
const btn = document.querySelector('#button-login');
const contact = document.querySelector('#user-email-phone');

function getContact() {
  alert(contact.value);
}

btn.addEventListener('click', getContact);

// requisito 18 validar se todos os campos foram preenchidos

// requisito 19 adicionar campo personalizado
const pers = document.getElementById('personalizado');
const fem = document.getElementById('feminino');
const mas = document.getElementById('masculino');

function check() {
  const containerGender = document.getElementById('gender-container');
  console.log(pers.checked);

  if (pers.checked) {
    containerGender.style.display = 'flex';
  } else {
    containerGender.style.display = 'none';
  }
}
pers.addEventListener('click', check);
fem.addEventListener('click', check);
mas.addEventListener('click', check);
