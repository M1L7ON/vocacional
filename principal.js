
/* =========================================
   ORIENTA FUTURO
   JAVASCRIPT PRINCIPAL
========================================= */


/* =========================================
   1. INICIALIZACIÓN DEL SITIO
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("ORIENTA FUTURO se ha cargado correctamente.");

    actualizarAnio();

    configurarNavegacion();

    configurarDesplazamiento();

    configurarAnimaciones();

});


/* =========================================
   2. ACTUALIZAR AÑO DEL PIE DE PÁGINA
========================================= */

function actualizarAnio() {

    const elementoAnio = document.getElementById("anioActual");

    if (elementoAnio) {

        const anio = new Date().getFullYear();

        elementoAnio.textContent = anio;

    }

}


/* =========================================
   3. CONFIGURAR NAVEGACIÓN
========================================= */

function configurarNavegacion() {

    const enlacesMenu = document.querySelectorAll(".navbar .nav-link");

    const paginaActual = window.location.pathname;

    enlacesMenu.forEach(function (enlace) {

        const destino = enlace.getAttribute("href");

        if (!destino) {
            return;
        }

        enlace.classList.remove("active");

        /*
         * Identifica el enlace de la página actual.
         * En esta primera etapa se utiliza principalmente
         * para la portada index.html.
         */

        if (
            destino === "index.html" &&
            (paginaActual.endsWith("/") || paginaActual.endsWith("/index.html"))
        ) {

            enlace.classList.add("active");

        }

    });

    /*
     * En dispositivos móviles, cerrar el menú
     * después de seleccionar una opción.
     */

    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            const menu = document.getElementById("menuPrincipal");

            if (menu && menu.classList.contains("show")) {

                const instancia = bootstrap.Collapse.getInstance(menu);

                if (instancia) {
                    instancia.hide();
                }

            }

        });

    });

}


/* =========================================
   4. DESPLAZAMIENTO SUAVE
========================================= */

function configurarDesplazamiento() {

    const enlacesInternos = document.querySelectorAll('a[href^="#"]');

    enlacesInternos.forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {

            const identificador = enlace.getAttribute("href");

            if (!identificador || identificador === "#") {
                return;
            }

            const seccion = document.querySelector(identificador);

            if (seccion) {

                evento.preventDefault();

                seccion.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

}


/* =========================================
   5. ANIMACIONES DE LAS TARJETAS
========================================= */

function configurarAnimaciones() {

    const elementos = document.querySelectorAll(
        ".welcome-card, .module-card"
    );

    /*
     * Verificar si el navegador admite IntersectionObserver.
     */

    if (!("IntersectionObserver" in window)) {
        return;
    }

    const observador = new IntersectionObserver(

        function (entradas, observador) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observador.unobserve(entrada.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    elementos.forEach(function (elemento) {

        elemento.classList.add("animar-entrada");

        observador.observe(elemento);

    });

}


/* =========================================
   6. MENSAJE DE COMPROBACIÓN
========================================= */

console.log(
    "%c ORIENTA FUTURO ",
    "background: #16B8AD; color: white; font-size: 16px; font-weight: bold; padding: 8px;"
);

console.log("Herramienta de orientación educativa y vocacional.");
