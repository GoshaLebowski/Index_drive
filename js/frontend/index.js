const authModal = document.querySelector('.modalScrin')
const registerModal = document.querySelector('.modalScrinRegister')

function authModalActive() {
  authModal.classList.toggle('active');
  registerModal.classList.remove('active');
}

function registerModalActive() {
  registerModal.classList.toggle('active');
  authModal.classList.remove('active');
}

const paswordInput = document.querySelector('.floatingPassword');
const paswordInput1 = document.querySelector('.floatingPassword1');
const paswordInput2 = document.querySelector('.floatingPassword2');

function TogglePasword() {
  if (paswordInput.type === "password") {
    paswordInput.type = "text";
    document.getElementById('img-paswordOne').src = "../index_drive/img/icon/openGlass.svg";
  }
  else {
    paswordInput.type = "password";
    document.getElementById('img-paswordOne').src = "../index_drive/img/icon/eye-slashpassvord.svg";
  }
}

function TogglePasword1() {
  if (paswordInput1.type === "password") {
    paswordInput1.type = "text";
    document.getElementById('img-paswordTwo').src = "../index_drive/img/icon/openGlass.svg"
  }
  else {
    paswordInput1.type = "password";
    document.getElementById('img-paswordTwo').src = "../index_drive/img/icon/eye-slashpassvord.svg";
  }
}

function TogglePasword2() {
  if (paswordInput2.type === "password") {
    paswordInput2.type = "text";
    document.getElementById('img-paswordThee').src = "../index_drive/img/icon/openGlass.svg"
  }
  else {
    paswordInput2.type = "password";
    document.getElementById('img-paswordThee').src = "../index_drive/img/icon/eye-slashpassvord.svg"
  }
}