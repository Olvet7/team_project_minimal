(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();

var openBtn = document.getElementById('openBtn');
var closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', function () {
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
});

closeBtn.addEventListener('click', function () {
  closeBtn.classList.toggle('hidden');
  openBtn.classList.toggle('hidden');
});

var is_hidden = document.getElementById('is_hidden');
var about_us_anchor = document.getElementById('about_us_anchor');
var our_products_anchor = document.getElementById('our_products_anchor');
var prices_anchor = document.getElementById('prices_anchor');
var bestsellers_anchor = document.getElementById('bestsellers_anchor');
var reviews_anchor = document.getElementById('reviews_anchor');
var contacts_anchor = document.getElementById('contacts_anchor');

about_us_anchor.addEventListener('click', function () {
  is_hidden.classList.toggle('is-hidden');
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
});
our_products_anchor.addEventListener('click', function () {
  is_hidden.classList.toggle('is-hidden');
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
});
prices_anchor.addEventListener('click', function () {
  is_hidden.classList.toggle('is-hidden');
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
});
bestsellers_anchor.addEventListener('click', function () {
  is_hidden.classList.toggle('is-hidden');
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
});
reviews_anchor.addEventListener('click', function () {
  is_hidden.classList.toggle('is-hidden');
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
});
contacts_anchor.addEventListener('click', function () {
  is_hidden.classList.toggle('is-hidden');
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
});