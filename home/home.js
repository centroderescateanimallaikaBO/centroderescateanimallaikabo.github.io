document.addEventListener("DOMContentLoaded", function() {
    // Código de Flip Cards
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function() {
            const flipCardInner = card.querySelector('.flip-card-inner');
            if (flipCardInner) {
                flipCardInner.classList.toggle('rotate');
            }
        });
    });

    // Código de Navegación para la Sección de Mascotas en Adopción
    let currentIndex = 0;
    const cards = document.querySelectorAll(".adoption-section .col-md-4");
    const prevBtn = document.getElementById("adoption-prevBtn");
    const nextBtn = document.getElementById("adoption-nextBtn");

    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.toggle("active", i === index);
        });
    }

    if (cards.length > 0) {
        showCard(currentIndex);

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
                showCard(currentIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
                showCard(currentIndex);
            });
        }
    }

    // Código de Navegación para la Sección de Historias de Éxito
    let storyIndex = 0;
    const stories = document.querySelectorAll(".success-stories .col-md-3");
    const totalStories = stories.length;

    function showStory(index) {
        stories.forEach((story, i) => {
            story.classList.remove("active");
            if (i === index) {
                story.classList.add("active");
            }
        });
    }

    if (stories.length > 0) {
        showStory(storyIndex);

        const nextStoryBtn = document.getElementById("stories-nextBtn");
        const prevStoryBtn = document.getElementById("stories-prevBtn");

        if (nextStoryBtn) {
            nextStoryBtn.addEventListener("click", function() {
                storyIndex = (storyIndex + 1) % totalStories;
                showStory(storyIndex);
            });
        }

        if (prevStoryBtn) {
            prevStoryBtn.addEventListener("click", function() {
                storyIndex = (storyIndex - 1 + totalStories) % totalStories;
                showStory(storyIndex);
            });
        }
    }

    // Código de cambio automático para la sección de Patrocinadores
    const sponsors = document.querySelectorAll(".sponsor-icon");
    let currentSponsor = 0;

    function showNextSponsor() {
        sponsors[currentSponsor].classList.remove("active");
        currentSponsor = (currentSponsor + 1) % sponsors.length;
        sponsors[currentSponsor].classList.add("active");
    }

    if (sponsors.length > 0) {
        setInterval(showNextSponsor, 1500);
    }

    // Código de Toggle Menu
    const menuIcon = document.querySelector('.menu-icon-container');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
        });
    }


});
