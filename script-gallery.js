// onScroll animations for the gallery page
let figures = document.querySelectorAll('figure');

window.onscroll = () => {
    figures.forEach((fig, index) => {
        // Skip the first figure
        if (index === 0) return;

        let top = window.scrollY;
        let offset = fig.offsetTop;
        let height = fig.offsetHeight;
        var revealPoint = window.innerHeight - 200;
        if (top + revealPoint >= offset && top < offset + height) {
            fig.classList.add('show-animate');
        } else {
            //fig.classList.remove('show-animate');
        }
    });
};

// button event to the top of the page
document.getElementById('top-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
    });
});
