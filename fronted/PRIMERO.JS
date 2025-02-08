const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicatorsContainer = document.querySelector('.indicators');

let currentIndex = 0;

// Crear indicadores dinámicamente
slides.forEach((_, index) => {
  const indicator = document.createElement('div');
  indicator.dataset.index = index;
  if (index === 0) indicator.classList.add('active');
  indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicators div');

function updateSlider(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[index].classList.add('active');
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(currentIndex);
}

// Eventos
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

indicators.forEach(indicator => {
  indicator.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.dataset.index);
    updateSlider(currentIndex);
  });
});

// Cambio automático cada 5 segundos
setInterval(showNextSlide, 5000);

const translation = {
  es: {
    Slogan: "Vive la magia, descubre la esencia",
  },
  en: {
    Slogan: "Live the magic, discover the essence",
  },
  fr: {
    Slogan: "Vivre la magie, découvrir l'essence",
  },
}
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


