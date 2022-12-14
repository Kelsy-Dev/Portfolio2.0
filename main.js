const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');

function darkMode() {
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('bi-moon-fill');
    toggleIcon.children[1].classList.add('bi-brightness-low');
}
function lightMode() {
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.add('bi-moon-fill');
    toggleIcon.children[1].classList.remove('bi-brightness-low');
}
// Switch Theme 
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);