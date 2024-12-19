document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mouse hover effect for the header title
    const title = document.getElementById('title');
    title.addEventListener('mouseover', () => {
        title.style.color = '#ff5722';
    });
    title.addEventListener('mouseout', () => {
        title.style.color = '#fff';
    });

    // Scroll event to change header background
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#555';
        } else {
            header.style.backgroundColor = '#333';
        }
    });

    // Form submission handling
    const reviewForm = document.getElementById('reviewForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    reviewForm.addEventListener('submit', event => {
        event.preventDefault(); // Prevent actual form submission
        reviewForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });

    // Dynamic animation on skills section hover
    const skillsSection = document.getElementById('skills');
    skillsSection.addEventListener('mouseover', () => {
        skillsSection.style.backgroundColor = '#e0f7fa';
    });
    skillsSection.addEventListener('mouseout', () => {
        skillsSection.style.backgroundColor = 'transparent';
    });
});
