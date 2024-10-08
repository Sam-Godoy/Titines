// Establecer usuario y contraseña inicial en localStorage (esto lo haces solo una vez)
if (!localStorage.getItem("username") || !localStorage.getItem("password")) {
    localStorage.setItem("username", "samuel123"); // Usuario por defecto
    localStorage.setItem("password", "hola1234"); // Contraseña por defecto
}

function login() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        // Ocultar el login y mostrar el contenido
        document.getElementById("login-container").style.display = "none";
        
        // Mostrar todos los contenedores de contenido
        document.getElementById("content-container").style.display = "block";
        document.getElementById("second-container").style.display = "block";
        document.getElementById("third-container").style.display = "block";
        
        localStorage.setItem("loggedIn", "true"); // Marcar como logueado
    } else {
        document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos";
    }
}

// Verificar si el usuario ya está logueado
if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("login-container").style.display = "none";
    
    // Mostrar todos los contenedores de contenido
    document.getElementById("content-container").style.display = "block";
    document.getElementById("second-container").style.display = "block";
    document.getElementById("third-container").style.display = "block";
} else {
    // Asegurarse de que todos los contenedores de contenido estén ocultos
    document.getElementById("content-container").style.display = "none"; 
    document.getElementById("second-container").style.display = "none"; 
    document.getElementById("third-container").style.display = "none"; 
}

