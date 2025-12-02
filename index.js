document.querySelector(".Resume").addEventListener("click", function () {
  document.querySelector(".me").style.display = "none";
  document.querySelector(".Me").style.backgroundColor = "#f5f5f5";
  //   document.querySelector(".faAngleRight").style.fontSize = "18px";
  document.querySelector(".resume").style.display = "block";
  document.querySelector(".Resume").style.backgroundColor = "pink";
});

document.querySelector(".Me").addEventListener("click", () => {
  document.querySelector(".me").style.display = "block";
  document.querySelector(".Me").style.backgroundColor = "pink";
  document.querySelector(".resume").style.display = "none";
  document.querySelector(".Resume").style.backgroundColor = "#f5f5f5";
});
