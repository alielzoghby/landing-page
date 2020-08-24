/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 *
 */

/**
 * Define Global Variables
 *
 */
const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const scroller = document.getElementById("scrollMeUp");
/**
 * End Global Variables
 
 

 
 
 * Start Helper Functions
 * 
 */

/**
 * End Helper Functions
 * 
 




 * Begin Main Functions
 * 
 */

// build the nav

const viewNav = () => {
  let navUI = "";
  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionDataType = section.dataset.nav;

    navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataType}</a></li>`;
  });
  navbar.innerHTML = navUI;
};

viewNav();

// Add class 'active' to section when near top of viewport

const dimension = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

const removeActive = (section) => {
  section.classList.remove("your-active-class");
};

const addActive = (condition, section) => {
  if (condition) {
    section.classList.add("your-active-class");
  }
};

const active = () => {
  sections.forEach((section) => {
    const currPosition = window.scrollY;

    const elemDimension = dimension(section);
    inviewport = () => elemDimension < 350 && elemDimension > -350;

    if (currPosition > elemDimension || currPosition > 250) {
      scroller.classList.remove("display__none");
    } else {
      scroller.classList.add("display__none");
    }

    removeActive(section);

    addActive(inviewport(), section);
  });
};

window.addEventListener("scroll", active);

// Scroll to anchor ID using scrollTO event

const scrollMeUp = () => {
  scroller.addEventListener("click", () => {
    const animatedScrolling = () => {
      const c = window.scrollY;
      if (c > 0) {
        window.requestAnimationFrame(animatedScrolling);
        window.scrollTo(0, c - c / 12);
      }
    };
    window.requestAnimationFrame(animatedScrolling);
  });
};

scrollMeUp();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
