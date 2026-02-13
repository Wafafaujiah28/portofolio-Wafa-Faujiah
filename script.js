document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const btnAbout = document.getElementById('btn-about');

    function changePage(id) {
        sections.forEach(sec => sec.classList.remove('active'));
        const target = document.getElementById(id);
        if (target) target.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').substring(1);
            changePage(id);
        });
    });

    if (btnAbout) {
        btnAbout.addEventListener('click', () => changePage('about'));
    }

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});