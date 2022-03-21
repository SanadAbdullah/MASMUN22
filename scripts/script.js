const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const comingsoon = document.querySelector('.coming-soon')
    // Toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

            //Animate links
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = ''
                comingsoon.style.animation = ''
            } else {link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 2}s`;
            comingsoon.style.animation = "navBlur 1s both";
        }
            
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

}

const countdown = () => {
    const countDate = new Date('March 24, 2022 15:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //How does it work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculation process
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    //if reached 0
    if (gap == 0 || gap < 0) {
        document.querySelector('.day').innerText = 0;
        document.querySelector('.hour').innerText = 0;
        document.querySelector('.minute').innerText = 0;
        document.querySelector('.second').innerText = 0;
    }
};


function callingfunctions () {
    navslide();
    setInterval(countdown,1000);

}

callingfunctions();

