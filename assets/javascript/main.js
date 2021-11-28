// The code below will make the hidden nav menu visible when user clicks on the button //
const showMenu = () => {
    
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");

    // The "show_menu" class is added to the element with id="nav-menu" when the toggle button is clicked on
    if (toggle && nav) {
        toggle.addEventListener("click", () => {

            nav.classList.toggle("show_menu");
        });
    };
};

showMenu();


// The code below will make nav menu disappear whenever user clicks on a nav link //
const hideMenu = () => {

    const navLink = document.querySelectorAll(".nav_link");
    navLink.forEach(link => link.addEventListener("click", () => {
    
        // The "show_menu" class is removed from the element with id="nav-menu" when a nav link is selected
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show_menu");
    }));
};

hideMenu();


// The code below will make the active menu link be always marked //
const scrollActive = () => {

    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        // Once scroll conditions are satisfied the "active_link" class is added to the active menu link
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.add("active_link");

        // If conditions are no longer satisfied the "active_link" class is removed
        } else {
            document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.remove("active_link");
        };
    });
};

window.addEventListener("scroll", scrollActive);


// The code below will make scroll-to-top button visible at the page's lower right corner //
const scrollTop = () => {

    const scrolltopButton = document.getElementById("scrolltop");

    // Once scroll conditions are satisfied the "show_scroll" class is added to the scroll-to-top button
    // The "scrolltop_alt" class will make button colors change at specific scroll height ranges
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


// The code below will set an autoplay function to the image slider //
const autoPlay = () => {

    // This function will be called again every 8000 ms
    setInterval(() => {
    
        const slides = document.getElementsByClassName("slide_radio");

        if (slides[0].checked == true) {
            slides[0].checked = false;
            slides[1].checked = true;
        } else if (slides[1].checked == true) {
            slides[1].checked = false;
            slides[2].checked = true;
        } else if (slides[2].checked == true) {
            slides[2].checked = false;
            slides[0].checked = true;
        };
    }, 8000);
};

autoPlay();


// The code below will change the header style when user scrolls the page //
const headerStyle = () => {

    const nav = document.getElementById("header");
    let didScroll = false;
    window.onscroll = () => didScroll = true;

    // If page was scrolled in the past 250 ms, the "scroll_header" class is added to the header; if not, same class is removed
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


// The code below will ensure animations work properly for different screen sizes //
const fixAnimations = () => {

    const departmentsData = document.getElementsByClassName("departments_data");

    // Grid layout changes if screen is large enough, therefore animations should also change
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


// The code below will add animations when user scrolls the page - from https://scrollrevealjs.org //
const scrollAnimations = () => {

    const sr = ScrollReveal({
        distance: "30px",
        duration: 1800,
        reset: true
    });
    
    // Different elements will appear from the top, left and right
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