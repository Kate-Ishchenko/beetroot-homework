const navOpener = () => {
    const btnNavOpener = document.querySelector('.js-nav-opener');
    const navHolder = document.querySelector('.js-nav-holder');
​
    btnNavOpener.addEventListener('click', (e) => {
        navHolder.classList.toggle('active' );
    });
}
​
navOpener()