document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle between hamburger and close icons
        if (navLinks.classList.contains('active')) {
            hamburger.innerHTML = '<i class="fas fa-times" style="font-size:35px;"></i>'; // Close icon
        } else {
            hamburger.innerHTML = `
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            `; // Default hamburger icon
        }
    });
});document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle between hamburger and close icons
        if (navLinks.classList.contains('active')) {
            hamburger.innerHTML = '<i class="fas fa-times" style="font-size:35px;"></i>'; // Close icon
        } else {
            hamburger.innerHTML = `
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            `; // Default hamburger icon
        }
    });
});