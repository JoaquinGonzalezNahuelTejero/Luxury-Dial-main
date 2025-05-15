// Función para agregar al carrito
function agregarAlCarrito(NombreProducto) {
    alert(NombreProducto + " ha sido agregado correctamente!");
}

// Función para mostrar/ocultar login
function toggleLogin() {
    const loginBox = document.getElementById("login-box");
    if (loginBox) {
        loginBox.classList.toggle("hidden");
    }
}

// Función de login
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

// Mostrar/ocultar contraseña con animación
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.querySelector(".toggle-password .fas");

    if (passwordInput.type === "password") {
        passwordInput.style.opacity = '0';
        setTimeout(() => {
            passwordInput.type = "text";
            passwordInput.style.opacity = '1';
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        }, 250);
    } else {
        passwordInput.style.opacity = '0';
        setTimeout(() => {
            passwordInput.type = "password";
            passwordInput.style.opacity = '1';
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }, 250);
    }
}

// Código para manejo del navbar responsive
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar a');

    // Abrir/cerrar menú hamburguesa
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Cerrar el menú cuando se hace clic en un enlace
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});

// Lógica de producto individual desde la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Cargar información del producto desde JSON
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const product = products.find(p => p.id == productId);
        if (product) {
            document.getElementById('productImage').src = product.image;
            document.getElementById('productTitle').textContent = product.name;
            document.getElementById('productPrice').textContent = `U$S ${product.price.toLocaleString()}`;
            document.getElementById('priceDiscount').textContent = `Precio sin impuestos nacionales U$S ${(product.price * 0.9).toLocaleString()}`;
            document.getElementById('colorInfo').textContent = `Color: ${product.color}`;

            const characteristics = document.getElementById('productCharacteristics');
            characteristics.innerHTML = `
                <dt>Marca</dt><dd>${product.brand || 'Rolex'}</dd>
                <dt>Peso</dt><dd>${product.weight || '80 g'}</dd>
            `;

            const addToCartButton = document.getElementById('addToCartButton');
            addToCartButton.onclick = () => {
                agregarAlCarrito(`Reloj ${productId}`);
                addToCartButton.disabled = true;
                addToCartButton.textContent = "En el carrito";
            };
        } else {
            const container = document.querySelector('.product-container');
            if (container) container.innerHTML = '<p>Producto no encontrado</p>';
        }
    })
    .catch(error => console.error('Error loading product:', error));

    function toggleMenu() {
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle("active");
      }