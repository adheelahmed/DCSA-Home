const navPop = () =>
{
    const mob = document.querySelector('.mob-view');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    mob.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index) =>{
            if(link.style.animation) {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /10 + .5}s`;
            }
        });

        mob.classList.toggle('anime');





    });
}


       
    navPop();

    

