const contenedor = document.querySelector('.contenedor');

contenedor.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

const boton = document.querySelector('button');

boton.addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el clic se propague al div
    alert('Hola desde el botón');
});




