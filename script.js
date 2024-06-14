window.addEventListener('scroll', function() {
    const parallaxBg = document.querySelector('.parallax-background');
    let scrollPosition = window.pageYOffset;
    parallaxBg.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
});