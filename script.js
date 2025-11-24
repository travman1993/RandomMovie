// ============================================
// MOVIE PICKER - JAVASCRIPT LOGIC
// ============================================

// DOM Elements
const pickBtn = document.getElementById('pickBtn');
const pickAgainBtn = document.getElementById('pickAgainBtn');
const movieCard = document.getElementById('movieCard');
const movieTitle = document.getElementById('movie-title');
const movieMeta = document.getElementById('movie-meta');
const movieDescription = document.getElementById('movie-description');

// ============================================
// MAIN FUNCTION: Pick Random Movie
// ============================================

function pickRandomMovie() {
    // Validate MOVIES array exists
    if (!window.MOVIES || !Array.isArray(window.MOVIES) || window.MOVIES.length === 0) {
        console.error('MOVIES array not found or is empty');
        movieTitle.textContent = 'Error: Movie list not loaded';
        movieCard.classList.remove('hidden');
        return;
    }

    // Generate random index
    const randomIndex = Math.floor(Math.random() * window.MOVIES.length);
    const selectedMovie = window.MOVIES[randomIndex];

    // Validate movie object
    if (!selectedMovie || !selectedMovie.title) {
        console.error('Invalid movie object:', selectedMovie);
        movieTitle.textContent = 'Error: Invalid movie data';
        movieCard.classList.remove('hidden');
        return;
    }

    // Update UI with selected movie
    updateMovieCard(selectedMovie);

    // Show card with animation
    movieCard.classList.remove('hidden');

    // Analytics (optional - for future tracking)
    trackMovieSelection(selectedMovie);
}

// ============================================
// UPDATE MOVIE CARD WITH MOVIE DATA
// ============================================

function updateMovieCard(movie) {
    // Title
    movieTitle.textContent = movie.title || 'Unknown Title';

    // Year and Rating
    const year = movie.year || 'N/A';
    const rating = movie.rating || 'Not Rated';
    movieMeta.innerHTML = `
        <span class="movie-year">${year}</span>
        <span class="movie-rating">${rating}</span>
    `;

    // Description with fallback text
    if (movie.description && movie.description.trim() !== '') {
        movieDescription.textContent = movie.description;
    } else {
        movieDescription.textContent = 'Short description coming soon.';
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

// Main Pick Button
pickBtn.addEventListener('click', () => {
    pickRandomMovie();
    
    // Add subtle animation feedback
    pickBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        pickBtn.style.transform = 'scale(1)';
    }, 100);
});

// Pick Again Button (inside card)
pickAgainBtn.addEventListener('click', () => {
    // Fade out card
    movieCard.style.opacity = '0.5';
    
    setTimeout(() => {
        pickRandomMovie();
        movieCard.style.opacity = '1';
    }, 300);
});

// ============================================
// KEYBOARD SHORTCUTS (Accessibility)
// ============================================

document.addEventListener('keydown', (e) => {
    // Space or Enter to pick movie
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        
        // Check if pick again button is focused
        if (document.activeElement === pickAgainBtn) {
            pickAgainBtn.click();
        } else {
            pickBtn.click();
        }
    }
});

// ============================================
// ANALYTICS TRACKING (Future Enhancement)
// ============================================

function trackMovieSelection(movie) {
    // Placeholder for future analytics integration
    // Could send data to Google Analytics, custom server, etc.
    
    try {
        // Log to console for now
        console.log('Movie selected:', {
            title: movie.title,
            year: movie.year,
            rating: movie.rating,
            timestamp: new Date().toISOString()
        });

        // Future: Send to analytics service
        // if (window.gtag) {
        //     gtag('event', 'movie_selected', {
        //         movie_title: movie.title,
        //         movie_year: movie.year,
        //         movie_rating: movie.rating
        //     });
        // }
    } catch (error) {
        console.error('Analytics error:', error);
    }
}

// ============================================
// LOCAL STORAGE SUPPORT (Future Enhancement)
// ============================================

function saveMovieToHistory(movie) {
    // Placeholder for future local storage functionality
    // To be implemented when adding watch history feature
    
    try {
        let history = JSON.parse(localStorage.getItem('movieHistory')) || [];
        
        // Add timestamp
        const movieWithTimestamp = {
            ...movie,
            pickedAt: new Date().toISOString()
        };
        
        // Keep only last 50 movies
        history.unshift(movieWithTimestamp);
        if (history.length > 50) {
            history = history.slice(0, 50);
        }
        
        localStorage.setItem('movieHistory', JSON.stringify(history));
    } catch (error) {
        console.warn('LocalStorage not available:', error);
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Verify MOVIES array is loaded
    if (window.MOVIES && Array.isArray(window.MOVIES)) {
        console.log(`✓ Movie Picker loaded with ${window.MOVIES.length} movies`);
    } else {
        console.error('✗ MOVIES array not found. Ensure movies.js is loaded before script.js');
    }

    // Add focus styling for accessibility
    pickBtn.addEventListener('focus', function() {
        this.style.outline = `2px solid #d4af37`;
        this.style.outlineOffset = '2px';
    });

    pickBtn.addEventListener('blur', function() {
        this.style.outline = 'none';
    });

    pickAgainBtn.addEventListener('focus', function() {
        this.style.outline = `2px solid #c41e3a`;
        this.style.outlineOffset = '2px';
    });

    pickAgainBtn.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ============================================
// WINDOW RESIZE HANDLER (Future Enhancement)
// ============================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Future: Handle responsive layout adjustments if needed
    }, 250);
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // In production, could send to error tracking service
});

// ============================================
// PERFORMANCE MONITORING (Optional)
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}