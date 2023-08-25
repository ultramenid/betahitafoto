var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');



function updateTheme() {
    if (!('theme' in localStorage)) {
        localStorage.theme = 'light';
    }

    switch (localStorage.theme) {
        

        case 'dark':
            document.documentElement.classList.add('dark');
            themeToggleDarkIcon.classList.remove('hidden');
            document.documentElement.setAttribute('color-theme', 'dark');
            break;

        case 'light':
            document.documentElement.classList.remove('dark');
            themeToggleLightIcon.classList.remove('hidden');
            document.documentElement.setAttribute('color-theme', 'light');
            break;
    }
}

updateTheme();
var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if(localStorage.theme === 'dark'){
        localStorage.theme = "light", window.updateTheme()
    }else{
        localStorage.theme = "dark", window.updateTheme()
    }
    
});