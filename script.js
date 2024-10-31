const nav = document.getElementById("header")

window.addEventListener("scroll", () => {
window.scrollY > 100 ? nav.classList.add("scrolled"):
header.classList.remove("scrolled")
})

const hamburger = document.querySelector('.hamburger');
  const links = document.querySelector('.links');

  hamburger.addEventListener('click', () => {
      links.classList.toggle('active');
  });