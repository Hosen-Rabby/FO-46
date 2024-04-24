// window.onscroll = function () {
//   var navbar = document.getElementById("navbar");
//   // var navbar_g = document.querySelector(".navbar_g");
//   var logoContainer = document.querySelector(".logo");
//   var logo = document.querySelector(".logo img");
//   var scrollPosition = window.scrollY || document.documentElement.scrollTop;

//   if (scrollPosition > 20) {
//     navbar.classList.add("fixed");
//     // navbar_g.classList.add("fixed");
//     logo.src = "./assets/img/logo-white.png";
//     // logoContainer.classList.add("black-border");
//   } else {
//     navbar.classList.remove("fixed");
//     // navbar_g.classList.remove("fixed");
//     logo.src = "./assets/img/loogo.png";
//     logoContainer.classList.remove("black-border");
//   }
// };

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

function setActive(element) {
  // Remove active class from all list items
  var listItems = document.querySelectorAll("li");
  listItems.forEach(function (item) {
    item.classList.remove("active");
  });

  // Add active class to the clicked list item
  element.parentNode.classList.add("active");
}

// game rules

let currentSlide = 1;
showSlide(currentSlide);

function showSlide(slideIndex) {
  const slides = document.querySelectorAll(".slide");
  const buttons = document.querySelectorAll(".slider-btn");

  if (slideIndex < 1) {
    slideIndex = slides.length;
  } else if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  buttons.forEach((button) => button.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  buttons[slideIndex - 1].classList.add("active");

  currentSlide = slideIndex;
}
var isScrollingDown = false;

// Function to set the active menu item based on scroll position and direction
function setActiveMenuItem() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var menuItems = document.querySelectorAll('.menu_items .item');
    var sections = [
        document.getElementById('projects'),
        document.getElementById('game_rules'),
        document.getElementById('slider-buttons')
    ];

    // Check the scroll direction
    var newScrollPosition = scrollPosition;
    setTimeout(function() {
        var currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (newScrollPosition > currentScrollPosition) {
            isScrollingDown = true;
        } else {
            isScrollingDown = false;
        }
    }, 100);

    // Loop through menu items and sections
    menuItems.forEach(function(item, index) {
        var section = sections[index];
        var button = menuItems[index];

        // Check if the corresponding section is in view
        if ((isScrollingDown && section.getBoundingClientRect().top < window.innerHeight / 2) ||
            (!isScrollingDown && section.getBoundingClientRect().top < window.innerHeight / 2)) {
            // Add 'active' class to the current menu item and remove from others
            button.classList.add('active');
            for (var i = 0; i < menuItems.length; i++) {
                if (i !== index) {
                    menuItems[i].classList.remove('active');
                }
            }
        }
    });
}

// Listen for scroll events and update the active menu item
window.addEventListener('scroll', setActiveMenuItem);

// Call the function initially to set the active menu item on page load
setActiveMenuItem();
