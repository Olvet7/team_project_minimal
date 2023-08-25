var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function () {
  openBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  closeBtn.classList.add("hidden");
  openBtn.classList.remove("hidden");
});
