document.getElementById('language-toggle').addEventListener('click', function() {
    var lang = document.documentElement.lang;
    if (lang === 'es') {
        document.documentElement.lang = 'en';
        document.getElementById('language-toggle').innerText = 'Español';
    } else {
        document.documentElement.lang = 'es';
        document.getElementById('language-toggle').innerText = 'English';
    }
});
