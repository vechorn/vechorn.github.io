document.addEventListener('DOMContentLoaded', function () {
  // Función para traducir la página
  function translatePage(language) {
    const translations = {
      es: {
        div: "CALENDARIO",
        h2: "Festividades Religiosas",
        th1: "Fecha",
        th2: "Evento",
        th3: "Lugar Principal",
        th4: "Descripción",
        td1: "Todo el país",
        td2: "Celebración religiosa que marca el final de la temporada navideña.",
        td3: "Festividad en honor a San Sebastián con danzas y música tradicional.",
        td4: "Procesiones y celebraciones religiosas que reúnen a diversas comunidades.",
        td5: "Una de las procesiones más grandes de Sudamérica en honor al Señor de los Milagros.",
        td6: "Antigua ceremonia incaica en honor al dios Sol.",
        td7: "El día de la fundación de la ciudad por parte de los españoles.",
        td8: "se organizan varios eventos musicales.",
        td9: "Celebra la independencia del Perú con desfiles y eventos culturales.",
        td10: "Conmemoración de la batalla naval durante la Guerra del Pacífico.",
        td11: "Se adornan las calles de flores y hay un desfile de carruajes donde hay una reina de la primavera.",
        td12: "se organizan pasacalles, comparsas, eventos infantiles, actuaciones de artistas nacionales e internacionales y fuegos artificiales.",
        td13: "Celebración con desfiles, música y platos típicos de la región.",
        td14: "Festival que combina danzas, música y gastronomía local.",
        td15: "Feria gastronómica que reúne lo mejor de la cocina peruana.",
        td01: "6 de enero",
        td02: "20 de enero",
        td03: "Junio",
        td04: "18 de octubre",
        td05: "24 de junio",
        td06: "21 de enero",
        td07: "31 de octubre",
        td08: "28 y 29 de julio",
        td09: "25-30 de Septiembre",
        td010: "8 de octubre",
        td011: "1-14 de enero",
        td012: "Febrero",
        td013: "Julio",
        td014: "Septiembre",
        h22: "Festividades Históricas",
        h222: "Festividades Gastronómicas",
        
      },
      en: {
        div: "CALENDAR",
        h2: "Religious Holidays",
        th1: "Date",
        th2: "Event",
        th3: "Main Location",
        th4: "Description",
        td1: "All the country",
        td2: "Religious celebration that marks the end of the Christmas season.",
        td3: "Festivity in honor of San Sebastian with dances and traditional music.",
        td4: "Processions and religious celebrations that bring together diverse communities.",
        td5: "One of the largest processions in South America in honor of the Lord of Miracles.",
        td6: "Ancient Inca ceremony in honor of the Sun God.",
        td7: "The day of the foundation of the city by the Spaniards.",
        td8: "various musical events are organized.",
        td9: "Celebrate Peru's independence with parades and cultural events.",
        td10: "Commemoration of the naval battle during the War of the Pacific.",
        td11: "The streets are decorated with flowers and there is a parade of carriages where there is a spring queen.",
        td12: "parades, comparsas, children's events, performances by national and international artists and fireworks are organized.",
        td13: "Celebration with parades, music and typical dishes of the region.",
        td14: "Festival that combines dances, music and local gastronomy.",
        td15: "Gastronomic fair that brings together the best of Peruvian cuisine.",
        td01: "January 6th",
        td02: "January 20th",
        td03: "June",
        td04: "October 18th",
        td05: "June 24th",
        td06: "January 21th",
        td07: "October 31th",
        td08: "July 28th and 29th",
        td09: "September 25th-30th",
        td010: "October 8th",
        td011: "January 1th-14th",
        td012: "February",
        td013: "July",
        td014: "September",
        h22: "Historical Festivities",
        h222: "Gastronomic Festivities",
        
  
      },
      fr: {
        div: "CALENDRIER",
        h2: "Fêtes religieuses",
        th1: "Date",
        th2: "Événement",
        th3: "Lieu principal",
        th4: "Description",
        td1: "Tout le pays",
        td2: "Célébration religieuse marquant la fin de la période de Noël.",
        td3: "Fête en l'honneur de San Sebastián avec des danses et de la musique traditionnelles.",
        td4: "Processions et célébrations religieuses qui rassemblent diverses communautés.",
        td5: "L'une des plus grandes processions d'Amérique du Sud en l'honneur du Señor de los Milagros.",
        td6: "Ancienne cérémonie inca en l'honneur du dieu Soleil.",
        td7: "Jour de la fondation de la ville par les Espagnols.",
        td8: "divers événements musicaux sont organisés.",
        td9: "Célébrez l'indépendance du Pérou avec des défilés et des événements culturels.",
        td10: "Commémoration de la bataille navale pendant la guerre du Pacifique.",
        td11: "Les rues sont décorées de fleurs et il y a un défilé de calèches avec une reine du printemps.",
        td12: "Des parades, des comparsas, des événements pour enfants, des spectacles d'artistes nationaux et internationaux et des feux d'artifice sont organisés.",
        td13: "Célébration avec des parades, de la musique et des plats régionaux typiques.",
        td14: "Festival qui allie la danse, la musique et la gastronomie locale.",
        td15: "Foire gastronomique réunissant le meilleur de la cuisine péruvienne.",
        td01: "6 janvier",
        td02: "20 janvier",
        td03: "Juin",
        td04: "18 octobre",
        td05: "24 juin",
        td06: "21 janvier",
        td07: "31 octobre",
        td08: "28 et 29 juillet",
        td09: "25-30 septembre",
        td010: "8 octobre",
        td011: "Du 1er au 14 janvier",
        td012: "Février",
        td013: "Juillet",
        td014: "Septembre",
        h22: "Festivités historiques",
        h222: "Fêtes gastronomiques",
  
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
