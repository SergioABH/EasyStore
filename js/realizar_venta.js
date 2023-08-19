const productos = [
    { id: 1, nombre: 'Bebidas', precio: 3000 },
    { id: 2, nombre: 'Galletas', precio: 2000 },
    { id: 3, nombre: 'Caramelos', precio: 1000 }
  ];
  
  let carrito = [];
  
  // Obtener elementos
  const productoSelect = document.getElementById('productoSelect');
  const cantidadInput = document.getElementById('cantidadInput');
  const agregarBtn = document.getElementById('agregarBtn');
  const carritoLista = document.getElementById('carritoLista');
  const totalElement = document.getElementById('total');
  const realizarVentaBtn = document.getElementById('realizarVentaBtn');
  
  // Generar opciones de productos
  productos.forEach(producto => {
    const option = document.createElement('option');
    option.value = producto.id;
    option.text = `${producto.nombre} - $${producto.precio}`;
    productoSelect.appendChild(option);
  });
  
  // Función para calcular el total a pagar
  function calcularTotal() {
    let total = 0;
  
    carrito.forEach(item => {
      total += item.producto.precio * item.cantidad;
    });
  
    return total;
  }
  
  // Función para actualizar el total a pagar en el carrito
  function actualizarTotal() {
    const total = calcularTotal();
    totalElement.textContent = `Total a pagar: $${total}`;
  }
  
  // Evento de clic en "Agregar al carrito"
  agregarBtn.addEventListener('click', () => {
    const productoId = productoSelect.value;
    const cantidad = parseInt(cantidadInput.value);
  
    if (productoId && cantidad) {
      const productoSeleccionado = productos.find(producto => producto.id === parseInt(productoId));
  
      if (productoSeleccionado) {
        const itemCarrito = {
          producto: productoSeleccionado,
          cantidad: cantidad
        };
  
        carrito.push(itemCarrito);
  
        // Mostrar elemento en el carrito
        const li = document.createElement('li');
        li.textContent = `${productoSeleccionado.nombre} - Cantidad: ${cantidad}`;
        carritoLista.appendChild(li);
  
        // Actualizar el total a pagar
        actualizarTotal();
  
        // Limpiar campos de entrada
        productoSelect.value = '';
        cantidadInput.value = '';
      }
    }
  });
  
  // Evento de clic en "Realizar Venta"
  realizarVentaBtn.addEventListener('click', () => {
    
    // Obtener el total a pagar
    const total = calcularTotal();
  
    // Redireccionar a la página de pagos con el total como parámetro
    window.location.href = `pagos.html?total=${total}`;
  });
  
  