/* ==========================================
   SGP-PRO - SCRIPTS INTERACTIVOS
   ========================================== */

// ==================== DATOS DE LOS MÓDULOS ====================
const modulosData = {
    registro: {
        icon: "bi-person-plus-fill",
        title: "Módulo de Registro",
        desc: "Permite a los nuevos estudiantes crear su cuenta de forma segura y validada, capturando todos los datos necesarios para su perfil académico.",
        features: [
            "Validación de correo institucional",
            "Contraseña segura (mayúscula, minúscula, número, 8+ caracteres)",
            "Confirmación de contraseña",
            "Campos: nombre, correo, grado, sección, especialidad y teléfono",
            "Validación de formato de sección (ej. 3-3, A-1)",
            "Asignación automática de 300 horas meta",
            "Prevención de correos duplicados"
        ],
        image: "img/registro_estudiantes.png",          // ✅ CAMBIA ESTO
        imageFallback: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
        caption: "Formulario de registro de estudiante"
    },
    login: {
        icon: "bi-shield-lock-fill",
        title: "Módulo de Inicio de Sesión",
        desc: "Puerta de entrada al sistema. Valida las credenciales y redirige al usuario al panel correspondiente según su rol.",
        features: [
            "Selección de perfil: Estudiante, Tutor o Administrador",
            "Validación de correo electrónico",
            "Verificación de credenciales seguras",
            "Botón para mostrar/ocultar contraseña",
            "Redirección automática al panel según rol",
            "Mensajes claros de error",
            "Control de permisos por rol"
        ],
        image: "img/Inicio_sesion.png",                  // ✅ CAMBIA ESTO
        imageFallback: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600",
        caption: "Pantalla de inicio de sesión"
    },
    estudiante: {
        icon: "bi-mortarboard-fill",
        title: "Módulo de Estudiante",
        desc: "El corazón del sistema. Aquí el estudiante registra sus actividades diarias, visualiza su progreso y gestiona sus bitácoras.",
        features: [
            "Registro de actividades con fecha, descripción, hora entrada y salida",
            "Tabla de bitácoras con scroll horizontal y vertical",
            "Barra de progreso visual con porcentaje de horas completadas",
            "Estados por actividad: Pendiente, Aprobado, Rechazado",
            "Eliminación de registros no validados",
            "Cálculo automático de horas aprobadas",
            "Interfaz intuitiva y amigable"
        ],
        image: "img/estudiante.png",                     // ✅ CAMBIA ESTO
        imageFallback: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
        caption: "Panel del estudiante"
    },
    tutor: {
        icon: "bi-people-fill",
        title: "Módulo de Tutor",
        desc: "Diseñado para los supervisores de práctica. Permite consultar las bitácoras de los estudiantes asignados y dar seguimiento a su avance.",
        features: [
            "Acceso de solo lectura a las bitácoras",
            "Consulta del progreso de horas",
            "Visualización de actividades por estado",
            "Seguimiento del estudiante asignado",
            "Interfaz simplificada y de fácil uso",
            "Próximamente: comentarios y observaciones"
        ],
        image: "img/modulo-tutor.png",                   // ✅ SIN CAMBIOS
        imageFallback: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
        caption: "Panel del tutor"
    },
    admin: {
        icon: "bi-gear-fill",
        title: "Módulo de Administrador",
        desc: "Control total del sistema. El administrador gestiona las bitácoras de todos los estudiantes, aprueba o rechaza actividades y genera reportes oficiales.",
        features: [
            "Visualización completa de todas las bitácoras",
            "Filtros por estado: Todos, Pendientes, Aprobados, Rechazados",
            "Filtros por especialidad: Desarrollo de software, Turismo, Comercio, Salud",
            "Aprobación y rechazo de actividades",
            "Tabla con scroll horizontal y vertical",
            "Generación de Hoja de Control en PDF con formato oficial del INFRAMEN",
            "Datos mostrados: estudiante, correo, fecha, actividad, hora entrada/salida, estado y especialidad"
        ],
        image: "img/administrador.png",                  // ✅ CAMBIA ESTO
        imageFallback: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
        caption: "Panel de administración"
    },
    pdf: {
        icon: "bi-file-earmark-pdf-fill",
        title: "Reportes PDF",
        desc: "Genera automáticamente la Hoja de Control de Prácticas con el formato oficial del INFRAMEN, lista para imprimir y firmar.",
        features: [
            "Formato oficial del INFRAMEN",
            "Incluye logo institucional",
            "Datos completos del estudiante",
            "Tabla con N°, fecha, actividad, hora entrada y salida",
            "Espacios para firmas de coordinador y supervisor",
            "Descarga en un solo clic",
            "Sin costos de impresión"
        ],
        image: "img/modulo-pdf.png",                     // ✅ SIN CAMBIOS
        imageFallback: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600",
        caption: "Hoja de Control generada en PDF"
    }
};

