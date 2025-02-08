    // Agregar clase "scrolled" al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.site-header');
        header.classList.toggle('scrolled', window.scrollY > 50);
      });

    // Traducciones de la página
  const translations = {
    es: {
      Destinos: "Destinos",
      Viaje: "Viaje",
      Transporte: "Transporte",
      Comida: "Comida",
      Compras: "Compras",
      Peru: "Perú",
      Informacionrelevante: "Información relevante",
      Datoscuriosos: "Datos curiosos",
      Historiadelperu: "Historia del Perú",
      Extra: "Extra",
      Noticias: "Noticias",
      Calendario: "Calendario",
      ExploraelPerúconestiloyautenticidad: "Explora el Perú con estilo y autenticidad.",
      Otros: "Otros",
      Entrada: "Entrada",
      quienessomos: "¿Quiénes somos?",
      Creditos: "Créditos",
      Contactanos: "Contáctanos",
      Todoslosderechosreservados: "© 2025 WAYRA PERÚ. Todos los derechos reservados.",
      Slogan: "Vive la magia, descubre la esencia",
    },
    en: {
      Destinos: "Destinations",
      Viaje: "Travel",
      Transporte: "Transportation",
      Comida: "Food",
      Compras: "Shopping",
      Peru: "Peru",
      Informacionrelevante: "Relevant information",
      Datoscuriosos: "Curious data",
      Historiadelperu: "History of Peru",
      Extra: "Extra",
      Noticias: "News",
      Calendario: "Calendar",
      ExploraelPerúconestiloyautenticidad: "Explore Peru with style and authenticity.",
      Otros: "Others",
      Entrada: "Entrance",
      quienessomos: "Who are we?",
      Creditos: "Credits",
      Contactanos: "Contact us at",
      Todoslosderechosreservados: "© 2025 WAYRA PERÚ. All rights reserved.",
      Slogan: "Live the magic, discover the essence",
    },
    fr: {
      Destinos: "Destinations",
      Viaje: "Voyage",
      Transporte: "Transport",
      Comida: "Alimentation",
      Compras: "Achats",
      Peru: "Pérou",
      Informacionrelevante: "Informations pertinentes",
      Datoscuriosos: "Faits amusants",
      Historiadelperu: "Histoire du Pérou",
      Extra: "Extra",
      Noticias: "Actualités",
      Calendario: "Calendrier",
      ExploraelPerúconestiloyautenticidad: "Explorez le Pérou avec style et authenticité.",
      Otros: "Autres",
      Entrada: "Entrée",
      quienessomos: "Qui sommes-nous ?",
      Creditos: "Crédits",
      Contactanos: "Contactez-nous à",
      Todoslosderechosreservados: "© 2025 WAYRA PERÚ. Tous droits réservés.",
      Slogan: "Vivre la magie, découvrir l'essence",
    },
  };

  // Función para traducir la página
  function translatePage(language) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });
  }

  // Función para manejar el cambio de idioma
  function handleLanguageChange(event) {
    const selectedLanguage = event.target.value;
    // Guardamos el idioma seleccionado en el localStorage
    localStorage.setItem('selectedLanguage', selectedLanguage);
    translatePage(selectedLanguage);
  }

  // Evento de carga del documento
  document.addEventListener('DOMContentLoaded', () => {
    // Comprobamos si hay un idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es'; // Por defecto español
    translatePage(savedLanguage);

    // Establecemos el valor del select al idioma guardado
    const languageSelect = document.querySelector(".translator select");
    if (languageSelect) {
      languageSelect.value = savedLanguage;
      languageSelect.addEventListener("change", handleLanguageChange);
    }
  });

  