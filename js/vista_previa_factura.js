// Vista previa de la factura
document.getElementById("vistaPreviaBtn").addEventListener("click", function () {
    // Crear la ventana emergente
    var ventanaEmergente = window.open("", "Vista Previa de Factura", "width=600,height=400");
    
    // Agregar el contenido a la ventana emergente
    ventanaEmergente.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Vista Previa de Factura</title>
        </head>
        <body>
          <h1>Mi Factura</h1>
        </body>
      </html>
    `);
  });
  