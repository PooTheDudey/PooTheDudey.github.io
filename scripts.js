// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill bar animations
window.addEventListener('scroll', function() {
    var skillBars = document.querySelectorAll('.bar-container');
    skillBars.forEach(function(bar) {
        var windowHeight = window.innerHeight;
        var elementTop = bar.getBoundingClientRect().top;
        var percent = bar.getAttribute('data-percent');
        if (elementTop < windowHeight) {
            bar.querySelector('.progressbar').style.width = percent + '%';
        }
    });
});

// Show experience content on scroll
window.addEventListener('scroll', function() {
    var hiddenExperiences = document.querySelectorAll('.experience-content.hidden');
    hiddenExperiences.forEach(function(exp) {
        var windowHeight = window.innerHeight;
        var elementTop = exp.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            exp.classList.remove('hidden');
            exp.style.opacity = 1;
            exp.style.marginLeft = '0';
        }
    });
});
