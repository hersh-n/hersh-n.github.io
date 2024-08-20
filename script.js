// Hide navbar on scroll and only show when at the top
const scrollThreshold = 100; // Adjust this value to delay hiding
window.addEventListener('scroll', function() {
  let navbar = document.querySelector('header.navbar');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > scrollThreshold) {
    navbar.style.opacity = '0'; // Fade out
    navbar.style.pointerEvents = 'none'; // Optional: Disable interactions when hidden
  } else if (scrollTop === 0) {
    navbar.style.opacity = '1'; // Fade in
    navbar.style.pointerEvents = 'auto'; // Re-enable interactions
  }
});

document.querySelector('.navbar-toggler').addEventListener('click', function() {
  document.getElementById('overlay').classList.add('open');
});

function closeNav() {
  document.getElementById('overlay').classList.remove('open');
}