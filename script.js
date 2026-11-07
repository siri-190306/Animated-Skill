const skillSection = document.querySelector(".skills-list");
const progressBars = document.querySelectorAll(".progress-fill");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            progressBars.forEach((bar) => {
                bar.style.width = bar.dataset.width;
            });

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

observer.observe(skillSection);