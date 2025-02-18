const lenis = new Lenis()
lenis.on('scroll', (e) => {
    // console.log(e)
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf);

// header sticky
window.addEventListener("scroll", headerStick);
function headerStick() {
    const topBtn = document.querySelector(".scroll-top");
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        topBtn.classList.add("show-up")
        header.classList.add("scroll-down");
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        header.classList.remove("scroll-down");
        topBtn.classList.remove("show-up");
    };
};



// lang switch-pc
let list = document.querySelector(".switch-lang-list ul");
function switchLang() {
    const langSwitchTop = document.querySelector(".lang-arrow");
    langSwitchTop.addEventListener("click", (e) => {
        setTimeout(() => {
            langSwitchTop.classList.toggle("rotateUp")
            list.classList.toggle("showUp");
        }, 50)
    });
}
switchLang();

// mobile menu- mobile
let menu = document.querySelector("nav");
function menuShow() {
    let btn = document.querySelector(" nav .menu-mb-icon");
    btn.addEventListener("click", function () {
        menu.classList.toggle("openMenu");
    });
}
menuShow();


// footer資料顯現
function footerShow() {
    let a = document.querySelectorAll(".footer-info .mb h6")
    let b = document.querySelectorAll(".footer-info .mb p")
    for (let i = 0; i < 2; i++) {
        a[i].addEventListener("click", function () {
            $(b[i]).slideToggle();
            a[i].querySelector("span").textContent == "+" ? a[i].querySelector("span").textContent = "-" : a[i].querySelector("span").textContent = "+"
        });
    }
}
footerShow();

// sliding droplist
function slideUp(target, duration) {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.style.overflow = 'hidden';
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
let slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

let slideToggle = (target, duration) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}


