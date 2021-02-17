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

const loginEmailError = document.getElementById('loginEmailError');
const registrationEmailError = document.getElementById(
  'registrationEmailError'
);
const registrationPhoneError = document.getElementById(
  'registrationPhoneError'
);
const loginPasswordError = document.getElementById('loginPasswordError');
const registrationPassword1Error = document.getElementById(
  'registrationPassword1Error'
);
const registrationPassword2Error = document.getElementById(
  'registrationPassword2Error'
);

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

loginEmail.onblur = function () {
  if (!loginEmail.value) {
    loginEmailError.title = 'Обязательное поле';
    loginEmail.classList.add('invalid');
    loginEmailError.classList.remove('hidden');
  } else if (
    !loginEmail.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
  ) {
    loginEmailError.title = 'Некорректный емаил';
    loginEmail.classList.add('invalid');
    loginEmailError.classList.remove('hidden');
  }
};

loginEmail.onfocus = function () {
  if (loginEmail.classList.contains('invalid')) {
    loginEmail.classList.remove('invalid');
    loginEmailError.classList.add('hidden');
  }
};

registrationEmail.onblur = function () {
  if (!registrationEmail.value) {
    registrationEmailError.title = 'Обязательное поле';
    registrationEmail.classList.add('invalid');
    registrationEmailError.classList.remove('hidden');
  }
  if (
    !registrationEmail.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
  ) {
    registrationEmailError.title = 'Некорректный емаил';
    registrationEmail.classList.add('invalid');
    registrationEmailError.classList.remove('hidden');
  }
};

registrationEmail.onfocus = function () {
  if (registrationEmail.classList.contains('invalid')) {
    registrationEmail.classList.remove('invalid');
    registrationEmailError.classList.add('hidden');
  }
};

//пароль на вход
const passwordValidation = (value) => {
  if (!value) {
    return 'Обязательное поле';
  } else if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)) {
    return 'Пароль должен содержать как минимум 1 цифру, 1 заглавную и 1 прописную букву';
  } else if (value.length < 8) {
    return 'Не меньше 8 символов';
  } else if (value.match(/[^A-Za-z0-9]/)) {
    return 'Пароль должен состоять только из цифр и букв латинского алфавита';
  } else {
    return '';
  }
};

loginPassword.onblur = function () {
  errorMessage = passwordValidation(loginPassword.value);
  if (errorMessage) {
    loginPasswordError.title = errorMessage;
    loginPassword.classList.add('invalid');
    loginPasswordError.classList.remove('hidden');
  }
};

loginPassword.onfocus = function () {
  if (loginPassword.classList.contains('invalid')) {
    loginPassword.classList.remove('invalid');
    loginPasswordError.classList.add('hidden');
  }
};

//пароль на регистрацию

registrationPassword1.onblur = function () {
  errorMessage = passwordValidation(registrationPassword1.value);
  if (errorMessage) {
    registrationPassword1Error.title = errorMessage;
    registrationPassword1.classList.add('invalid');
    registrationPassword1Error.classList.remove('hidden');
  }
};

registrationPassword1.onfocus = function () {
  if (registrationPassword1.classList.contains('invalid')) {
    registrationPassword1.classList.remove('invalid');
    registrationPassword1Error.classList.add('hidden');
  }
};

//повторить пароль
registrationPassword2.onblur = function () {
  if (!registrationPassword2.value) {
    registrationPassword2Error.title = 'Обязательное поле';
    registrationPassword2.classList.add('invalid');
    registrationPassword2Error.classList.remove('hidden');
  } else if (registrationPassword1.value !== registrationPassword2.value) {
    registrationPassword2Error.title = 'Пароли не совпадают';
    registrationPassword2.classList.add('invalid');
    registrationPassword2Error.classList.remove('hidden');
  }
};

registrationPassword2.onfocus = function () {
  registrationPassword2.setCustomValidity('');
  if (registrationPassword2.classList.contains('invalid')) {
    registrationPassword2.classList.remove('invalid');
    registrationPassword2Error.classList.add('hidden');
  }
};

//номер телефона

registrationPhone.onblur = function () {
  console.log(registrationPhone.value);
  if (!registrationPhone.value) {
    registrationPhoneError.title = 'Обязательное поле';
    registrationPhone.classList.add('invalid');
    registrationPhoneError.classList.remove('hidden');
  } else if (!registrationPhone.value.match(/^(\+|\d)[0-9]{7,16}$/)) {
    registrationPhone.setCustomValidity('Некорректный номер');
    registrationPhone.classList.add('invalid');
    registrationPhoneError.classList.remove('hidden');
  }
};

registrationPhone.onfocus = function () {
  registrationPhone.setCustomValidity('');
  if (registrationPhone.classList.contains('invalid')) {
    registrationPhone.classList.remove('invalid');
    registrationPhoneError.classList.add('hidden');
  }
};

//локация

registrationLocation.onblur = function () {
  if (!registrationLocation.value) {
    registrationLocation.classList.add('invalid');
  }
};

registrationLocation.onfocus = function () {
  if (registrationLocation.classList.contains('invalid')) {
    registrationLocation.classList.remove('invalid');
  }
};

// соглашение
registrationCheck.addEventListener('change', () => {
  registrationCheck.setCustomValidity('');
});

// сабмит логин
const onLoginSubmit = (event) => {
  event.preventDefault();
  let isAnyEmpty = false;

  if (!loginEmail.value) {
    loginEmail.classList.add('invalid');
    loginEmailError.classList.remove('hidden');
    isAnyEmpty = true;
  }
  if (!loginPassword.value) {
    loginPassword.classList.add('invalid');
    loginPasswordError.classList.remove('hidden');
    isAnyEmpty = true;
  }
  if (isAnyEmpty) {
    return;
  }
  console.log({
    loginEmail: loginEmail.value,
    loginPassword: loginPassword.value,
  });
};
//сабмит регистрация
const onRegistrationSubmit = (event) => {
  event.preventDefault();
  let isAnyEmpty = false;

  if (!registrationEmail.value) {
    registrationEmail.classList.add('invalid');
    registrationEmailError.classList.remove('hidden');
    isAnyEmpty = true;
  }
  if (!registrationPhone.value) {
    registrationPhone.classList.add('invalid');
    registrationPhoneError.classList.remove('hidden');
    isAnyEmpty = true;
  }
  if (!registrationPassword1.value) {
    registrationPassword1.classList.add('invalid');
    registrationPassword1Error.classList.remove('hidden');
    isAnyEmpty = true;
  }
  if (!registrationPassword2.value) {
    registrationPassword2.classList.add('invalid');
    registrationPassword2Error.classList.remove('hidden');
    isAnyEmpty = true;
  }
  if (!registrationLocation.value) {
    registrationLocation.classList.add('invalid');
    isAnyEmpty = true;
  }
  if (!registrationCheck.checked) {
    registrationCheck.setCustomValidity(
      'Вы должны принять условия пользовательского соглашения'
    );
    isAnyEmpty = true;
  }
  if (isAnyEmpty) {
    return;
  }
  console.log({
    registrationEmail: registrationEmail.value,
    registrationPhone: registrationPhone.value,
    registrationPassword: registrationPassword1.value,
    registrationLocation: registrationLocation.value,
  });
};

loginForm.onsubmit = onLoginSubmit;

registrationForm.onsubmit = onRegistrationSubmit;
