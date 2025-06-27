function loginUsuario() {
    // Simulación de un proceso de inicio de sesión
    //const usuario = document.getElementById("usuario").value;
    //const contrasena = document.getElementById("contrasena").value;
    const usuario = prompt("Ingrese su usuario") // Simulación de usuario
    const contrasena = prompt("Ingrese su contraseña") // Simulación de contraseña
    if (usuario === "edgar" && contrasena === "1234") {
        alert("Inicio de sesión exitoso")
        procesoUsuario()
    } else {
        alert("Usuario o contraseña incorrectos")
    }
} 

function operacionUsuario() {
    let datoEdad= prompt("Ingrese su edad");
    let sumaEdad=parseInt(datoEdad) + 5;
    alert(`Su edad en 5 años sera:${sumaEdad} `);
}

function procesoUsuario(){
            // variable para manejar el nombre del usuario
            let usuario="edgar morillo"
            //alert("Hola " + usuario + ", bienvenido a mi aplicación!");
            //console.log("Hola " + usuario + ", bienvenido a mi aplicación!");
            //document.write("Hola <b>" + usuario + "</b>, bienvenido a mi aplicación!");
            //document.body.innerHTML += <p>Hola <b>${usuario}</b>, bienvenido a mi aplicación!</p>;
            const lista = document.getElementById("elementoLista")
            let contenido=""
            // simulacion de datos que vienen de una base de datos del backend
            for (let i = 1; i <= 10; i++) {
                contenido += <p>Elemento ${i}</p>;
            }
            lista.innerHTML = contenido;

            // simulacion de cargar datos en una lista UL
            const listaUL = document.getElementById("elementoListaUL");
            for (let i = 1; i <= 10; i++) {
                const li = document.createElement("li");
                li.textContent = Item ${i};
                listaUL.appendChild(li);
            }
        }