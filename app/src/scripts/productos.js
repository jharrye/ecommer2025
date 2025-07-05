const productos = [
  {
    nombre: "Tenis Mujer Urbanos",
    precio: 120000,
    imagen: "carpetaimage/tenisMujer.jpeg"
  },
  {
    nombre: "Audífonos Bluetooth",
    precio: 80000,
    imagen: "carpetaimage/tenologia.jpeg"
  },
  {
    nombre: "Tenis Hombre Street",
    precio: 130000,
    imagen: "carpetaimage/tenisHombre (2).jpeg"
  }
];

function mostrarProductos() {
  const contenedor = document.getElementById("lista-productos");
  productos.forEach(p => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");
    tarjeta.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" width="200" />
      <h3>${p.nombre}</h3>
      <p>Precio: $${p.precio.toLocaleString()}</p>
      <button onclick="agregarProductoDesdeBoton('${p.nombre}', ${p.precio}, 1)">Agregar al carrito</button>
    `;
    contenedor.appendChild(tarjeta);
  });
}

window.onload = function () {
  mostrarProductos(); // Mostrar productos al cargar la página
  // Puedes agregar aquí también el carrito si lo necesitas
};
