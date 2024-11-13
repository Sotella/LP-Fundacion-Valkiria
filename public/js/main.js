// Navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('data-section');
        
        // Ocultar todas las secciones
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar la sección objetivo
        document.getElementById(targetId).classList.add('active');
        
        // Si es móvil, cerrar el menú
        document.querySelector('.nav-links').classList.remove('active');

        // Scroll al inicio de la página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Menú móvil
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});