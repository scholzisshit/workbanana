// Active Navigation Link Highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to the current page link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Handle index.html and root path
        if ((currentPage === 'index.html' || currentPage === '') && href === 'index.html') {
            link.classList.add('active');
        } else if (currentPage === href) {
            link.classList.add('active');
        }
    });
});
