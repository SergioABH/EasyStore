// Función para generar el informe de ventas
function generateSalesReport() {
    var reportResults = document.getElementById('report-results');
    reportResults.innerHTML = '';
  
    // Datos ficticios para el informe de ventas
    var salesData = [
      { producto: 'Producto 1', cantidad: 10, ingresos: 5000 },
      { producto: 'Producto 2', cantidad: 5, ingresos: 2500 },
      { producto: 'Producto 3', cantidad: 8, ingresos: 4000 },
    ];
  
    var reportTable = document.createElement('table');
    reportTable.innerHTML = `
      <tr>
        <th>Producto</th>
        <th>Cantidad Vendida</th>
        <th>Ingresos</th>
      </tr>
    `;
  
    salesData.forEach(function(sale) {
      var row = document.createElement('tr');
      row.innerHTML = `
        <td>${sale.producto}</td>
        <td>${sale.cantidad}</td>
        <td>${sale.ingresos}</td>
      `;
      reportTable.appendChild(row);
    });
  
    reportResults.appendChild(reportTable);
    reportResults.style.display = 'block';
  }
  
  // Obtener el botón de generar informe y asignarle el evento de clic
  var generateReportBtn = document.getElementById('generate-report-btn');
  generateReportBtn.addEventListener('click', generateSalesReport);
  