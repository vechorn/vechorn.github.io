document.addEventListener('DOMContentLoaded', function () {
    // Función para traducir la página
    function translatePage(language) {
      const translations = {
        es: {
            a1: "INTRODUCCION",
            a2: "CIVILIZACIÓN ANTIGUA",
            a3: "IMPERIO INCA",
            a4: "CONQUISTA ESPAÑOLA",
            a5: "INDEPENDENCIA",
            a6: "CONTEMPORANEO",
            a7: "LINEA DE TIEMPO",
            h21: "1. Introducción",
            p1: "Desde las misteriosas Líneas de Nazca hasta la majestuosidad de Machu Picchu, Perú guarda los secretos de civilizaciones que dejaron huellas eternas. Explora cómo nuestro pasado define nuestra rica cultura hoy.",
            h22: "2. Civilizaciones Antiguas",
            p2: "Culturas fascinantes que nos dejaron un legado en arte, cerámica y tecnología.",
            strong1: "Chavín, Nazca y Moche:",

          
        },
        en: {
            a1: "INTRODUCTION",
            a2: "CIVILISATION ANCIENNE",
            a3: "INCA EMPIRE",
            a4: "SPANISH CONQUEST",
            a5: "INDEPENDENCE",
            a6: "CONTEMPORAIN",
            a7: "TIMELINE",
            h21: "1. Introduction",
            p1: "From the mysterious Nazca Lines to the majesty of Machu Picchu, Peru holds the secrets of civilizations that left eternal traces. Explore how our past defines our rich culture today.",
            h22: "2. Civilisation Ancienne",
            
            p2: "Fascinating cultures that left us a legacy in art, ceramics and technology.",
            strong1: "Chavín, Nazca and Moche:",
        },
        fr: {
            a1: "INTRODUCTION",
            a2: "ANCIENT CIVILIZATION",
            a3: "IMPERIO INCA",
            a4: "CONQUÊTE ESPAGNOLE",
            a5: "INDEPENDANCE",
            a6: "CONTEMPORARY",
            a7: "CALENDRIER",
            h21: "1. introduction",
            p1: "Des mystérieuses lignes de Nazca à la majesté du Machu Picchu, le Pérou renferme les secrets de civilisations qui ont laissé des empreintes éternelles. Découvrez comment notre passé définit notre riche culture d'aujourd'hui.",
            h22: "2. Ancient Civilization",
            p2: "Chavín, Nazca et Moche : Des cultures fascinantes qui nous ont laissé un héritage d'art, de céramique et de technologie.",
            
    
        }
      };
  
      // Cambiar el contenido de los elementos con data-translate
      document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[language] && translations[language][key]) {
          element.textContent = translations[language][key];
        }
      });
    }
  
    // Comprobamos si hay un idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es'; // Por defecto español
    translatePage(savedLanguage);
  
    // Establecer el valor del select al idioma guardado
    const languageSelect = document.querySelector(".translator select");
    if (languageSelect) {
      languageSelect.value = savedLanguage;
      languageSelect.addEventListener("change", function (event) {
        const selectedLanguage = event.target.value;
        // Guardamos el idioma seleccionado en localStorage
        localStorage.setItem('selectedLanguage', selectedLanguage);
        translatePage(selectedLanguage);
      });
    }
  });
  
  window.addEventListener('load', function () {
    document.querySelectorAll('strong').forEach(el => {
        el.style.fontWeight = 'bold'; // Restablecer estilo
    });
});
