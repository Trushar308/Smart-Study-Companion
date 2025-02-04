document.querySelector(".cta-button").addEventListener("click", function () {
  alert("Thank you for showing interest!");
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    document.querySelector(".cta-button").style.fontSize = "14px";
  } else {
    document.querySelector(".cta-button").style.fontSize = "18px";
  }
});
