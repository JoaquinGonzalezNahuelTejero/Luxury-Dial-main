const formRegister = document.querySelector(".form-register");
const inputUser = document.querySelector(".form-register input[type='text']");
const inputEmail = document.querySelector(".form-register input[type = 'email']");
const inputPass = document.querySelector(".form-register input[type = 'password']");
const inputTel = document.querySelector(".form-register input[type = 'tel']");
const alertaError =document.querySelector(".alerta-error");
const alertaExito = document.querySelector(".alerta-exito");

const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegex = /^.{4,12}$/;
const telRegex = /^(\+54\s?9\s?)?(\d{2})(\d{4})(\d{4})$/;

const estadoValidacionCampos ={
    userName: false,
    userEmail: false,
    userPassword: false,
    userTel: false,
};

document.addEventListener("DOMContentLoaded", () =>{
    formRegister.addEventListener("submit", e =>{
        e.preventDefault();
        enviarFormulario()
    });

    inputUser.addEventListener("input", () =>{
        validarCampo(userNameRegex, inputUser,"El usuario tiene que ser de 4 a 16 digitos y solo puede contener, letras y guion bajo.")
    })

    inputEmail.addEventListener("input", () =>{
        validarCampo(emailRegex, inputEmail, "El email solo puede contener letras, números, puntos, guiones y guion bajo")
    })

    inputPass.addEventListener("input", () =>{
        validarCampo(passwordRegex, inputPass, "La contraseña tiene que ser de 4 a 12 digitos")
    })

    inputTel.addEventListener("input", () =>{
        validarCampo(telRegex, inputTel,"El numero de telefono no puede ser mayor y menor a 10 digitos")
    })
})

function validarCampo(regularExpresion, campo, mensaje){
    const validarCampo = regularExpresion.test(campo.value);
    if(validarCampo){
        eliminarAlerta(campo.parentElement.parentElement)
        estadoValidacionCampos[campo.name] = true;
        campo.parentElement.classList.remove("error");
        return;
    }
    estadoValidacionCampos[campo.name] = false;
    mostrarAlerta(campo.parentElement.parentElement,mensaje)
    campo.parentElement.classList.add("error");
}

function mostrarAlerta(referencia,mensaje){
    eliminarAlerta(referencia)
    const alertaDiv = document.createElement("div");
    alertaDiv.classList.add("alerta")
    alertaDiv.textContent = mensaje;
    referencia.appendChild(alertaDiv)
}
function eliminarAlerta(referencia){
    const alerta = referencia.querySelector(".alerta");
    
    if(alerta){
        alerta.remove()
    }
    
}

function enviarFormulario(){
    if(estadoValidacionCampos.userName && estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword && estadoValidacionCampos.userTel){
        alertaExito.style.display = "block";
        alertaError.style.display = "none";
        formRegister.reset();
        setTimeout(() => {
            alertaExito.style.display("none");
        },3000);
        return;
    }

    alertaError.style.display = "block";
    alertaExito.style.display = "none";
    setTimeout(() => {
        alertaError.style.display("none");
    },3000);
}

