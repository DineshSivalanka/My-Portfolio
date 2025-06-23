document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // Function to show the selected section and hide others
    const showSection = (targetId) => {
        sections.forEach((section) => {
            if (section.id === targetId) {
                section.style.display = "block"; // Show the target section
            } else {
                section.style.display = "none"; // Hide other sections
            }
        });
    };

    // Add click event listeners to navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute("data-target");
            showSection(targetId);
        });
    });

    // Initially show only the "home" section
    showSection("home");
});

// Show the About Details modal
function showAboutDetails() {
    const modal = document.getElementById("about-details-modal");
    modal.style.display = "flex";
}

// Close the About Details modal
function closeAboutDetails() {
    const modal = document.getElementById("about-details-modal");
    modal.style.display = "none";
}