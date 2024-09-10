//Animación de letras teclandose
document.addEventListener('DOMContentLoaded', () => {
    const texto = ' Mi nombre es...';
    const elemento = document.querySelector('.hello span');
    let indice = 0;

    function escribirTexto() {
        if (indice < texto.length) {
            elemento.textContent += texto.charAt(indice);
            indice++;
            setTimeout(escribirTexto, 100); // Ajusta el tiempo para la velocidad de escritura
        } else {
            setTimeout(borrarTexto, 2000); // Espera 2 segundos antes de empezar a borrar
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
});

//Animación de efecto para la foto de proyectos
document.addEventListener('DOMContentLoaded', () => {
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
});

