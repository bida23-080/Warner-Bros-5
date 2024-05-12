document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll function for navigation links
    function smoothScroll(target) {
        const navigationHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = target.offsetTop - navigationHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Navigation link click event listeners
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            smoothScroll(targetSection);
        });
    });

    // Search form submission
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = document.getElementById('searchInput').value.trim();
        if (searchTerm !== '') {
            // Perform search operation (e.g., display search results)
            alert('Search term: ' + searchTerm);
            // Clear input field after search
            document.getElementById('searchInput').value = '';
        } else {
            alert('Please enter a search term.');
        }
    });

    // Function to scroll to the top of movies section
    function scrollToMovies() {
        const moviesSection = document.getElementById('movies');
        smoothScroll(moviesSection);
    }
});
