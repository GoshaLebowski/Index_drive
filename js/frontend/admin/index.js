const paswordInput = document.querySelector('.floatingPassword1');
const paswordInput2 = document.querySelector('.floatingPassword2');

function TogglePasword1() {
    if (paswordInput.type === "password") {
        paswordInput.type = "text";
        document.getElementById('img-paswordTwo').src = "../../index_drive/img/icon/openGlass.svg"
    }
    else {
        paswordInput.type = "password";
        document.getElementById('img-paswordTwo').src = "../../index_drive/img/icon/eye-slashpassvord.svg";
    }
}

function TogglePasword2() {
    if (paswordInput2.type === "password") {
        paswordInput2.type = "text";
        document.getElementById('img-pasword').src = "../../index_drive/img/icon/openGlass.svg"
    }
    else {
        paswordInput2.type = "password";
        document.getElementById('img-pasword').src = "../../index_drive/img/icon/eye-slashpassvord.svg";
    }
}