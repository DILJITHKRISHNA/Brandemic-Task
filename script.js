document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollContent = document.querySelector('.scroll-content');

    const contentWidth = scrollContent.scrollWidth;
    scrollContent.style.animationDuration = `${contentWidth / 100}s`;

    const clone = scrollContent.cloneNode(true);
    scrollContainer.appendChild(clone);

    const elementsToEase = document.querySelectorAll('.scroll-content img');

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        elementsToEase.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            if (scrollTop > elementTop - window.innerHeight + 100) {
                element.classList.add('scroll-ease-out');
                element.classList.remove('hidden');
            } else {
                element.classList.remove('scroll-ease-out');
                element.classList.add('hidden');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
