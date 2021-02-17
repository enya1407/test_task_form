const loginButton = document.getElementById('login-button');
const registrationButton = document.getElementById('registration-button');

const loginForm = document.getElementById('loginForm');
const registrationForm = document.getElementById('registrationForm');

const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const registrationEmail = document.getElementById('registrationEmail');
const registrationPhone = document.getElementById('registrationPhone');
const registrationPassword1 = document.getElementById('registrationPassword1');
const registrationPassword2 = document.getElementById('registrationPassword2');
const registrationLocation = document.getElementById('registrationLocation');
const registrationCheck = document.getElementById('registrationCheck');

const enableLoginForm = () => {
  registrationForm.classList.add('hidden');
  loginForm.classList.remove('hidden');

  loginButton.classList.remove('btn-inactive');
  registrationButton.classList.add('btn-inactive');
};

const enableRegistrationForm = () => {
  loginForm.classList.add('hidden');
  registrationForm.classList.remove('hidden');

  registrationButton.classList.remove('btn-inactive');
  loginButton.classList.add('btn-inactive');
};

const onLoginButtonClick = () => {
  enableLoginForm();
  registrationButton.addEventListener('click', onRegistrationButtonClick);
  loginButton.removeEventListener('click', onLoginButtonClick);
};

const onRegistrationButtonClick = () => {
  enableRegistrationForm();
  loginButton.addEventListener('click', onLoginButtonClick);
  registrationButton.removeEventListener('click', onRegistrationButtonClick);
};

registrationButton.addEventListener('click', onRegistrationButtonClick);

const passwordValidation = (value) => {
  if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)) {
    return 'Пароль должен содержать как минимум 1 цифру, 1 заглавную и 1 прописную букву';
  } else if (value.length < 8) {
    return 'Не меньше 8 символов';
  } else if (value.match(/[^A-Za-z0-9]/)) {
    return 'Пароль должен состоять только из цифр и букв латинского алфавита';
  } else {
    return '';
  }
};

function show_hide_password(target, currentInput, lockNumber) {
  const input = document.getElementById(currentInput);
  const openLock = document.querySelector(`.open-lock${lockNumber}`);
  const closedLock = document.querySelector(`.closed-lock${lockNumber}`);

  if (input.getAttribute('type') == 'password') {
    target.classList.add('view');
    input.setAttribute('type', 'text');
    openLock.classList.remove('hidden');
    closedLock.classList.add('hidden');
  } else {
    target.classList.remove('view');
    input.setAttribute('type', 'password');
    openLock.classList.add('hidden');
    closedLock.classList.remove('hidden');
  }
  return false;
}
// емаил на вход

loginEmail.addEventListener('input', () => {
  loginEmail.setCustomValidity('');
  if (!loginEmail.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
    loginEmail.setCustomValidity('Некорректный емаил');
  }
});

// loginEmail.onblur = function () {
//   if (!loginEmail.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
//     loginEmail.setCustomValidity('Некорректный емаил');
//     loginEmail.classList.add('invalid');
//   }
// };

// loginEmail.onfocus = function () {
//   loginEmail.setCustomValidity('');
//   if (loginEmail.classList.contains('invalid')) {
//     loginEmail.classList.remove('invalid');
//   }
// };

//емаил на регестрацию

registrationEmail.addEventListener('input', () => {
  registrationEmail.setCustomValidity('');
  if (
    !registrationEmail.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
  ) {
    registrationEmail.setCustomValidity('Некорректный емаил');
  }
});

//пароль на вход

loginPassword.addEventListener('input', () => {
  errorMessage = passwordValidation(loginPassword.value);
  loginPassword.setCustomValidity(errorMessage);
});

//пароль на регистрацию

registrationPassword1.addEventListener('input', () => {
  errorMessage = passwordValidation(registrationPassword1.value);
  registrationPassword1.setCustomValidity(errorMessage);
});

//повторить пароль

registrationPassword2.addEventListener('input', () => {
  if (registrationPassword1.value !== registrationPassword2.value) {
    registrationPassword2.setCustomValidity('Пароли не совпадают');
  } else {
    registrationPassword2.setCustomValidity('');
  }
});

//номер телефона

registrationPhone.addEventListener('input', () => {
  registrationEmail.setCustomValidity('');
  if (!registrationPhone.value.match(/^(\+|\d)[0-9]{7,16}$/)) {
    registrationPhone.setCustomValidity('Некорректный номер');
  } else {
    registrationPhone.setCustomValidity('');
  }
});
//локация
registrationLocation.addEventListener('change', () => {
  registrationLocation.setCustomValidity('');
});

// соглашение
registrationCheck.addEventListener('change', () => {
  registrationCheck.setCustomValidity('');
});

// сабмит логин
const onLoginSubmit = (event) => {
  event.preventDefault();

  if (!loginEmail.value) {
    loginEmail.setCustomValidity('Введите email');
  } else if (!loginPassword.value) {
    loginPassword.setCustomValidity('Обязательное поле');
  } else {
    console.log({
      loginEmail: loginEmail.value,
      loginPassword: loginPassword.value,
    });
  }
};
//сабмит регистрация
const onRegistrationSubmit = (event) => {
  if (!registrationEmail.value) {
    registrationEmail.setCustomValidity('Введите email');
    console.log(loginEmail.value);
  } else if (!registrationPhone.value) {
    registrationPhone.setCustomValidity('Обязательное поле');
  } else if (!registrationPassword1.value) {
    registrationPassword1.setCustomValidity('Обязательное поле');
  } else if (!registrationPassword2.value) {
    registrationPassword2.setCustomValidity('Обязательное поле');
  } else if (!registrationLocation.value) {
    registrationLocation.setCustomValidity('Обязательное поле');
  } else if (!registrationCheck.checked) {
    registrationCheck.setCustomValidity(
      'Вы должны принять условия пользовательского соглашения'
    );
  } else {
    console.log({
      registrationEmail: registrationEmail.value,
      registrationPhone: registrationPhone.value,
      registrationPassword: registrationPassword1.value,
      registrationLocation: registrationLocation.value,
    });
  }
  event.preventDefault();
};

loginForm.onsubmit = onLoginSubmit;

registrationForm.onsubmit = onRegistrationSubmit;
