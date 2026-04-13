document.addEventListener("DOMContentLoaded", function () {

  /* TYPING */
  const textEl = document.getElementById("typing");
  const text = "Hey Shalu Chaudhary ❤️ I made this for you...";
  let i = 0;

  function typing() {
    if (textEl && i < text.length) {
      textEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  typing();

  /* YES BUTTON */
  const yesBtn = document.getElementById("yesBtn");
  if (yesBtn) {
    yesBtn.addEventListener("click", function () {
      nextScreen(4);
      confetti();
    });
  }

  /* NO BUTTON */
  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.addEventListener("mouseenter", function () {
      noBtn.style.position = "absolute";
      noBtn.style.top = Math.random() * window.innerHeight + "px";
      noBtn.style.left = Math.random() * window.innerWidth + "px";
    });
  }

});


/* SCREEN SWITCH */
function nextScreen(current) {
  const currentScreen = document.getElementById(`screen${current}`);
  const nextScreen = document.getElementById(`screen${current + 1}`);

  if (!currentScreen || !nextScreen) return;

  currentScreen.classList.remove("active");
  nextScreen.classList.add("active");

  if (typeof gsap !== "undefined") {
    gsap.from(nextScreen, { opacity: 0, scale: 0.8, duration: 1 });
  }

  const music = document.getElementById("music");
  if (music) {
    music.play().catch(() => {});
  }
}


/* CONFETTI */
function confetti() {
  for (let i = 0; i < 100; i++) {
    let el = document.createElement("div");

    el.style.position = "fixed";
    el.style.width = "8px";
    el.style.height = "8px";
    el.style.background = "pink";

    el.style.top = Math.random() * window.innerHeight + "px";
    el.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(el);

    if (typeof gsap !== "undefined") {
      gsap.to(el, { y: 500, duration: 2, onComplete: () => el.remove() });
    } else {
      setTimeout(() => el.remove(), 2000);
    }
  }
}


/* HEARTS */
const canvas = document.getElementById("hearts");
if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hearts = Array.from({ length: 50 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5,
    speed: Math.random()
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
      ctx.beginPath();
      ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
      ctx.fillStyle = "pink";
      ctx.fill();

      h.y -= h.speed;
      if (h.y < 0) h.y = canvas.height;
    });

    requestAnimationFrame(draw);
  }

  draw();
}