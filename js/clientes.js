var clientes = [];
var clienteSeleccionado = null;

var listaClientes = document.getElementById('clientes-lista');
var btnAgregar = document.getElementById('btn-agregar');
var btnVer = document.getElementById('btn-ver');
var btnEditar = document.getElementById('btn-editar');
var btnEliminar = document.getElementById('btn-eliminar');
var formularioContainer = document.getElementById('formulario-container');
var formulario = document.getElementById('formulario');
var btnCancelar = document.getElementById('btn-cancelar');

// Función para mostrar la lista de nombres de clientes
function mostrarNombresClientes() {
  listaClientes.innerHTML = '';

  clientes.forEach(function(cliente, indice) {
    var elemento = document.createElement('div');
    elemento.innerHTML = cliente.nombre;

    elemento.addEventListener('click', function() {
      seleccionarCliente(indice);
    });

    if (indice === clienteSeleccionado) {
      elemento.classList.add('selected');
    }

    var checkmark = document.createElement('div');
    checkmark.classList.add('checkmark');
    elemento.appendChild(checkmark);

    listaClientes.appendChild(elemento);
  });
}

// Función para seleccionar un cliente
function seleccionarCliente(indice) {
  clienteSeleccionado = indice;
  btnVer.disabled = false;
  btnEditar.disabled = false;
  btnEliminar.disabled = false;

  mostrarNombresClientes();
}

// Función para mostrar los datos de un cliente
function mostrarDatosCliente() {
  var cliente = clientes[clienteSeleccionado];
  var datos = `
  <h2>Informaci&oacute;n del cliente</h2>
  <p><strong>Nombre:</strong> ${cliente.nombre}</p>
  <p><strong>Correo electr&oacute;nico:</strong> ${cliente.correo}</p>
  <p><strong>Tel&eacute;fono:</strong> ${cliente.telefono}</p>
  <p><strong>Direcci&oacute;n:</strong> ${cliente.direccion}</p>
  <p><strong>Categor&iacute;as de productos de inter&eacute;s:</strong> ${cliente.categorias}</p>
  <p><strong>Marcas preferidas:</strong> ${cliente.marcas}</p>
`;

  listaClientes.innerHTML = datos;

  // Agregar el botón "Ocultar cliente" al final de la información del cliente
  var btnOcultar = document.createElement('button');
  btnOcultar.innerText = 'Ocultar cliente';
  listaClientes.appendChild(btnOcultar);

  btnOcultar.addEventListener('click', function() {
    ocultarDatosCliente();
  });
}

// Función para ocultar los datos del cliente
function ocultarDatosCliente() {
  mostrarNombresClientes();

  var clienteSeleccionadoTexto = document.getElementsByClassName('selected')[0];
  clienteSeleccionadoTexto.classList.remove('selected');

  btnVer.disabled = true;
  btnEditar.disabled = true;
  btnEliminar.disabled = true;
}

// Función para agregar un cliente
function agregarCliente() {
  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('correo').value;
  var telefono = document.getElementById('telefono').value;
  var direccion = document.getElementById('direccion').value;
  var categorias = document.getElementById('categorias').value;
  var marcas = document.getElementById('marcas').value;

  if (nombre && correo && telefono && direccion) {
    var cliente = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
      categorias: categorias,
      marcas: marcas
    };

    clientes.push(cliente);
    mostrarNombresClientes();
    limpiarFormulario();
    ocultarFormulario();
  }
}

// Función para editar un cliente
function editarCliente() {
    var cliente = clientes[clienteSeleccionado];
    var nombre = prompt('Ingrese el nuevo nombre', cliente.nombre);
    var correo = prompt('Ingrese la nueva direccion de correo electronico', cliente.correo);
    var telefono = prompt('Ingrese el nuevo numero de telefono', cliente.telefono);
    var direccion = prompt('Ingrese la nueva direccion', cliente.direccion);
    var categorias = prompt('Ingrese las nuevas categorías de productos de interes', cliente.categorias);
    var marcas = prompt('Ingrese las nuevas marcas preferidas', cliente.marcas);    

  if (nombre && correo && telefono && direccion) {
    cliente.nombre = nombre;
    cliente.correo = correo;
    cliente.telefono = telefono;
    cliente.direccion = direccion;
    cliente.categorias = categorias;
    cliente.marcas = marcas;

    mostrarNombresClientes();
    ocultarFormulario();
  }
}

// Función para eliminar un cliente
function eliminarCliente() {
  var cliente = clientes[clienteSeleccionado];
  var confirmacion = confirm("¿Estas seguro de que deseas eliminar al cliente '" + cliente.nombre + "'?");

  if (confirmacion) {
    clientes.splice(clienteSeleccionado, 1);
    mostrarNombresClientes();
    ocultarFormulario();
  }
}

// Función para limpiar el formulario
function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('direccion').value = '';
  document.getElementById('categorias').value = '';
  document.getElementById('marcas').value = '';
}

// Función para mostrar el formulario
function mostrarFormulario() {
  formularioContainer.style.display = 'block';
}

// Función para ocultar el formulario
function ocultarFormulario() {
  formularioContainer.style.display = 'none';
}

// Mostrar el formulario al hacer clic en "Agregar cliente"
btnAgregar.addEventListener('click', function() {
  mostrarFormulario();
});

// Mostrar los datos del cliente seleccionado al hacer clic en "Ver cliente"
btnVer.addEventListener('click', function() {
  mostrarDatosCliente();
});

// Editar el cliente seleccionado al hacer clic en "Editar cliente"
btnEditar.addEventListener('click', function() {
  editarCliente();
});

// Eliminar el cliente seleccionado al hacer clic en "Eliminar cliente"
btnEliminar.addEventListener('click', function() {
  eliminarCliente();
});

// Cancelar la operación al hacer clic en "Cancelar"
btnCancelar.addEventListener('click', function() {
  ocultarFormulario();
});

// Agregar un cliente al hacer submit del formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  agregarCliente();
});
