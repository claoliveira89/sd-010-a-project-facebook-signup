window.onload = function startin() {
  const btnLogin = document.getElementById('button-login');
  btnLogin.addEventListener('click', () => {
    const inputName = document.getElementById('user-email-phone').value;
    alert(inputName);
  });
};

// const fields = document.querySelectorAll('[required]');

// function verifyError(event) {
//   const field = event.target;
//   let foundError = false;
//   for (const error in field.validity) {
//     if (error !== 'customError' && field.validity[error]) {
//       foundError = true;
//     }
//   }
//   return foundError;
// }

// function valitation() {
//   // const field = event.target;
//   const error = verifyError();
//   if (error) {
//     field.setCustomValidity('Campos inválidos');
//   } else {
//     field.setCustomValidity('');
//   }
// }

// for (const field of fields) {
//   field.addEventListener('invalid', valitation);
// }
