const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navmenu');

hamburger.addEventListener('click', function() {
  console.log('Code Activated')
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden')
});

const usia = 29

if (usia < !30) {
  console.log('tidak boleh')
}

else {
  console.log('boleh')
}