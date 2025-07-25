<script>
  const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll("#carousel img");
  let index = 0;

  function slideShow() {
    index = (index + 1) % slides.length;
    carousel.style.transition = "transform 0.6s ease-in-out";
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }
  function tocarMusica() {
    const audio = document.getElementById("musica");
    audio.play().then(() => {
      console.log("Música iniciada com sucesso");
    }).catch((error) => {
      console.error("Erro ao tentar tocar a música:", error);
    });
  }

  setInterval(slideShow, 3000); // Troca a cada 3 segundos
</script>
