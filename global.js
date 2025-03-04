document.addEventListener("DOMContentLoaded", function() {
    const messages = document.querySelectorAll(".motivation-section .message-box");
    let currentMessage = 0;

    console.log("Número de mensajes encontrados:", messages.length);

    function showNextMessage() {
        console.log("Alternando mensajes. Mensaje actual:", currentMessage);

        // Oculta todas las cajas de mensaje
        messages.forEach((message, index) => {
            message.classList.remove("active");
            console.log("Ocultando mensaje", index);
        });

        // Muestra la siguiente caja de mensaje
        messages[currentMessage].classList.add("active");
        console.log("Mostrando mensaje", currentMessage);

        // Actualiza el índice para el siguiente mensaje
        currentMessage = (currentMessage + 1) % messages.length;
    }

    // Configura el intervalo de tiempo para cambiar cada 1.5 segundos
    setInterval(() => {
        console.log("Intervalo ejecutado");
        showNextMessage();
    }, 1500);

    // Muestra el primer mensaje al cargar la página
    showNextMessage();
});


document.addEventListener("DOMContentLoaded", function() {
    const missionBox = document.querySelector(".mission-box");
    const visionBox = document.querySelector(".vision-box");
    let isMissionVisible = true;

    // Mostrar la misión inicialmente
    missionBox.style.display = "block";
    visionBox.style.display = "none";

    // Alternar entre Misión y Visión cada 10 segundos
    setInterval(() => {
        if (isMissionVisible) {
            missionBox.style.display = "none";
            visionBox.style.display = "block";
        } else {
            missionBox.style.display = "block";
            visionBox.style.display = "none";
        }
        isMissionVisible = !isMissionVisible;
    }, 10000); // 10 segundos
});


document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todas las imágenes de los servicios
    const serviceImages = document.querySelectorAll(".service-card .service-image");

    // Define un array de rutas de imágenes para cada servicio
    const images = [
        ["/assets/servicio-1.png", "/assets/servicio-1.png"], // Imágenes alternas para el primer servicio
        ["/assets/servicio-2.png", "/assets/servicio-2.png"], // Imágenes alternas para el segundo servicio
        ["/assets/servicio-3.png", "/assets/servicio-3.png"]  // Imágenes alternas para el tercer servicio
    ];

    let currentIndex = 0;

    // Cambia las imágenes automáticamente cada 1.5 segundos en pantallas de 360px o menos
    function rotateImages() {
        if (window.innerWidth <= 431) {
            serviceImages.forEach((img, idx) => {
                img.src = images[idx][currentIndex % images[idx].length];
            });
            currentIndex++;
        }
    }

    // Configura el intervalo para cambiar cada 1.5 segundos
    setInterval(rotateImages, 1500);
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");
    let currentIndex = 0;

    function rotateImages() {
        if (window.innerWidth <= 431) {
            // Oculta todas las tarjetas de servicio
            serviceCards.forEach((card, idx) => {
                card.style.display = (idx === currentIndex) ? "block" : "none";
            });

            // Cambia al siguiente índice
            currentIndex = (currentIndex + 1) % serviceCards.length;
        } else {
            // Si la pantalla es mayor a 360px, muestra todas las tarjetas
            serviceCards.forEach(card => card.style.display = "block");
        }
    }

    // Inicia el intervalo de cambio cada 1.5 segundos
    setInterval(rotateImages, 1500);

    // Ejecuta una vez al cargar para asegurar que la primera tarjeta esté visible
    rotateImages();
});
