// Función para generar el informe personalizado
function generateCustomReport(event) {
    event.preventDefault();
  
    var reportResults = document.getElementById('report-results');
    reportResults.innerHTML = '';
  
    // Obtener los valores seleccionados del formulario
    var dateRange = document.getElementById('date-range').value;
    var category = document.getElementById('category').value;
    var location = document.getElementById('location').value;
  
    // Simulación de datos del informe
    var reportData = [
      { producto: 'Producto 1', cantidad: 10, ingresos: 1500 },
      { producto: 'Producto 2', cantidad: 5, ingresos: 750 },
      { producto: 'Producto 3', cantidad: 8, ingresos: 1200 },
    ];
  
    var reportTable = document.createElement('table');
    reportTable.innerHTML = `
      <tr>
        <th>Producto</th>
        <th>Cantidad Vendida</th>
        <th>Ingresos</th>
      </tr>
    `;
  
    reportData.forEach(function(item) {
      var row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.producto}</td>
        <td>${item.cantidad}</td>
        <td>${item.ingresos}</td>
      `;
      reportTable.appendChild(row);
    });
  
    reportResults.appendChild(reportTable);
    reportResults.style.display = 'block';
  }
  
  // Obtener el formulario de generación de informe y asignarle el evento de envío
  var reportForm = document.getElementById('report-form');
  reportForm.addEventListener('submit', generateCustomReport);
  