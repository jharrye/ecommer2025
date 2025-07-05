// Al cargar la página: verificar si hay usuario activo
window.onload = function () {
  const usuarioActivo = localStorage.getItem("usuarioActivo");
  if (usuarioActivo) {
    mostrarBienvenida(usuarioActivo);
  }
};

function registrarUsuario() {
  const usuario = document.getElementById("registro-usuario").value.trim();
  const contrasena = document.getElementById("registro-contrasena").value;

  if (!usuario || !contrasena) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existente = usuarios.find(u => u.nombre === usuario);
  if (existente) {
    alert("Ese usuario ya está registrado.");
    return;
  }

  usuarios.push({ nombre: usuario, contrasena: contrasena });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuario registrado con éxito 🎉");

  document.getElementById("registro-usuario").value = "";
  document.getElementById("registro-contrasena").value = "";
}

function iniciarSesion() {
  const usuario = document.getElementById("login-usuario").value.trim();
  const contrasena = document.getElementById("login-contrasena").value;

  if (!usuario || !contrasena) {
    alert("Por favor, ingresa tus datos.");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const encontrado = usuarios.find(
    u => u.nombre === usuario && u.contrasena === contrasena
  );

  if (encontrado) {
    localStorage.setItem("usuarioActivo", usuario);
    mostrarBienvenida(usuario);
    alert("Inicio de sesión exitoso ✅");
    document.getElementById("login-usuario").value = "";
    document.getElementById("login-contrasena").value = "";
  } else {
    alert("Usuario o contraseña incorrectos ❌");
  }
}

function mostrarBienvenida(nombre) {
  document.getElementById("formularios-usuario").style.display = "none";
  document.getElementById("bienvenida").innerHTML = `
    Hola, <b>${nombre}</b> 👋 Bienvenido a Estilo Plus<br>
    <button onclick="cerrarSesion()">Cerrar sesión</button>
  `;
}

function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
  location.reload(); // Recarga la página para mostrar nuevamente los formularios
}
