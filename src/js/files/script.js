// Подключение функционала "Чертогов Фрилансера"
import {
  isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
  flsModules
} from "./modules.js";

// Скрипт дропдаун меню

window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classlist.contains('menu__arrow')) {
        targetElement.closest('.menu__item').classlist.toggle('_hover');
      }
    }
  }
}


new Typewriter('#typewriter', {
  strings: [
    "Разработкой, версткой сайтов, лендингов",
    "Написанием кода на JS и PHP"
  ],
  autoStart: true,
  loop: true,
  deleteSpeed: 80
});

// Подключение настроек tsparticles.js 

particlesJS("tsparticles", {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 1500
      }
    },
    size: {
      value: 1
    },
    opacity: {
      anim: {
        enable: true,
        speed: 5,
        opacity_min: 0.05
      }
    },
    line_linked: {
      enable: false,
      opacity: 0.03
    },
    move: {
      speed: 0.05,
      direction: "right"
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      push: {
        particles_nb: 1
      }
    }
  },
  retina_detect: true
});