document.addEventListener('DOMContentLoaded', function () {

    // ==================== AOS ====================
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // ==================== NAVBAR SCROLL ====================
    const navbar = document.getElementById('mainNavbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
            backToTop.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            backToTop.classList.remove('visible');
        }
    });

    // ==================== CERRAR MENÚ AL CLIC ====================
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navMenu');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // ==================== CONTADORES ANIMADOS ====================
    const counters = document.querySelectorAll('.counter');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        const heroRect = heroSection.getBoundingClientRect();
        if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCounter();
            });
            countersAnimated = true;
        }
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters();

    // ==================== SCROLL SUAVE ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 90;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    // ==================== MÓDULOS INTERACTIVOS ====================
    const moduleCards = document.querySelectorAll('.module-card');
    const detailIcon = document.getElementById('detailIcon');
    const detailTitle = document.getElementById('detailTitle');
    const detailDesc = document.getElementById('detailDesc');
    const detailFeatures = document.getElementById('detailFeatures');
    const detailImage = document.getElementById('detailImage');
    const detailImageCaption = document.getElementById('detailImageCaption');

    function showModule(moduleKey) {
        const data = modulosData[moduleKey];
        if (!data) return;

        // Actualizar icono
        detailIcon.innerHTML = `<i class="bi ${data.icon}"></i>`;
        
        // Actualizar título y descripción
        detailTitle.textContent = data.title;
        detailDesc.textContent = data.desc;
        
        // Actualizar lista de features
        detailFeatures.innerHTML = data.features
            .map(f => `<li><i class="bi bi-check2-circle"></i> ${f}</li>`)
            .join('');
        
        // Actualizar imagen
        detailImage.src = data.image;
        detailImage.onerror = function() {
            this.src = data.imageFallback;
        };
        detailImage.alt = data.title;
        detailImageCaption.textContent = data.caption;

        // Marcar tarjeta activa
        moduleCards.forEach(card => {
            card.classList.toggle('active', card.dataset.module === moduleKey);
        });

        // Refrescar AOS
        if (typeof AOS !== 'undefined') AOS.refresh();
    }

    moduleCards.forEach(card => {
        card.addEventListener('click', function() {
            const moduleKey = this.dataset.module;
            showModule(moduleKey);
            
            // Scroll hasta el detalle del módulo
            const moduleDetail = document.getElementById('moduleDetail');
            if (moduleDetail) {
                const offsetTop = moduleDetail.offsetTop - 100;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    // Mostrar el primer módulo por defecto
    showModule('registro');

    // ==================== EFECTO PARALLAX SUAVE ====================
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function () {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                const heroBg = heroSection.querySelector('.hero-background');
                if (heroBg) {
                    heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
                }
            }
        });
    }

    // ==================== ANIMACIÓN DE ACORDEÓN FAQ ====================
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(() => AOS.refresh(), 400);
        });
    });

    // ==================== TOOLTIPS BOOTSTRAP ====================
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ==================== MENSAJE EN CONSOLA ====================
    console.log('%c SGP-Pro ', 'background: #FFB800; color: #0B2C5C; font-size: 20px; font-weight: bold; padding: 5px 15px; border-radius: 5px;');
    console.log('%c Sistema de Gestión de Prácticas y Horas Sociales · INFRAMEN ', 'color: #0B2C5C; font-size: 12px;');
    console.log('%c 100% Gratuito · Hecho por estudiantes para estudiantes ', 'color: #00A86B; font-size: 12px; font-weight: bold;');
});

document.querySelectorAll('#menuLateral .menu-lateral-list a').forEach(link => {
    link.addEventListener('click', () => {
        const offcanvas = document.getElementById('menuLateral');
        if (offcanvas) {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
            if (bsOffcanvas) bsOffcanvas.hide();
        }
    });
});