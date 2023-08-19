// Función para generar el informe de inventario y movimientos
function generateInventoryReport() {
    var reportResults = document.getElementById('report-results');
    reportResults.innerHTML = '';
  
    // Datos ficticios para el informe de inventario y movimientos
    var inventoryData = [
      { producto: 'Producto 1', cantidad: 10, movimiento: 'Compra' },
      { producto: 'Producto 2', cantidad: 5, movimiento: 'Venta' },
      { producto: 'Producto 3', cantidad: 8, movimiento: 'Devoluci&oacute;n' },
    ];
  
    var reportTable = document.createElement('table');
    reportTable.innerHTML = `
      <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Movimiento</th>
      </tr>
    `;
  
    inventoryData.forEach(function(item) {
      var row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.producto}</td>
        <td>${item.cantidad}</td>
        <td>${item.movimiento}</td>
      `;
      reportTable.appendChild(row);
    });
  
    reportResults.appendChild(reportTable);
    reportResults.style.display = 'block';
  }
  
  // Obtener el botón de generar informe y asignarle el evento de clic
  var generateReportBtn = document.getElementById('generate-report-btn');
  generateReportBtn.addEventListener('click', generateInventoryReport);
  