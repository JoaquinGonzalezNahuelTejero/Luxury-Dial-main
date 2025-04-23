function agregarAlCarrito(NombreProducto) {
    alert(NombreProducto + " ha sido agregado correctamente!");
}

function toggleLogin() {
    document.getElementById("login-box").classList.toggle("hidden");
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert("Inicio de sesión exitoso");
        toggleLogin();
    } else {
        alert("Por favor, ingrese usuario y contraseña");
    }
}

// Nueva función para mostrar/ocultar contraseña con Font Awesome y animación
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.querySelector(".toggle-password .fas");

    if (passwordInput.type === "password") {
        // Antes de mostrar, oculta temporalmente con opacidad
        passwordInput.style.opacity = '0';
        setTimeout(() => {
            passwordInput.type = "text";
            passwordInput.style.opacity = '1'; // Muestra con animación
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        }, 250); // Espera un poco para que se vea la transición
    } else {
        // Antes de ocultar, oculta temporalmente con opacidad
        passwordInput.style.opacity = '0';
        setTimeout(() => {
            passwordInput.type = "password";
            passwordInput.style.opacity = '1'; // Muestra con animación
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }, 250); // Espera un poco para que se vea la transición
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeSidebar = document.querySelector('.close-sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // Cierra la sidebar al hacer clic fuera de ella
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
});

// Aquí puedes agregar tus otras funciones
function toggleLogin() {
    // Implementa tu lógica de login aquí
    console.log("Toggle login clicked");
}

function agregarAlCarrito(producto) {
    // Implementa tu lógica de carrito aquí
    console.log(`Agregado al carrito: ${producto}`);
}

function Checkout() {
    // Implementa tu lógica de checkout aquí
    console.log("Finalizando compra");
}

