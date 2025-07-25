<script>
 function scrollCarousel(direction) {
  const container = document.querySelector('.carousel-container');
  const itemWidth = container.querySelector('img').offsetWidth + 15; // largura + gap
  container.scrollBy({
    left: direction * itemWidth,
    behavior: 'smooth'
  });
}

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
