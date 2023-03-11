/* stories swiper starts */
var swiper = new Swiper(".container-swiper", {
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
});
/* stories swiper ends */


/* slide view for users starts */
let slideStories = document.querySelector('.slide-stories');
let users = document.querySelectorAll('.container-stories .swiper .swiper-wrapper .swiper-slide div');


for (let i = 0; i < users.length; i++) {
    users[i].onclick = function() {
        slideStories.style.display = 'block';
    };
};
/* slide view for users ends */



/* cancel slide stories starts */
let closeCancel = document.querySelector('.close');
let slideLogo = document.querySelector('.slide-logo');

slideLogo.onclick = function() {
    slideStories.style.display = 'none';
}
closeCancel.onclick = function() {
    slideStories.style.display = 'none';
}
/* cancel slide stories ends */



/* slide stories starts */
class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init();
    }

    activeSlide(index) {
        this.active = index;
        this.items.forEach((item) => item.classList.remove('active'));
        this.items[index].classList.add('active');
        this.thumbItems.forEach((item) => item.classList.remove('active'));
        this.thumbItems[index].classList.add('active');
        this.autoSlide();
    }


    prev() {
        if (this.active > 0) {
            this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.items.length - 1);
        }
    }

    next() {
        if (this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1);
        } else {
            this.activeSlide(0);
        }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next');
        const prevBtn = this.slide.querySelector('.slide-prev');
        nextBtn.addEventListener('click', this.next);
        prevBtn.addEventListener('click', this.prev);
    }

    addThumbItems() {
        this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
        this.thumbItems = Array.from(this.thumb.children);
    }

    autoSlide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }

    init() {
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItems();
        this.activeSlide(0);
        this.addNavigation();
    }
}


new SlideStories('slide');


/* slide stories ends */





/* recom close starts */
let recomCancel = document.querySelectorAll('.container-recommendation .recom-close');
let recomBox = document.querySelectorAll('.container-recommendation .recom-box');

for (let i = 0; i < recomBox.length; i++) {
    recomCancel[i].onclick = function() {
        recomBox[i].style.display = 'none';
    }
}
/* recom close ends */



/* recom swiper starts */
var swiper = new Swiper(".recom-swiper", {
    slidesPerView: 2.3,
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    }
});
/* recom swiper ends */