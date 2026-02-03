const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// NO che scappa
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute"
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES che cresce
yesBtn.addEventListener("click", () => {
  let size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (size + 6) + “px”;

  if (size > 80) {
    alert(“OKAY OKAY 😭💖 Sei il mio Valentino!”);
  }
});
