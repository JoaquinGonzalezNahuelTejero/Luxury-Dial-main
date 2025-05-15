import { validarCampo,emailRegex,passwordRegex,estadoValidacionCampos,enviarFormulario } from "./register.js"
const formLogin = document.querySelector(".form-login");
const inputEmail = document.querySelector(".form-login input[type = 'email']");
const inputPass = document.querySelector(".form-login input[type = 'password']");
const alertaErrorLogin =document.querySelector(".form-login .alerta-error");
const alertaExitoLogin = document.querySelector(".form-login .alerta-exito");

document.addEventListener("DOMContentLoaded", () =>{
    formLogin.addEventListener("submit", e =>{
        estadoValidacionCampos.userName = true;
        estadoValidacionCampos.userTel = true;
        e.preventDefault();
        enviarFormulario(formLogin,alertaErrorLogin,alertaExitoLogin)
    });


    inputEmail.addEventListener("input", () =>{
        validarCampo(emailRegex, inputEmail, "El email solo puede contener letras, números, puntos, guiones y guion bajo")
    })

    inputPass.addEventListener("input", () =>{
        validarCampo(passwordRegex, inputPass, "La contraseña tiene que ser de 4 a 12 digitos")
    })

})



