// Función para cargar las devoluciones
function loadReturns() {
    var returnsList = document.getElementById('returns-items');
    returnsList.innerHTML = '';
  
    // Aquí se simula una lista de devoluciones de ejemplo
    var returns = [
      { id: 1, invoice: 1001, customer: 'Santiago', products: ['Producto 1', 'Producto 2'], reason: 'Producto vencido' },
      { id: 2, invoice: 1002, customer: 'Pedro', products: ['Producto 3'], reason: 'Error de compra' },
      { id: 3, invoice: 1003, customer: 'Camila', products: ['Producto 4', 'Producto 5'], reason: 'Cambio de opini&oacute;n' },
    ];
  
    returns.forEach(function(returnItem) {
      var item = document.createElement('li');
      item.innerHTML = '<strong>Devoluci&oacute;n #' + returnItem.id + '</strong><br>' +
                       'Factura: #' + returnItem.invoice + '<br>' +
                       'Cliente: ' + returnItem.customer + '<br>' +
                       'Productos: ' + returnItem.products.join(', ') + '<br>' +
                       'Motivo: ' + returnItem.reason;
      returnsList.appendChild(item);
    });
  }
  
  // Cargar las devoluciones al cargar la página
  window.addEventListener('DOMContentLoaded', loadReturns);
  