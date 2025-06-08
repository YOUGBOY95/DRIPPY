function copyDrippyCode() {
  const code = document.getElementById("drippyCode").textContent;
  const btn = document.querySelector('.copy-btn');
  const copySound = document.getElementById("copySound");

  copySound.currentTime = 0;
  copySound.play().catch(() => {});

  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy", 1500);
  });
}

const video = document.querySelector('video');
document.addEventListener('touchstart', () => {
  video.play().catch(err => console.log("Autoplay error:", err));
}, { once: true });

const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
musicToggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = '🔊';
  } else {
    music.pause();
    musicToggle.textContent = '🔇';
  }
});

document.addEventListener('click', () => {
  if (music.paused) music.play();
}, { once: true });

const burger = document.getElementById('burgerToggle');
const nav = document.getElementById('navButtons');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('show');
});
document.addEventListener('click', (event) => {
  if (!burger.contains(event.target) && !nav.contains(event.target)) {
    burger.classList.remove('open');
    nav.classList.remove('show');
  }
});