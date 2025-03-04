document.addEventListener("DOMContentLoaded", function() {
    let currentHeroSlide = 0;
    const heroSlides = document.querySelectorAll('.hero-slide');
    const totalHeroSlides = heroSlides.length;

    // Función para mostrar el slide actual
    function showHeroSlide(index) {
        if (heroSlides.length === 0) return; // Verifica si hay slides antes de continuar

        heroSlides.forEach((slide, i) => {
            slide.classList.remove('active');
        });

        // Asegúrate de que el índice esté dentro del rango
        if (index >= 0 && index < heroSlides.length) {
            heroSlides[index].classList.add('active');
        }
    }

    // Función para pasar al siguiente slide
    function nextHeroSlide() {
        if (totalHeroSlides > 0) {
            currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
            showHeroSlide(currentHeroSlide);
        }
    }

    // Mostrar la primera imagen al cargar la página si hay slides disponibles
    if (heroSlides.length > 0) {
        showHeroSlide(currentHeroSlide);

        // Cambia automáticamente de slide cada 1.5 segundos
        setInterval(nextHeroSlide, 1500);
    } else {
        console.warn("No se encontraron slides en '.hero-slide'.");
    }
});
