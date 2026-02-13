const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "No es momento de mimi, aun no xD ​​";
  gif.src = "img/foto.png";
  // Cambiar el tamaño con JavaScript
  gif.style.width = "300px";
  gif.style.height = "auto"; // Para mantener la proporción
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


document.addEventListener('click', () => {
    const audio = document.getElementById('myAudio');
    if (audio.muted) {
      audio.muted = false; // Desactiva el silencio
    audio.play();
    }
});
