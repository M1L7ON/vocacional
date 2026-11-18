
document.addEventListener("DOMContentLoaded", () => {

    const parametros = new URLSearchParams(window.location.search);
    const area = parametros.get("area");

    const listaFacultades = document.getElementById("listaFacultades");
    const resultadoArea = document.getElementById("resultadoArea");
    const buscador = document.getElementById("buscarFacultad");
    const sinResultados = document.getElementById("sinResultados");

    const carrerasPorArea = {

        tecnologia: {
            titulo: "Tecnología e Informática",
            descripcion: "Conoce las carreras universitarias de la UTO relacionadas con el desarrollo de sistemas, software, informática y soluciones tecnológicas.",
            facultad: "Facultad Nacional de Ingeniería",
            sigla: "FNI",
            carreras: [
                {
                    nombre: "Ingeniería de Sistemas",
                    descripcion: "Forma profesionales capaces de analizar, diseñar, desarrollar y administrar sistemas de información y soluciones para las organizaciones.",
                    campo: "Sistemas de información, gestión de proyectos, bases de datos, análisis de sistemas y administración tecnológica.",
                    url: "https://www.sisinf.fni.uto.edu.bo/sistemas/"
                },
                {
                    nombre: "Ingeniería Informática",
                    descripcion: "Forma profesionales capaces de analizar, diseñar, implementar e innovar servicios y soluciones informáticas.",
                    campo: "Desarrollo de software, aplicaciones, servicios informáticos, gestión de información y soluciones digitales.",
                    url: "https://www.sisinf.fni.uto.edu.bo/informatica/"
                }
            ]
        },
//SALUD Y BIENESTAR
salud: {
        titulo: "Salud y Bienestar",

        descripcion: "Explora las alternativas de formación universitaria de la UTO relacionadas con el cuidado de la salud, la prevención de enfermedades, la atención de pacientes y el bienestar de las personas.",

        facultad: "Facultad de Ciencias de la Salud",
        sigla: "FCS",

        carreras: [
            {
                nombre: "Medicina General",

                descripcion: "Forma profesionales preparados para evaluar, diagnosticar, prevenir y tratar enfermedades, contribuyendo al cuidado integral de la salud de las personas.",

                campo: "Atención médica, centros de salud, hospitales, prevención de enfermedades y promoción de la salud.",

                url: "https://www.uto.edu.bo/facultad-de-ciencias-de-la-salud/"
            },

            {
                nombre: "Enfermería",

                descripcion: "Forma profesionales dedicados al cuidado integral de las personas, familias y comunidades, participando en la promoción, prevención y recuperación de la salud.",

                campo: "Atención de pacientes, hospitales, centros de salud, programas de prevención y educación sanitaria.",

                url: "https://www.uto.edu.bo/facultad-de-ciencias-de-la-salud/"
            },

            {
                nombre: "Odontología",

                descripcion: "Se orienta al cuidado de la salud bucal mediante acciones de prevención, diagnóstico y tratamiento de problemas relacionados con los dientes y la cavidad oral.",

                campo: "Consultorios odontológicos, clínicas, atención preventiva y servicios de salud bucodental.",

                url: "https://www.uto.edu.bo/facultad-de-ciencias-de-la-salud/"
            },

            {
                nombre: "Nutrición y Dietética",

                descripcion: "Se relaciona con la alimentación, la nutrición y la promoción de hábitos alimentarios saludables para mejorar la calidad de vida.",

                campo: "Evaluación nutricional, educación alimentaria, programas de nutrición y orientación dietética.",

                url: "https://www.uto.edu.bo/facultad-de-ciencias-de-la-salud/"
            },

            {
                nombre: "Atención Temprana y Educación",

                descripcion: "Está orientada a la atención y acompañamiento del desarrollo infantil durante las primeras etapas de la vida, favoreciendo el aprendizaje y el bienestar.",

                campo: "Atención infantil, estimulación temprana, acompañamiento educativo y apoyo al desarrollo integral.",

                url: "https://www.uto.edu.bo/facultad-de-ciencias-de-la-salud/"
            }
        ]
    }

        ,

        // ADMINISTRACIÓN Y NEGOCIOS
        administracion: {

            titulo: "Administración y Negocios",

            descripcion: "Explora las carreras universitarias relacionadas con la administración de empresas, economía, contabilidad, finanzas, comercio y gestión de negocios.",

            facultad: "Facultad de Ciencias Económicas, Financieras y Administrativas",

            sigla: "FCEFA",

            carreras: [

                {
                    nombre: "Administración de Empresas",

                    descripcion: "Forma profesionales capaces de planificar, organizar, dirigir y controlar los recursos de una organización para alcanzar sus objetivos.",

                    campo: "Gestión empresarial, recursos humanos, planificación estratégica, emprendimientos y dirección de organizaciones.",

                    url: "https://www.uto.edu.bo/facultad-de-ciencias-economicas-financieras-y-administrativas/"
                },

                {
                    nombre: "Economía",

                    descripcion: "Estudia la producción, distribución y consumo de bienes y servicios, así como el funcionamiento de los mercados y la economía.",

                    campo: "Análisis económico, investigación, políticas económicas, mercados y desarrollo económico.",

                    url: "https://www.uto.edu.bo/facultad-de-ciencias-economicas-financieras-y-administrativas/"
                },

                {
                    nombre: "Ingeniería Comercial",

                    descripcion: "Integra conocimientos de administración, economía y comercialización para desarrollar soluciones en el ámbito empresarial.",

                    campo: "Gestión comercial, marketing, investigación de mercados, ventas y planificación de negocios.",

                    url: "https://www.uto.edu.bo/facultad-de-ciencias-economicas-financieras-y-administrativas/"
                },

                {
                    nombre: "Contaduría Pública",

                    descripcion: "Forma profesionales capaces de gestionar información contable, elaborar estados financieros y realizar auditorías.",

                    campo: "Contabilidad, auditoría, tributación, análisis financiero y asesoramiento contable.",

                    url: "https://www.uto.edu.bo/facultad-de-ciencias-economicas-financieras-y-administrativas/"
                },

                {
                    nombre: "Administración Financiera",

                    descripcion: "Se orienta a la planificación, organización y administración de los recursos financieros de empresas e instituciones.",

                    campo: "Finanzas, presupuestos, inversiones, análisis financiero y gestión de recursos económicos.",

                    url: "https://www.uto.edu.bo/facultad-de-ciencias-economicas-financieras-y-administrativas/"
                },

                {
                    nombre: "Comercio Internacional",

                    descripcion: "Estudia las operaciones comerciales entre países, los procesos de importación, exportación y las relaciones comerciales internacionales.",

                    campo: "Comercio exterior, logística internacional, importaciones, exportaciones y aduanas.",

                    url: "https://www.uto.edu.bo/facultad-de-ciencias-economicas-financieras-y-administrativas/"
                },

                {
                    nombre: "Marketing y Publicidad",

                    descripcion: "Se enfoca en investigar mercados, comprender las necesidades de los consumidores y desarrollar estrategias de promoción y posicionamiento.",

                    campo: "Marketing, publicidad, investigación de mercados, comunicación comercial y estrategias digitales.",

                    url: "https://www.uto.edu.bo/facultad-de-ciencias-economicas-financieras-y-administrativas/"
                }

            ]
        }

        ,

        // EDUCACIÓN Y ÁREA SOCIAL
        educacion: {

            titulo: "Educación y Área Social",

            descripcion: "Explora alternativas de formación profesional relacionadas con el comportamiento humano, la comunicación, la cultura, la justicia, el desarrollo social y la gestión pública.",

            facultad: "Facultad de Derecho, Ciencias Políticas y Sociales",

            sigla: "FDCPS",

            carreras: [

                {
                    nombre: "Psicología",

                    descripcion: "Forma profesionales orientados al estudio del comportamiento humano y los procesos mentales, capaces de comprender y abordar diferentes necesidades psicológicas.",

                    campo: "Psicología educativa, organizacional, clínica, investigación y orientación psicológica.",

                    url: "https://www.fdcps.uto.edu.bo/"
                },

                {
                    nombre: "Trabajo Social",

                    descripcion: "Forma profesionales capaces de investigar problemáticas sociales, acompañar a personas y comunidades y promover mejores condiciones de vida.",

                    campo: "Intervención comunitaria, bienestar social, proyectos sociales, instituciones públicas y organizaciones sociales.",

                    url: "https://www.fdcps.uto.edu.bo/carrera-de-trabajo-social/"
                },

                {
                    nombre: "Antropología",

                    descripcion: "Estudia las sociedades, culturas, formas de organización y diversidad humana, contribuyendo a comprender las realidades sociales.",

                    campo: "Investigación sociocultural, patrimonio cultural, desarrollo comunitario y estudios sociales.",

                    url: "https://www.fdcps.uto.edu.bo/"
                },

                {
                    nombre: "Ciencias de la Comunicación Social",

                    descripcion: "Forma profesionales capaces de investigar, producir y gestionar procesos comunicacionales en medios de comunicación y diferentes instituciones.",

                    campo: "Periodismo, producción audiovisual, comunicación institucional, medios digitales y relaciones públicas.",

                    url: "https://www.fdcps.uto.edu.bo/"
                },

                {
                    nombre: "Ciencia Política y Gestión Pública",

                    descripcion: "Se orienta al estudio de los sistemas políticos, las instituciones públicas, las políticas gubernamentales y los procesos de gestión estatal.",

                    campo: "Administración pública, análisis político, gestión gubernamental, políticas públicas e investigación social.",

                    url: "https://www.fdcps.uto.edu.bo/"
                },

                {
                    nombre: "Derecho",

                    descripcion: "Forma profesionales preparados para interpretar y aplicar las normas jurídicas, defender derechos y contribuir a la administración de justicia.",

                    campo: "Asesoramiento jurídico, instituciones judiciales, derecho público, derecho privado y ejercicio profesional independiente.",

                    url: "https://www.fdcps.uto.edu.bo/"
                }

            ]
        }

        ,

        // INDUSTRIA Y TECNOLOGÍA TÉCNICA
        industria: {

            titulo: "Industria y Tecnología Técnica",

            descripcion: "Descubre alternativas de formación técnica y tecnológica relacionadas con la industria, la construcción, la electricidad, la mecánica, la maquinaria y los procesos químicos.",

            facultad: "Facultad Técnica",

            sigla: "FT",

            carreras: [

                {
                    nombre: "Construcciones Civiles",

                    descripcion: "Forma profesionales técnicos preparados para participar en la ejecución, supervisión y control de proyectos de construcción e infraestructura.",

                    campo: "Obras civiles, construcción de edificaciones, supervisión de obras, interpretación de planos y proyectos de infraestructura.",

                    url: "https://www.ft.uto.edu.bo/"
                },

                {
                    nombre: "Electricidad Industrial",

                    descripcion: "Se orienta a la instalación, operación, mantenimiento y reparación de sistemas eléctricos utilizados en instalaciones industriales.",

                    campo: "Instalaciones eléctricas industriales, mantenimiento de motores, sistemas de control y equipos eléctricos.",

                    url: "https://www.ft.uto.edu.bo/"
                },

                {
                    nombre: "Mantenimiento de Equipo Pesado",

                    descripcion: "Se relaciona con el diagnóstico, mantenimiento y reparación de maquinaria pesada utilizada en actividades industriales, mineras y de construcción.",

                    campo: "Maquinaria pesada, mantenimiento mecánico, sistemas hidráulicos, motores y equipos de trabajo pesado.",

                    url: "https://www.ft.uto.edu.bo/"
                },

                {
                    nombre: "Maquinaria Agrícola Industrial",

                    descripcion: "Está orientada al conocimiento, operación y mantenimiento de maquinaria utilizada en actividades agrícolas y productivas.",

                    campo: "Maquinaria agrícola, equipos de producción, mantenimiento técnico y mecanización agrícola.",

                    url: "https://www.ft.uto.edu.bo/"
                },

                {
                    nombre: "Mecánica Automotriz",

                    descripcion: "Forma profesionales técnicos capaces de diagnosticar, mantener y reparar diferentes sistemas que componen los vehículos automotores.",

                    campo: "Motores, sistemas de transmisión, sistemas eléctricos automotrices, diagnóstico y mantenimiento vehicular.",

                    url: "https://www.ft.uto.edu.bo/"
                },

                {
                    nombre: "Mecánica Industrial",

                    descripcion: "Se orienta a la fabricación, instalación, operación y mantenimiento de máquinas, herramientas y equipos utilizados en la industria.",

                    campo: "Mantenimiento industrial, máquinas herramientas, procesos de fabricación y montaje de equipos.",

                    url: "https://www.ft.uto.edu.bo/"
                },

                {
                    nombre: "Química Industrial",

                    descripcion: "Forma profesionales técnicos preparados para participar en procesos químicos industriales, análisis de materiales y control de calidad.",

                    campo: "Laboratorios industriales, análisis químico, procesos productivos, control de calidad y transformación de materias primas.",

                    url: "https://www.ft.uto.edu.bo/"
                }

            ]
        }

        ,

        // ARTE Y COMUNICACIÓN
        arte: {

            titulo: "Arte y Comunicación",

            descripcion: "Explora alternativas de formación universitaria relacionadas con el diseño de espacios, la creatividad, la expresión visual, la comunicación, el periodismo y la producción audiovisual.",

            facultad: "Facultades de Arquitectura y Urbanismo y de Derecho, Ciencias Políticas y Sociales",

            sigla: "FAU / FDCPS",

            carreras: [

                {
                    nombre: "Arquitectura",

                    descripcion: "Forma profesionales capaces de proyectar, diseñar y planificar espacios arquitectónicos y urbanos, considerando aspectos funcionales, estéticos, tecnológicos y sociales.",

                    campo: "Diseño arquitectónico, urbanismo, planificación territorial, construcción, representación gráfica y gestión de proyectos.",

                    url: "https://www.uto.edu.bo/facultad-arquitectura-y-urbanismo/"
                },

                {
                    nombre: "Ciencias de la Comunicación Social",

                    descripcion: "Forma profesionales capaces de investigar, producir y gestionar procesos de comunicación en medios de comunicación, instituciones y diferentes espacios sociales.",

                    campo: "Periodismo, producción audiovisual, comunicación institucional, medios digitales, investigación y relaciones públicas.",

                    url: "https://www.uto.edu.bo/facultad-de-derecho-ciencias-politicas-y-sociales/"
                }

            ]
        }

};

    // Si se seleccionó un área
    if (area && carrerasPorArea[area]) {

        mostrarCarreras(carrerasPorArea[area]);

    }

    function mostrarCarreras(datos) {

        // Ocultar las siete facultades
        listaFacultades.classList.add("d-none");

        // Mostrar los resultados del área
        resultadoArea.classList.remove("d-none");

        // Cambiar el encabezado
        const encabezado = document.querySelector(".encabezado-facultades");

        encabezado.innerHTML = `
            <span class="subtitulo-seccion">RESULTADOS DE TU EXPLORACIÓN</span>

            <h2>${datos.titulo}</h2>

            <p>${datos.descripcion}</p>

            <div class="mt-3">
                <span class="badge text-bg-light border">
                    ${datos.facultad} (${datos.sigla})
                </span>
            </div>
        `;

        // Crear las tarjetas de carreras
        resultadoArea.innerHTML = `
            <div class="row g-4">

                ${datos.carreras.map(carrera => `

                    <div class="col-md-6">

                        <article class="carrera-resultado-card">

                            <div class="carrera-resultado-icono">
                                <i class="bi bi-laptop"></i>
                            </div>

                            <span class="facultad-numero">
                                ${datos.sigla} | UTO
                            </span>

                            <h3>${carrera.nombre}</h3>

                            <p>${carrera.descripcion}</p>

                            <h4>Campo de formación</h4>

                            <p>${carrera.campo}</p>

                            <a href="${carrera.url}"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="btn-carrera-oficial">

                                Conocer carrera
                                <i class="bi bi-box-arrow-up-right"></i>

                            </a>

                        </article>

                    </div>

                `).join("")}

            </div>

            <div class="text-center mt-4">

                <a href="conozco-carreras.html" class="btn-volver-facultades">
                    <i class="bi bi-arrow-left me-2"></i>
                    Ver las siete facultades
                </a>

            </div>
        `;

    }

    // Buscador del catálogo general
    if (buscador) {

        buscador.addEventListener("input", function () {

            // Si estamos viendo un área filtrada,
            // no aplicar el buscador general todavía.
            if (area && carrerasPorArea[area]) {
                return;
            }

            const texto = this.value.toLowerCase().trim();

            const facultades = document.querySelectorAll(".facultad-item");

            let encontrados = 0;

            facultades.forEach(facultad => {

                const contenido = facultad.textContent.toLowerCase();

                if (contenido.includes(texto)) {

                    facultad.classList.remove("d-none");
                    encontrados++;

                } else {

                    facultad.classList.add("d-none");

                }

            });

            if (sinResultados) {
                sinResultados.classList.toggle("d-none", encontrados > 0);
            }

        });

    }

});
