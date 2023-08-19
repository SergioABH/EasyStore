document.getElementById("mobile-payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var phoneNumber = document.getElementById("phone-number").value;
    var amount = document.getElementById("amount").value;
    
    // Ejemplo de confirmación de pago
    alert("Pago móvil exitoso");
  });
  