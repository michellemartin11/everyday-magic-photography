// Event listener for scroll buttons
document.addEventListener("DOMContentLoaded", function() {
    const scrollLeftButton = document.querySelector('.scroll-btn.left');
    const scrollRightButton = document.querySelector('.scroll-btn.right');
    const album = document.querySelector('.scrollable-album');

    const scrollDistance = 700;

    if (scrollLeftButton && scrollRightButton && album) {
        scrollLeftButton.addEventListener("click", function() {
            album.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        });

        scrollRightButton.addEventListener("click", function() {
            album.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        });
    }
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

