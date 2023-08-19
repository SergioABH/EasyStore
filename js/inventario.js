var productos = [];
var productoSeleccionado = null;

var listaProductos = document.getElementById('productos-lista');
var btnAgregar = document.getElementById('btn-agregar');
var btnVer = document.getElementById('btn-ver');
var btnEditar = document.getElementById('btn-editar');
var btnEliminar = document.getElementById('btn-eliminar');
var formularioContainer = document.getElementById('formulario-container');
var formulario = document.getElementById('formulario');
var btnCancelar = document.getElementById('btn-cancelar');

// Lista de productos
function mostrarProductos() {
  listaProductos.innerHTML = '';

  productos.forEach(function(producto, indice) {
    var elemento = document.createElement('div');
    elemento.innerHTML = producto.nombre + ' (' + producto.codigo + ')';
    elemento.classList.add('producto');

    elemento.addEventListener('click', function() {
      seleccionarProducto(indice);
    });

// Seleccionar producto
    if (indice === productoSeleccionado) {
      elemento.classList.add('selected');
    }

    var checkmark = document.createElement('div');
    checkmark.classList.add('checkmark');
    elemento.appendChild(checkmark);

    listaProductos.appendChild(elemento);
  });
}

// Función para seleccionar un producto
function seleccionarProducto(indice) {
  productoSeleccionado = indice;
  btnVer.disabled = false;
  btnEditar.disabled = false;
  btnEliminar.disabled = false;

  mostrarProductos();
}

// Función para mostrar los detalles de un producto
function mostrarDetallesProducto() {
  var producto = productos[productoSeleccionado];
  var detalles = `
    <h2>Detalles del producto</h2>
    <p><strong>Nombre:</strong> ${producto.nombre}</p>
    <p><strong>Código:</strong> ${producto.codigo}</p>
    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
    <p><strong>Precio de venta:</strong> ${producto.precio}</p>
    <p><strong>Cantidad disponible:</strong> ${producto.cantidad}</p>
  `;

  listaProductos.innerHTML = detalles;

// Botón para ocultar detalles
  var btnOcultar = document.createElement('button');
  btnOcultar.innerText = 'Ocultar detalles';
  listaProductos.appendChild(btnOcultar);

  btnOcultar.addEventListener('click', function() {
    mostrarProductos();
  });
}

// Función para agregar un producto
function agregarProducto() {
  var nombre = document.getElementById('nombre').value;
  var codigo = document.getElementById('codigo').value;
  var descripcion = document.getElementById('descripcion').value;
  var precio = document.getElementById('precio').value;
  var cantidad = document.getElementById('cantidad').value;

  if (nombre && codigo && descripcion && precio && cantidad) {
    var producto = {
      nombre: nombre,
      codigo: codigo,
      descripcion: descripcion,
      precio: precio,
      cantidad: cantidad
    };

    productos.push(producto);
    mostrarProductos();
    limpiarFormulario();
    ocultarFormulario();
  }
}

// Función para editar un producto
function editarProducto() {
  var producto = productos[productoSeleccionado];
  var nombre = prompt('Ingrese el nuevo nombre', producto.nombre);
  var codigo = prompt('Ingrese el nuevo código', producto.codigo);
  var descripcion = prompt('Ingrese la nueva descripción', producto.descripcion);
  var precio = prompt('Ingrese el nuevo precio de venta', producto.precio);
  var cantidad = prompt('Ingrese la nueva cantidad disponible', producto.cantidad);

  if (nombre && codigo && descripcion && precio && cantidad) {
    producto.nombre = nombre;
    producto.codigo = codigo;
    producto.descripcion = descripcion;
    producto.precio = precio;
    producto.cantidad = cantidad;

    mostrarProductos();
    ocultarFormulario();
  }
}

// Función para eliminar un producto
function eliminarProducto() {
  productos.splice(productoSeleccionado, 1);
  mostrarProductos();
  ocultarFormulario();
}

// Función para limpiar el formulario
function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('codigo').value = '';
  document.getElementById('descripcion').value = '';
  document.getElementById('precio').value = '';
  document.getElementById('cantidad').value = '';
}

// Función para mostrar el formulario
function mostrarFormulario() {
  formularioContainer.style.display = 'block';
}

// Función para ocultar el formulario
function ocultarFormulario() {
  formularioContainer.style.display = 'none';
}

// Mostrar el formulario al hacer clic en "Agregar producto"
btnAgregar.addEventListener('click', function() {
  mostrarFormulario();
});

// Mostrar los detalles del producto seleccionado al hacer clic en "Ver detalles"
btnVer.addEventListener('click', function() {
  mostrarDetallesProducto();
});

// Editar el producto seleccionado al hacer clic en "Editar producto"
btnEditar.addEventListener('click', function() {
  editarProducto();
});

// Eliminar el producto seleccionado al hacer clic en "Eliminar producto"
btnEliminar.addEventListener('click', function() {
  eliminarProducto();
});

// Cancelar la operación al hacer clic en "Cancelar"
btnCancelar.addEventListener('click', function() {
  ocultarFormulario();
});

// Agregar un producto al hacer submit del formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  agregarProducto();
});

// Buscar un producto al presionar una tecla en el campo de búsqueda
document.getElementById('buscar').addEventListener('keyup', function() {
  var valor = this.value.toLowerCase();

  var productosFiltrados = productos.filter(function(producto) {
    return producto.nombre.toLowerCase().includes(valor) || producto.codigo.toLowerCase().includes(valor);
  });

  listaProductos.innerHTML = '';

  productosFiltrados.forEach(function(producto, indice) {
    var elemento = document.createElement('div');
    elemento.innerHTML = producto.nombre + ' (' + producto.codigo + ')';
    elemento.classList.add('producto');

    elemento.addEventListener('click', function() {
      seleccionarProducto(indice);
    });

    if (indice === productoSeleccionado) {
      elemento.classList.add('selected');
    }

    var checkmark = document.createElement('div');
    checkmark.classList.add('checkmark');
    elemento.appendChild(checkmark);

    listaProductos.appendChild(elemento);
  });
});

// Función para eliminar un producto
function eliminarProducto() {
    var producto = productos[productoSeleccionado];
    var confirmacion = confirm(
      `¿Estás seguro de eliminar el producto:\nNombre: ${producto.nombre}\nCódigo: ${producto.codigo}?`
    );
  
    if (confirmacion) {
      productos.splice(productoSeleccionado, 1);
      mostrarProductos();
      ocultarFormulario();
    }
  }
  
// Buscar un producto al presionar una tecla en el campo de búsqueda
  document.getElementById('buscar').addEventListener('keyup', function() {
    var valor = this.value.toLowerCase();
  
    var productosFiltrados = productos.filter(function(producto) {
      return producto.nombre.toLowerCase().includes(valor) || producto.codigo.toLowerCase().includes(valor);
    });
  
    listaProductos.innerHTML = '';
  
    productosFiltrados.forEach(function(producto, indice) {
      var elemento = document.createElement('div');
      elemento.innerHTML = producto.nombre + ' (' + producto.codigo + ')';
      elemento.classList.add('producto');
  
      elemento.addEventListener('click', function() {
        seleccionarProducto(indice);
      });
  
      if (indice === productoSeleccionado) {
        elemento.classList.add('selected');
      }
  
      var checkmark = document.createElement('div');
      checkmark.classList.add('checkmark');
      elemento.appendChild(checkmark);
  
      listaProductos.appendChild(elemento);
    });
  });
  
  mostrarProductos();
  
