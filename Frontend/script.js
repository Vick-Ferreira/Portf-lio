
//eventos para timeline + setas
document.addEventListener('DOMContentLoaded', function () {
    const timeline = document.getElementById('timeline');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let scrollAmount = 0;
    // Manipulação de eventos da linha do tempo
    const events = [//obj
      { imgSrc: './img/html.png' },
      { imgSrc: './img/css.png' },
      { imgSrc: './img/bootstrap.png' },
      { imgSrc: './img/sass.png' },
      { imgSrc: './img/js.png' },
      { imgSrc: './img/node.js.png' },
      { imgSrc: './img/react.png' },
      { imgSrc: './img/kotlin.png' },
    ];
    //recuperando dados da const events, e add via js de forma dinâmica
    events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      eventElement.innerHTML = `<img src="${event.imgSrc}">`;
      timeline.appendChild(eventElement);
    });
  
    // Manipulação de setas
    arrowLeft.addEventListener('click', function () {
      scrollAmount -= 200;
      timeline.scrollLeft = scrollAmount;
    });
  
    arrowRight.addEventListener('click', function () {
      scrollAmount += 200;
      timeline.scrollLeft = scrollAmount;
    });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
let currentTheme = "light";//botões de troca de tema
themeToggle.addEventListener("click", () => {
    if (currentTheme === "light") {
      document.body.classList.add("dark-theme");
      themeIcon.classList.remove("bi-moon");
      themeIcon.classList.add("bi-sun");
      currentTheme = "dark";
    } else {
      document.body.classList.remove("dark-theme");
      themeIcon.classList.remove("bi-sun");
      themeIcon.classList.add("bi-moon");
      currentTheme = "light";
    }
});

window.addEventListener("scroll", () => { //fazendo com que o botão suma apos scroll
    console.log("Scrolling:", window.scrollY);
  
    if (window.scrollY > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
});

// evento de clique ao botão para rolar suavemente para o topo
scrollToTopBtn.addEventListener("click", () => {
    console.log("Botão de volta ao topo clicado");
    // Lógica para rolar suavemente para o topo da página
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});
