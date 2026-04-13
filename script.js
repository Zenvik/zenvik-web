const translations = {
  es: {
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'hero.eyebrow': 'Soluciones digitales para operación, control y trazabilidad',
    'hero.title': 'Tecnología que convierte los datos operativos en mejores decisiones.',
    'hero.text': 'Zenvik desarrolla herramientas tecnológicas para empresas que necesitan visibilidad, control e información en tiempo real. Combinamos software, dashboards y lógica operativa para crear soluciones adaptadas a cada proceso.',
    'hero.cta1': 'Explorar servicios',
    'hero.cta2': 'Contáctanos',
    'hero.cardTitle': 'Plataformas personalizadas para operaciones reales',
    'hero.cardText': 'Desde captura de datos en campo hasta dashboards web y monitoreo en vivo, Zenvik ayuda a digitalizar procesos con claridad, control y adaptabilidad.',
    'services.label': 'Servicios',
    'services.title': 'Soluciones diseñadas para entornos operativos reales',
    'services.web.title': 'Desarrollo Web Personalizado',
    'services.web.text': 'Diseño y desarrollo de plataformas web a la medida para operaciones internas, flujos de servicio, reportes y procesos digitales específicos de cada negocio.',
    'services.web.li1': 'Interfaces y flujos ajustados a tu operación',
    'services.web.li2': 'Dashboards, reportes y módulos de gestión',
    'services.web.li3': 'Arquitectura web escalable',
    'services.transport.title': 'Tracking GPS y Monitoreo en Tiempo Real',
    'services.transport.text': 'Sistemas de monitoreo GPS en tiempo real para transporte público y flotas operativas, con dashboards dinámicos para supervisión, análisis de rutas y control del personal.',
    'services.transport.li1': 'Visualización GPS en vivo',
    'services.transport.li2': 'Dashboards dinámicos para toma de decisiones',
    'services.transport.li3': 'Control operativo de equipos y recorridos',
    'services.trace.title': 'Trazabilidad para Frigoríficos y Plantas de Proceso',
    'services.trace.text': 'Herramienta integral para capturar, controlar y visualizar en tiempo real la información de animales y productos a lo largo de cada etapa del proceso, fortaleciendo la trazabilidad y el control operativo.',
    'services.trace.li1': 'Plantas de beneficio, desposte y acondicionamiento',
    'services.trace.li2': 'Soporte multiespecie: bovino, porcino, caprino, ovino, avícola y más',
    'services.trace.li3': 'Interfaz web o desktop simple, intuitiva y adaptable',
    'about.label': 'Sobre Zenvik',
    'about.title': 'Diseñada para conectar el software con la operación real.',
    'about.text1': 'Zenvik se enfoca en desarrollar soluciones digitales que ayudan a las organizaciones a monitorear procesos, centralizar información y mejorar el control operativo. Nuestro enfoque es práctico, adaptable y alineado con la realidad de cada cliente.',
    'about.text2': 'Trabajamos en sectores donde la trazabilidad, los dashboards, la visibilidad del proceso y las interfaces inteligentes generan valor medible.',
    'contact.label': 'Contacto',
    'contact.title': '¿Listo para construir una solución alrededor de tu proceso?',
    'contact.text': 'Conversemos sobre tu operación, tu flujo de información y el tipo de sistema que realmente necesita tu equipo.',
    'contact.cta': 'Escríbenos'
  },
  en: {
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Digital solutions for operations, control, and traceability',
    'hero.title': 'Technology that transforms operational data into better decisions.',
    'hero.text': 'Zenvik builds digital tools for organizations that need visibility, control, and real-time information. We combine software, dashboards, and operational logic to create solutions tailored to each process.',
    'hero.cta1': 'Explore services',
    'hero.cta2': 'Contact us',
    'hero.cardTitle': 'Custom platforms for real operations',
    'hero.cardText': 'From field data capture to web dashboards and live monitoring, Zenvik helps organizations digitize processes with clarity, control, and adaptability.',
    'services.label': 'Services',
    'services.title': 'Solutions designed for real operational environments',
    'services.web.title': 'Custom Web Solutions',
    'services.web.text': 'Design and development of tailored web platforms for internal operations, service workflows, reporting, and business-specific digital processes.',
    'services.web.li1': 'Interfaces and workflows aligned with your operation',
    'services.web.li2': 'Dashboards, reports, and management modules',
    'services.web.li3': 'Scalable web architecture',
    'services.transport.title': 'GPS Tracking and Live Monitoring',
    'services.transport.text': 'Real-time GPS monitoring systems for public transportation and operational fleets, with dynamic dashboards for supervision, route analysis, and workforce control.',
    'services.transport.li1': 'Live GPS visibility',
    'services.transport.li2': 'Dynamic dashboards for decision-making',
    'services.transport.li3': 'Operational control of teams and routes',
    'services.trace.title': 'Traceability for Processing Plants',
    'services.trace.text': 'An integrated tool to capture, control, and visualize animal and product information in real time across every processing stage, strengthening traceability and operational control.',
    'services.trace.li1': 'Slaughter, cutting, and conditioning plants',
    'services.trace.li2': 'Multi-species support: bovine, porcine, caprine, ovine, poultry, and more',
    'services.trace.li3': 'Simple, intuitive, and adaptable web or desktop interface',
    'about.label': 'About Zenvik',
    'about.title': 'Built to connect software with real operations.',
    'about.text1': 'Zenvik focuses on developing digital solutions that help organizations monitor processes, centralize information, and improve operational control. Our approach is practical, adaptable, and aligned with each client\'s reality.',
    'about.text2': 'We work in sectors where traceability, dashboards, process visibility, and intelligent interfaces generate measurable value.',
    'contact.label': 'Contact',
    'contact.title': 'Ready to build a solution around your process?',
    'contact.text': 'Let\'s talk about your operation, your information flow, and the kind of system your team actually needs.',
    'contact.cta': 'Get in touch'
  }
};

const toggle = document.getElementById('lang-toggle');
let currentLang = 'es';

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  toggle.textContent = lang === 'es' ? 'EN' : 'ES';
}

toggle.addEventListener('click', () => {
  applyLanguage(currentLang === 'es' ? 'en' : 'es');
});

applyLanguage('es');