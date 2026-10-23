<script>
  const images = [
    "/assets/img/ntm0.jpg",
    "/assets/img/ntm1.jpg",
    "/assets/img/ntm2.jpg",
    "/assets/img/ntm3.jpg",
    "/assets/img/ntm4.jpg",
    "/assets/img/ntm5.jpg"
  ];
  const img = images[Math.floor(Math.random() * images.length)];
  document.getElementById("hero").src = img;
</script>
<img id="hero">