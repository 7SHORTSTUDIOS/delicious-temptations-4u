document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    let counter = 1;

    setInterval(() => {
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${-counter * 100}%)`;

        counter++;

        if (counter > cards.length) {
            counter = 1;
            setTimeout(() => {
                slider.style.transition = "none";
                slider.style.transform = 'translateX(0)';
            }, 500);
        }
    }, 3000); // Change slide every 3 seconds
});