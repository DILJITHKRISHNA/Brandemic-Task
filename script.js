const animatedElement = document.querySelector('.animated-element');

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const handleScroll = () => {
    if (isInViewport(animatedElement)) {
        animatedElement.classList.add('animate');
    } else {
        animatedElement.classList.remove('animate');
    }
};

window.addEventListener('scroll', handleScroll);

handleScroll();


