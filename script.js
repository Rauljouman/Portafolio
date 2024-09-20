document.addEventListener('DOMContentLoaded', () => {
    // Animación de letras escribiéndose
    const texto = '¡Hola! Soy ...';
    const elemento = document.querySelector('.hello span');
    let indice = 0;

    function escribirTexto() {
        if (indice < texto.length) {
            elemento.textContent += texto.charAt(indice);
            indice++;
            setTimeout(escribirTexto, 100); // Ajusta el tiempo para la velocidad de escritura
        } 
    }

    function borrarTexto() {
        if (indice > 0) {
            elemento.textContent = texto.substring(0, indice - 1);
            indice--;
            setTimeout(borrarTexto, 100); // Ajusta el tiempo para la velocidad de borrado
        } else {
            setTimeout(escribirTexto, 500); // Espera 0.5 segundos antes de volver a escribir
        }
    }

    escribirTexto();

    // Animación de efecto para la foto de proyectos
    const proyectos = document.querySelectorAll('.proyecto');

    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseover', () => {
            proyecto.style.transform = 'scale(1.05)'; 
            proyecto.style.borderColor = '#CBBF0B';
        });

        proyecto.addEventListener('mouseout', () => {
            proyecto.style.transform = 'scale(1)'; 
            proyecto.style.borderColor = '#00F9FF'; 
        });

        proyecto.style.transition = 'border-color 0.3s ease, transform 0.3s ease';
    });

    // Configuración de ScrollReveal
    ScrollReveal().reveal('#aboutme', {
        distance: '50px',
        duration: 1000,
        origin: 'bottom',
        opacity: 0,
        easing: 'ease-in-out',
        delay: 300,
    });

    ScrollReveal().reveal('#experience', {
        distance: '50px',
        duration: 1000,
        origin: 'bottom',
        opacity: 0,
        easing: 'ease-in-out',
        delay: 300,
    });

    ScrollReveal().reveal('#projects', {
        distance: '50px',
        duration: 1000,
        origin: 'bottom',
        opacity: 0,
        easing: 'ease-in-out',
        delay: 300,
    });

    ScrollReveal().reveal('#skills', {
        distance: '50px',
        duration: 1000,
        origin: 'bottom',
        opacity: 0,
        easing: 'ease-in-out',
        delay: 300,
    });
});