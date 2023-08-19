document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var cardNumber = document.getElementById("card-number").value;
    var expirationDate = document.getElementById("expiration-date").value;
    var cvv = document.getElementById("cvv").value;
    var cardholderName = document.getElementById("cardholder-name").value;
    
    alert("Pago con tarjeta de crédito exitoso");
  });
  