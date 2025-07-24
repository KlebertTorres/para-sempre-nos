const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll("#carousel img");
let index = 0;

function slideShow() {
  index++;
  carousel.style.transition = "transform 0.8s ease";
  carousel.style.transform = `translateX(${-index * (100 / 3)}%)`;

  if (index === slides.length - 3) {
    setTimeout(() => {
      carousel.style.transition = "none";
      index = 0;
      carousel.style.transform = `translateX(0)`;
    }, 800);
  }
    function tocarMusica() {
      const audio = document.getElementById("musica");
      audio.play().then(() => {
        console.log("Música iniciada com sucesso");
      }).catch((error) => {
        console.error("Erro ao tentar tocar a música:", error);
      });
    }
}

setInterval(slideShow, 2500);
