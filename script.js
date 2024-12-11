function showOptions(overlayId) {
            const overlay = document.getElementById(overlayId);
            overlay.classList.remove('hidden'); // Mostrar el overlay
        }

        function hideOptions(overlayId) {
            const overlay = document.getElementById(overlayId);
            overlay.classList.add('hidden'); // Ocultar el overlay
        }
        document.getElementById('terms-link').addEventListener('click', function (event) {
            event.preventDefault();
            var terms = document.getElementById('terms');
            if (terms.classList.contains('hidden')) {
                terms.classList.remove('hidden');
            } else {
                terms.classList.add('hidden');
            }
        });
        // Función para ocultar la capa de transición y permitir el desplazamiento
        function hideTransition() {
            const transitionLayer = document.querySelector('.fade-out');
            transitionLayer.style.display = 'none';
            document.body.style.overflow = 'auto'; // Permitir desplazamiento
        }

        // Ejecutar la función después de 6 segundos
        setTimeout(hideTransition, 6000);

        // Función para mostrar/ocultar el menú
        function toggleMenu() {
            const sidebar = document.getElementById('sidebar');
            if (sidebar.style.display === 'block') {
                sidebar.style.display = 'none';
            } else {
                sidebar.style.display = 'block';
            }
        }

        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel img');

        function showSlide(index) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3000);
        

        var cartItems = [];

        function showOptions(id) {
            var overlay = document.getElementById(id);
            overlay.classList.remove("hidden");
        }
    
        function hideOptions(id) {
            var overlay = document.getElementById(id);
            overlay.classList.add("hidden");
        }
    
        function addToCart(product, sabor) {
            cartItems.push({ product: product, sabor: sabor });
        }
    
        function toggleCart() {
            var cartDiv = document.getElementById('cart');
            if (cartDiv.classList.contains('hidden')) {
                cartDiv.innerHTML = '<div class="overlay-content"><h1>Carrito</h1>' + getCartContent() + '<button onclick="sendOrder()">Enviar pedido</button></div>';
                cartDiv.classList.remove('hidden');
            } else {
                cartDiv.classList.add('hidden');
            }
            window.location.href='#cart';
        }
    
        function getCartContent() {
            var content = '<ul>';
            cartItems.forEach(function(item) {
                content += '<li>' + item.product + ': ' + item.sabor + '</li>';
            });
            content += '</ul>';
            return content;
        }
    
        function sendOrder() {
            // Construir el cuerpo del correo con la información del pedido
            var emailBody = 'Pedido:\n';
            cartItems.forEach(function(item) {
                emailBody += item.product + ': ' + item.sabor + '\n';
            });
    
            // Enviar correo electrónico
            var email = 'humourbano@gmail.com';
            var subject = 'Nuevo pedido';
            window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(emailBody);
        }
        function closeAnnouncement() {
            document.getElementById('announcement-bar').style.display = 'none';
        }
