const btnSubmit = document.getElementById('facebook-register');

btnSubmit.addEventListener('click', () => {
  const inputContent = document.getElementsByTagName('input');

  for (let index = 0; index < 5; index += 1) {
    if (inputContent[index].value === '') {
      inputContent[index].value = 'Campos inválidos';
    }
  }
});
