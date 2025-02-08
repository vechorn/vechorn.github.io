document.addEventListener('DOMContentLoaded', function () {
  // Función para traducir la página
  function translatePage(language) {
    const translations = {
      es: {
        
        intro: "Somos un grupo universitario :v, un selecto grupo de aficionados con más ganas de aprender que de dormir… y de la nota, claro e.e. El Grupo 3",
        h2: "La Odisea del Grupo 3: Conquistando Wayra Perú",
        C1: "En un aula silenciosa, el Ingeniero, con su mirada tan intensa, ordenó: 'Formen cuatro grupos de cinco... o algo así'. En ese instante, el aire se volvió denso. Sin hablar, nos levantamos, nos miramos y formamos el Grupo 3, sin saber que estábamos a punto de embarcarnos en una aventura épica.",
        C2: "El desafío: crear Wayra Perú, una página web que no solo debía ser impresionante, sino también alimentada por Inteligencia Artificial y programación. El Proyecto Final no era un simple reto académico, era un monstruo de código esperando para devorarnos. Pero, ¿qué puede asustar a un grupo de universitarios con café y cansancio? Nada.",
        C3: "Mientras Wayra Perú tomaba forma, la IA demostró no ser tan 'inteligente'. Entre errores y códigos que no querían funcionar, el proyecto se transformó en una batalla épica, donde cada avance era una victoria, aunque pequeña.",
        C4: "Aún no entregamos Wayra Perú (el dragón sigue ahí, esperándonos), pero lo que comenzó como un simple proyecto, hoy es nuestra propia saga. Si logramos vencer al Proyecto Final, no solo entregaremos una página, sino una victoria digna de ser recordada... o al menos un aprobado decente.",
        h22: "Conoce a Nuestro Equipo",
        p1: " -Enseñar es iluminar mentes, crear es dar vida a ideas.-",
        p2: " -Cada error es un paso hacia la perfección, una lección camuflada en caos.-",
        p3: "-El silencio de lo no expresado es la semilla de lo que aún no se comprende.-",
        p4: "-En la sombra de la ausencia, se forjan los destinos que nadie ve venir.-",
        p5: "-Forjar en silencio el destino de un imperio, es saber que la grandeza se alcanza con cada sacrificio invisible.-",
  
      },
      en: {
        intro: "We are a university group :v, a select group of amateurs who are more interested in learning than in sleeping... and the grade, of course. e.e. Group 3.",
        h2: "Group 3's Odyssey: Conquering Wayra Peru",
        C1: "In a silent classroom, the engineer, with an intense gaze, orders: “Form four groups of five... or something like that”. At that moment, the air becomes thick. Without speaking, we stand up, look at each other and form group 3, not knowing that we are about to live an epic adventure.",
        C2: "The challenge: to create Wayra Peru, a website that not only had to be impressive, but also powered by Artificial Intelligence and programming. The Final Project was not just an academic challenge, it was a code monster waiting to devour us. But what could scare a group of college students with coffee and fatigue? Nothing.",
        C3: "While Wayra Peru was taking shape, the AI proved to be not so 'smart'. Between errors and codes that did not want to work, the project turned into an epic battle, where each advance was a victory, albeit a small one.",
        C4: "We haven't delivered Wayra Peru yet (the dragon is still there, waiting for us), but what started as a simple project, today is our own saga. If we manage to beat the Final Project, we will not only deliver a page, but a victory worthy of being remembered... or at least a decent pass.",
        h22: "Meet Our Team",
        p1: "“To teach is to enlighten minds, to create is to bring ideas to life.”",
        p2: "“Every mistake is a step towards perfection, a lesson camouflaged in chaos.”",
        p3: "“The silence of the unexpressed is the seed of what is not yet understood.”",
        p4: "“In the shadow of absence, destinies are forged that no one sees coming.”",
        p5: "“To forge in silence the destiny of an empire, is to know that greatness is achieved with every invisible sacrifice.”",
  
      },
      fr: {
        intro: "Nous sommes un groupe universitaire :v, un groupe sélectionné d'amateurs qui ont plus envie d'apprendre que de dormir... et la note, bien sûr. e.e. Groupe 3",
        h2: "L'odyssée du groupe 3 : à la conquête de Wayra Pérou",
        C1: "Dans une salle de classe silencieuse, l'ingénieur, le regard intense, ordonne : « Formez quatre groupes de cinq... ou quelque chose comme ça ». A cet instant, l'air est devenu dense. Sans parler, nous nous levons, nous nous regardons et formons le groupe 3, sans savoir que nous sommes sur le point de vivre une aventure épique.",
        C2: "Le défi : créer Wayra Peru, un site web qui devait non seulement être impressionnant, mais aussi être alimenté par l'intelligence artificielle et la programmation. Le projet final n'était pas seulement un défi académique, c'était un monstre de code qui attendait de nous dévorer. Mais qu'est-ce qui pourrait effrayer un groupe d'étudiants universitaires avec du café et de la fatigue ? Rien.",
        C3: "Alors que Wayra Peru prenait forme, l'IA s'est révélée moins « intelligente ». Entre les bogues et le code qui ne voulait pas fonctionner, le projet s'est transformé en une bataille épique, où chaque avancée était une victoire, même si elle était minime.",
        C4: "Nous n'avons pas encore livré Wayra Peru (le dragon est toujours là, à nous attendre), mais ce qui a commencé comme un simple projet est maintenant notre propre saga. Si nous parvenons à battre le projet final, nous ne livrerons pas seulement une page, mais une victoire digne d'être rappelée... ou au moins une réussite décente.",
        h22: "Rencontrer notre équipe",
        p1: "« Enseigner, c'est éclairer les esprits, créer, c'est donner vie aux idées ».",
        p2: "« Chaque erreur est un pas vers la perfection, une leçon camouflée dans le chaos ».",
        p3: "« Le silence de l'inexprimé est la semence de ce qui n'est pas encore compris ».",
        p4: "« Dans l'ombre de l'absence se forgent des destins que personne ne voit venir ».",
        p5: " « Forger le destin d'un empire en silence, c'est savoir que la grandeur s'accomplit à chaque sacrifice invisible ».",
  
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
