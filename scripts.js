// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show experience content on scroll
window.addEventListener('scroll', function() {
    var hiddenExperiences = document.querySelectorAll('.experience-content.hidden');
    hiddenExperiences.forEach(function
