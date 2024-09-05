// JavaScript for unique buttons

// 1. Show More/Show Less Button
const showMoreBtn = document.getElementById("show-more-btn");
const moreContent = document.getElementById("more-content");

showMoreBtn.addEventListener("click", function () {
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        showMoreBtn.textContent = "Show Less";
    } else {
        moreContent.style.display = "none";
        showMoreBtn.textContent = "Show More";
    }
});

// 2. Scroll to Top Button
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block"; // Show button when scrolled down 300px
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button
    }
};

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 3. Contact Modal Popup
const contactModal = document.getElementById("contact-modal");
const contactBtn = document.getElementById("contact-btn");
const closeContactModal = document.querySelector(".close-modal");

contactBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    contactModal.style.display = "flex"; // Show modal
});

closeContactModal.addEventListener("click", function () {
    contactModal.style.display = "none"; // Close modal
});

window.addEventListener("click", function (e) {
    if (e.target === contactModal) {
        contactModal.style.display = "none"; // Close modal if clicking outside of modal content
    }
});
