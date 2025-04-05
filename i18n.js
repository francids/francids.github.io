const translations = {
  es: {
    'nav.profile': 'Perfil',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'profile.description': 'Desarrollador de software enfocado en crear soluciones intuitivas que resuelvan problemas reales. Apasionado por el aprendizaje continuo.',
    'projects.anaquel.description': 'Aplicación de gestión de lectura.',
    'projects.nobase.description': 'Backend fácil y básico en 1 archivo.',
    'projects.productivaMente.description': 'App web para gestión de tareas y notas con Material.',
    'projects.archivosEsenciales.description': 'Convierte y optimiza tus PDF e imágenes.',
    'projects.theRecipes.description': 'Aplicación móvil para almacenar recetas de cocina'
  },
  en: {
    'nav.profile': 'Profile',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'profile.description': 'Software developer focused on creating intuitive solutions that solve real problems. Passionate about continuous learning.',
    'projects.anaquel.description': 'Reading management application.',
    'projects.nobase.description': 'Easy and basic backend in 1 file.',
    'projects.productivaMente.description': 'Web app for task and note management with Material.',
    'projects.archivosEsenciales.description': 'Convert and optimize your PDFs and images.',
    'projects.theRecipes.description': 'Mobile application to store cooking recipes'
  }
};

const supportedLanguages = ['es', 'en'];

function setLanguage(lang) {
  const language = supportedLanguages.includes(lang) ? lang : 'es';

  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  console.log(`Language set: ${language}`);
}

function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage || 'es';
  console.log(`Detected browser language: ${browserLang}`);

  const langCode = browserLang.substring(0, 2).toLowerCase();
  console.log(`Extracted language code: ${langCode}`);

  const detectedLanguage = supportedLanguages.includes(langCode) ? langCode : 'es';
  console.log(`Final detected language: ${detectedLanguage}`);

  return detectedLanguage;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(`Browser languages: ${navigator.languages ? navigator.languages.join(', ') : 'Not available'}`);
  console.log(`Main language: ${navigator.language || navigator.userLanguage}`);

  const detectedLanguage = detectBrowserLanguage();
  setLanguage(detectedLanguage);
});

window.changeLanguage = function (lang) {
  setLanguage(lang);
};
