document.querySelector(".Resume").addEventListener("click", function () {
  document.querySelector(".me").style.display = "none";
  document.querySelector(".Me").style.backgroundColor = "#f5f5f5";
  document.querySelector(".resume").style.display = "block";
  document.querySelector(".Resume").style.backgroundColor = "pink";
});

document.querySelector(".Me").addEventListener("click", () => {
  document.querySelector(".me").style.display = "block";
  document.querySelector(".Me").style.backgroundColor = "pink";
  document.querySelector(".resume").style.display = "none";
  document.querySelector(".Resume").style.backgroundColor = "#f5f5f5";
});

document.querySelector(".mobresume").addEventListener("click", function () {
  document.querySelector(".mobresume").style.fontSize = "16px";
  document.querySelector(".mobresume").style.color = "pink";
  document.querySelector(".act").style.fontSaize = "12px";
  document.querySelector(".act").style.color = "block";
  document.querySelector(".mobprogram").style.fontSaize = "12px";
  document.querySelector(".me").style.display = "none";
  document.querySelector(".resume").style.display = "block";
});
document.querySelector(".act").addEventListener("click", function () {
  document.querySelector(".act").style.fontSaize = "16px";
  document.querySelector(".mobresume").style.fontSize = "12px";
  document.querySelector(".mobprogram").style.fontSaize = "12px";
  document.querySelector(".resume").style.display = "none";
  document.querySelector(".me").style.display = "block";
});

document.querySelector(".mobprogram").addEventListener("click", () => {
  document.querySelector(".act").style.fontSaize = "12px";
  document.querySelector(".mobresume").style.fontSize = "12px";
  document.querySelector(".mobprogram").style.fontSaize = "16px";
  document.querySelector(".resume").style.display = "none";
  document.querySelector(".me").style.display = "none";
});
