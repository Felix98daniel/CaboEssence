(function() {
    emailjs.init("iw5xlnR9fe0MOjpiA");  // Aquí va tu user ID de EmailJS
})();


  // Espera que el formulario sea enviado
  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita el comportamiento por defecto (recargar la página)

      // Recolecta los valores del formulario
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;

      // Prepara los parámetros para enviar al template
      var templateParams = {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message
      };

      // Envía el formulario con EmailJS
      emailjs.send("service_hbu1u7a", "template_g9mzqi8", templateParams)
          .then(function(response) {
              console.log('SUCCESS!', response);
              document.getElementById("success").innerHTML = "<div class='alert alert-success'>¡Mensaje enviado con éxito!</div>";
          }, function(error) {
              console.log('FAILED...', error);
              document.getElementById("success").innerHTML = "<div class='alert alert-danger'>Hubo un error al enviar el mensaje. Intenta nuevamente.</div>";
          });
  });
