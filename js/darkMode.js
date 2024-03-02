const darkModeButton = document.getElementById('darkMode');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        body.classList.add('darkMode');
    }
});

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('darkMode');

    const isDarkMode = body.classList.contains('darkMode');
    localStorage.setItem('darkMode', isDarkMode.toString());
});
