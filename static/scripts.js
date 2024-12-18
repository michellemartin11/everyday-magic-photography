// Get the album container
const scrollableAlbum = document.querySelector('.scrollable-album');

// Get the buttons for scrolling
const leftButton = document.querySelector('.scroll-btn.left');
const rightButton = document.querySelector('.scroll-btn.right');

// Function to get the scroll distance based on screen size
function getScrollDistance() {
    if (window.innerWidth <= 768) { // Mobile screen width or less
        return window.innerWidth * 0.8; // 80% of viewport width for mobile
    } else { // Desktop
        return 700; // Fixed 700px for desktop
    }
}

// Function to handle scrolling
function scrollAlbum(direction) {
    const scrollDistance = getScrollDistance();
    if (direction === 'left') {
        scrollableAlbum.scrollLeft -= scrollDistance;
    } else if (direction === 'right') {
        scrollableAlbum.scrollLeft += scrollDistance;
    }

    // Manual smooth scrolling fallback
    if (!('scrollBehavior' in document.documentElement.style)) {
        scrollableAlbum.style.scrollBehavior = 'smooth';
    }
}



// Event listeners for buttons
leftButton.addEventListener('click', () => scrollAlbum('left'));
rightButton.addEventListener('click', () => scrollAlbum('right'));

// Adjust scroll distance on window resize
window.addEventListener('resize', () => {
    // You can adjust any other behavior here if needed on resize
});


// Modal functionality
function openModal(imgElement) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}
// Toggle navbar menu visibility on mobile
function toggleNavbar() {
    const navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('active');
}
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
