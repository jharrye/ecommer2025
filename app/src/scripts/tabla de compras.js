let products = [];

window.onload = function () {
  const data = localStorage.getItem("facturaProductos");
  if (data) {
    products = JSON.parse(data);
    renderizarProductos();
  }
};

function agregarProducto() {
  const nombre = document.getElementById("nombre").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  if (!nombre || isNaN(precio) || isNaN(cantidad)) {
    alert("Completa todos los campos correctamente.");
    return;
  }
  products.push({ name: nombre, price: precio, quantity: cantidad });
  guardarLocalStorage();
  renderizarProductos();
  document.getElementById("nombre").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("cantidad").value = "";
}

function renderizarProductos() {
  const cuerpo = document.getElementById("cuerpo-tabla");
  cuerpo.innerHTML = "";
  let total = 0;
  products.forEach((p, i) => {
    const subtotal = p.price * p.quantity;
    total += subtotal;
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td contenteditable="true" oninput="modificar(${i}, 'name', this.innerText)">${p.name}</td>
      <td contenteditable="true" oninput="modificar(${i}, 'price', this.innerText)">${p.price}</td>
      <td contenteditable="true" oninput="modificar(${i}, 'quantity', this.innerText)">${p.quantity}</td>
      <td>$${subtotal.toFixed(2)}</td>
      <td><button onclick="eliminarProducto(${i})">Eliminar</button></td>
    `;
    cuerpo.appendChild(fila);
  });
  document.getElementById("total").innerText = total.toFixed(2);
}

function guardarLocalStorage() {
  localStorage.setItem("facturaProductos", JSON.stringify(products));
}

function eliminarProducto(index) {
  products.splice(index, 1);
  guardarLocalStorage();
  renderizarProductos();
}

function modificar(index, campo, valor) {
  if (campo === "price" || campo === "quantity") {
    valor = parseFloat(valor);
    if (isNaN(valor)) return;
  }
  products[index][campo] = valor;
  guardarLocalStorage();
  renderizarProductos();
}
function agregarProductoDesdeBoton(nombre, precio, cantidad) {
  products.push({ name: nombre, price: precio, quantity: cantidad });
  guardarLocalStorage();
  renderizarProductos();

  //Mostrar mensaje de confirmacion
  const mensaje = document.getElementById("mensaje-agregado");
  mensaje.style.display = "block";
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 2000); // ocultar despues de dos segundos
}
