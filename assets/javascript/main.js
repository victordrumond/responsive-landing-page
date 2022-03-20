// Make hidden nav menu visible when user clicks on the nav toggle button
const showMenu = () => {

    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show_menu");
        });
    };
};

showMenu();



// Make nav menu disappear whenever user clicks on a nav link
const hideMenu = () => {

    const navLink = document.querySelectorAll(".nav_link");
    navLink.forEach(link => link.addEventListener("click", () => {
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show_menu");
    }));
};

hideMenu();



// Make active menu link be always marked
const scrollActive = () => {

    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.add("active_link");

        } else {
            document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.remove("active_link");
        };
    });
};

window.addEventListener("scroll", scrollActive);



// Make scroll-to-top button visible at the page's lower right corner
const scrollTop = () => {

    const scrolltopButton = document.getElementById("scrolltop");
    if (this.scrollY > home.offsetTop && this.scrollY <= about.offsetTop - window.innerHeight + 55) {
        scrolltopButton.classList.add("show_scroll");
        scrolltopButton.classList.remove("scrolltop_alt");
    } else if (this.scrollY > about.offsetTop - window.innerHeight + 55 && this.scrollY <= footer.offsetTop - window.innerHeight + 25) {
        scrolltopButton.classList.add("show_scroll", "scrolltop_alt");
    } else if (this.scrollY > footer.offsetTop - window.innerHeight + 25) {
        scrolltopButton.classList.add("show_scroll");
        scrolltopButton.classList.remove("scrolltop_alt");
    } else {
        scrolltopButton.classList.remove("show_scroll", "scrolltop_alt");
    };
};

window.addEventListener("scroll", scrollTop);



// Set an autoplay function to the image slider
const autoPlayFunction = () => {

    const slides = document.getElementsByClassName("slide_radio");
    if (slides[0].checked) {
        slides[0].checked = false;
        slides[1].checked = true;
    } else if (slides[1].checked) {
        slides[1].checked = false;
        slides[2].checked = true;
    } else if (slides[2].checked) {
        slides[2].checked = false;
        slides[0].checked = true;
    };
};

// autoPlayFunction starts and will be called again every 10 seconds
let startAutoPlay = setInterval(autoPlayFunction, 10000);

// Reset the autoplay function when necessary
const resetAutoPlay = () => {

    clearInterval(startAutoPlay);
    startAutoPlay = setInterval(autoPlayFunction, 10000);
};

// autoPlayFunction will be reset whenever user clicks on a dot or arrow icon
let arrowsAndDots = document.querySelectorAll(".dot, .arrow");
for (let i = 0; i < arrowsAndDots.length; i++) {
    arrowsAndDots[i].addEventListener("click", resetAutoPlay);
};



// Change the header style when user scrolls the page
const headerStyle = () => {

    const nav = document.getElementById("header");
    let didScroll = false;
    window.onscroll = () => didScroll = true;
    setInterval(() => {
        if (didScroll) {
            didScroll = false;
            nav.classList.add("scroll_header");
        } else {
            nav.classList.remove("scroll_header");
        };
    }, 250);
};

headerStyle();



// Ensure animations work properly for different screen sizes (the grid layout changes with screen width)
const fixAnimations = () => {

    const departmentsData = document.getElementsByClassName("departments_data");
    if (screen.width > 575) {
        for (let i = 0; i < departmentsData.length; i++) {
            departmentsData[i].classList.remove("departments_data_left", "departments_data_right");
            if (i < departmentsData.length/2) {
                departmentsData[i].classList.add("departments_data_left");
            } else {
                departmentsData[i].classList.add("departments_data_right");
            };
        };
    };
};

fixAnimations();



// Add animations from ScrollReveal.js (different elements will appear from the top, left and right)
const scrollAnimations = () => {

    const sr = ScrollReveal({
        distance: "30px",
        duration: 1800,
        reset: true
    });
    sr.reveal(".home_info, .arrivals_data, .footer_content", {
        origin: "top",
        interval: 200
    });
    sr.reveal(".departments_data_left", {
        origin: "left",
    });
    sr.reveal(".departments_data_right", {
        origin: "right",
    });
};

scrollAnimations();