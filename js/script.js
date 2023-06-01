const hamburgerBtn = document.querySelector('.hamburger-btn');
const offcanvasCloseBtn = document.querySelector('.offcanvas__close-btn');
const offcanvasArea = document.querySelector('.offcanvas__area');
const bodyOverlay = document.querySelector('.body-overlay');
const header = document.getElementById('header-sticky');
const cursorOutline = document.querySelector('.cursor-outline');
const cursorContent = document.querySelector('.cursor-content');

// Cursor


window.addEventListener('mousemove', (event) => {
    const posX = event.clientX;
    const posY = event.clientY;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: 'forwards' }
    );
});

// cursor view effect

const cursorView = document.querySelectorAll('.cursor-view');

cursorView.forEach((card) => {
    card.addEventListener('mouseover', () => {
        console.log(123)
        cursorOutline.classList.add('show');
        cursorContent.classList.add('show');
    })

    card.addEventListener('mouseout', () => {
        cursorOutline.classList.remove('show');
        cursorContent.classList.remove('show');
    })
})



document.addEventListener('mouseleave', () => {
    cursorOutline.animate({
        left: `-10px`,
        top: `-10px`
    }, { duration: 500, fill: 'forwards' }
    );
});


// Hamburger btn

hamburgerBtn.addEventListener('click', () => {
    offcanvasArea.classList.add('offcanvas-opened');
    bodyOverlay.classList.add('opened');
});

offcanvasCloseBtn.addEventListener('click', closeOffCanvas);
bodyOverlay.addEventListener('click', closeOffCanvas);

function closeOffCanvas() {
    offcanvasArea.classList.remove('offcanvas-opened');
    bodyOverlay.classList.remove('opened');
}

// navbar animation
window.addEventListener('scroll', function () {

    let scrollDistance = 171;

    if (window.pageYOffset > scrollDistance) {
        header.classList.add('tp-header-sticky');
    } else {
        header.classList.remove('tp-header-sticky');
    }
});

// swiper
var slider = new Swiper('.tp-project-active', {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
        '1400': {
            slidesPerView: 4,
        },
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
});

// Animation
const animateWhenVisible = (element, animationClass) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', animationClass);
            }
        });
    });

    observer.observe(element);
};

// Animation Elements
const featureContent = document.getElementById('feature-content');
animateWhenVisible(featureContent, 'animate__fadeInUp');

const aboutLeft = document.getElementById('about-left');
animateWhenVisible(aboutLeft, 'animate__fadeInLeft');

const aboutRight = document.getElementById('about-right');
animateWhenVisible(aboutRight, 'animate__fadeInRightBig');

const serviceContent = document.getElementById('service-content');
animateWhenVisible(serviceContent, 'animate__fadeInUp');

const TeamContent = document.getElementById('team-content');
animateWhenVisible(TeamContent, 'animate__fadeInUp');

const contentRight = document.getElementById('content-right');
animateWhenVisible(contentRight, 'animate__fadeInRight');


