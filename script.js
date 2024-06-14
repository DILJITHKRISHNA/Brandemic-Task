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


document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('h1.hidden, p.hidden');
    const listItems = document.querySelectorAll('.hidden-list');

    const revealText = () => {
        textElements.forEach((element) => {
            element.classList.add('animate-text');
        });
    };

    const revealListItems = () => {
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate-list');
            }, index * 200); 
        });
    };

    revealText();
    revealListItems();
});

