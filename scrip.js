
      
  
  document.addEventListener("DOMContentLoaded", mostrarUsuarios);

function nuevaCuenta() {
    const formLogin = document.getElementById("formLogin");
    const formRegistro = document.getElementById("formRegistro");
    const titulo = document.getElementById("titulo");
    const toggle = document.getElementById("toggle");
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "";

if(formLogin.style.display === "none"){
    formLogin.style.display = "block";
    formRegistro.style.display = "none";
    titulo.textContent = "iniciar sesion";
    toggle.textContent = "no tenes cuenta? crear una";
}else{
    formLogin.style.display = "none";
    formRegistro.style.display = "block";
    titulo.textContent = "crear usuario";
    toggle.textContent = "ya tenes cuenta? iniciar sesion";
    }

}

function registrar(){
    const usuario = document.getElementById("nuevoUsuario").value;
    const password = document.getElementById("nuevoPassword").value;
    const mensaje = document.getElementById("mensaje");

    if(usuario === "" || password === ""){
        mensaje.textContent = "completar todos los campos.";
        mensaje.classList.add("error");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if(usuarios[usuario]) {
        mensaje.textContent = "ese usuario ya existe.";
        mensaje.classList.add("error");
    }else{
        usuarios[usuario] = password;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        mensaje.textContent = "usuario creado con exito";
        mensaje.classList.remove("error");
    }
}

function login(){
    const usuario = document.getElementById("loginUsuario").value;
    const password = document.getElementById("loginPassword").value;
    const mensaje = document.getElementById("mensaje");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

if (usuarios[usuario] && usuarios[usuario] === password) {
        mensaje.textContent = `Bienvenido, ${usuario}! `;
        mensaje.className = "mensaje exito";

    
        localStorage.setItem("usuarioActual", usuario);
        setTimeout(() => {
          window.location.href = "main.html";
        }, 1000);
      } else {
        mensaje.textContent = "Usuario o contraseña incorrectos.";
        mensaje.className = "mensaje error";
      }
} 
function mostrarUsuarios() {
      const lista = document.getElementById("listaUsuarios");
      lista.innerHTML = ""; 

      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

   
      if (Object.keys(usuarios).length === 0) {
        lista.innerHTML = "<li>No hay usuarios registrados todavía.</li>";
        return;
      }

 
      for (let nombre in usuarios) {
        const li = document.createElement("li");
        li.textContent = ` ${nombre}`;
        lista.appendChild(li);
      }
    }