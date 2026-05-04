const animatedItems = document.querySelectorAll(
    '.title, .about-image, .about-card, .edu-card, .skill-group, .project-card, .contact-form, .contact-item'
);

function showOnScroll(){
    animatedItems.forEach(item => {
        let itemTop = item.getBoundingClientRect().top;

        if(itemTop < window.innerHeight - 100){
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);