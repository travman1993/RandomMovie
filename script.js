// ============================================
// MOVIE PICKER - ENHANCED JAVASCRIPT LOGIC
// Includes: Movie Picker, Dinner Picker, Snack Picker
// ============================================

// ============================================
// DOM ELEMENTS INITIALIZATION
// ============================================

let pickBtn, pickAgainBtn, movieCard, movieTitle, movieMeta, movieDescription;
let dinnerBtn, dinnerAgainBtn, dinnerCard, dinnerName, dinnerDescription;
let snackBtn, snackAgainBtn, snackCard, snackName, snackDescription;

// ============================================
// MOVIE PICKER FUNCTIONS
// ============================================

function pickRandomMovie() {
    try {
        // Validate MOVIES array exists
        if (!window.MOVIES || !Array.isArray(window.MOVIES) || window.MOVIES.length === 0) {
            console.error('❌ MOVIES array not found or is empty');
            if (movieTitle) movieTitle.textContent = 'Error: Movie list not loaded';
            if (movieCard) movieCard.classList.remove('hidden');
            return;
        }

        // Generate random index
        const randomIndex = Math.floor(Math.random() * window.MOVIES.length);
        const selectedMovie = window.MOVIES[randomIndex];

        // Validate movie object
        if (!selectedMovie || !selectedMovie.title) {
            console.error('❌ Invalid movie object:', selectedMovie);
            if (movieTitle) movieTitle.textContent = 'Error: Invalid movie data';
            if (movieCard) movieCard.classList.remove('hidden');
            return;
        }

        // Update UI with selected movie
        updateMovieCard(selectedMovie);

        // Show card with animation
        if (movieCard) {
            movieCard.classList.remove('hidden');
        }

        // Analytics
        trackMovieSelection(selectedMovie);

    } catch (error) {
        console.error('❌ Error in pickRandomMovie:', error);
        if (movieTitle) movieTitle.textContent = 'Error: ' + error.message;
        if (movieCard) movieCard.classList.remove('hidden');
    }
}

function updateMovieCard(movie) {
    try {
        if (!movieTitle || !movieMeta || !movieDescription) {
            console.error('❌ Movie card elements not initialized');
            return;
        }

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

    } catch (error) {
        console.error('❌ Error updating movie card:', error);
    }
}

// ============================================
// DINNER PICKER FUNCTIONS
// ============================================

function pickRandomDinner() {
    try {
        // Validate DINNERS array exists
        if (!window.DINNERS || !Array.isArray(window.DINNERS) || window.DINNERS.length === 0) {
            console.error('❌ DINNERS array not found or is empty');
            if (dinnerName) dinnerName.textContent = 'Error: Dinner list not loaded';
            if (dinnerCard) dinnerCard.classList.remove('hidden');
            return;
        }

        // Generate random index
        const randomIndex = Math.floor(Math.random() * window.DINNERS.length);
        const selectedDinner = window.DINNERS[randomIndex];

        // Validate dinner object
        if (!selectedDinner || !selectedDinner.name) {
            console.error('❌ Invalid dinner object:', selectedDinner);
            if (dinnerName) dinnerName.textContent = 'Error: Invalid dinner data';
            if (dinnerCard) dinnerCard.classList.remove('hidden');
            return;
        }

        // Update UI with selected dinner
        updateDinnerCard(selectedDinner);

        // Show card with animation
        if (dinnerCard) {
            dinnerCard.classList.remove('hidden');
        }

        console.log('✅ Dinner selected:', selectedDinner.name);

    } catch (error) {
        console.error('❌ Error in pickRandomDinner:', error);
        if (dinnerName) dinnerName.textContent = 'Error: ' + error.message;
        if (dinnerCard) dinnerCard.classList.remove('hidden');
    }
}

function updateDinnerCard(dinner) {
    try {
        if (!dinnerName || !dinnerDescription) {
            console.error('❌ Dinner card elements not initialized');
            return;
        }

        // Name
        dinnerName.textContent = dinner.name || 'Unknown Dinner';

        // Description with category
        dinnerDescription.textContent = `Category: ${dinner.category || 'General'} • Perfect for movie night!`;

    } catch (error) {
        console.error('❌ Error updating dinner card:', error);
    }
}

// ============================================
// SNACK PICKER FUNCTIONS
// ============================================

function pickRandomSnack() {
    try {
        // Validate SNACKS array exists
        if (!window.SNACKS || !Array.isArray(window.SNACKS) || window.SNACKS.length === 0) {
            console.error('❌ SNACKS array not found or is empty');
            if (snackName) snackName.textContent = 'Error: Snack list not loaded';
            if (snackCard) snackCard.classList.remove('hidden');
            return;
        }

        // Generate random index
        const randomIndex = Math.floor(Math.random() * window.SNACKS.length);
        const selectedSnack = window.SNACKS[randomIndex];

        // Validate snack object
        if (!selectedSnack || !selectedSnack.name) {
            console.error('❌ Invalid snack object:', selectedSnack);
            if (snackName) snackName.textContent = 'Error: Invalid snack data';
            if (snackCard) snackCard.classList.remove('hidden');
            return;
        }

        // Update UI with selected snack
        updateSnackCard(selectedSnack);

        // Show card with animation
        if (snackCard) {
            snackCard.classList.remove('hidden');
        }

        console.log('✅ Snack selected:', selectedSnack.name);

    } catch (error) {
        console.error('❌ Error in pickRandomSnack:', error);
        if (snackName) snackName.textContent = 'Error: ' + error.message;
        if (snackCard) snackCard.classList.remove('hidden');
    }
}

function updateSnackCard(snack) {
    try {
        if (!snackName || !snackDescription) {
            console.error('❌ Snack card elements not initialized');
            return;
        }

        // Name
        snackName.textContent = snack.name || 'Unknown Snack';

        // Description with category
        snackDescription.textContent = `Category: ${snack.category || 'General'} • The perfect movie snack!`;

    } catch (error) {
        console.error('❌ Error updating snack card:', error);
    }
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================

function attachEventListeners() {
    // MOVIE PICKER LISTENERS
    if (pickBtn) {
        pickBtn.addEventListener('click', () => {
            pickRandomMovie();
            pickBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                pickBtn.style.transform = 'scale(1)';
            }, 100);
        });
    }

    if (pickAgainBtn) {
        pickAgainBtn.addEventListener('click', () => {
            movieCard.style.opacity = '0.5';
            setTimeout(() => {
                pickRandomMovie();
                movieCard.style.opacity = '1';
            }, 300);
        });
    }

    // DINNER PICKER LISTENERS
    if (dinnerBtn) {
        dinnerBtn.addEventListener('click', () => {
            pickRandomDinner();
            dinnerBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                dinnerBtn.style.transform = 'scale(1)';
            }, 100);
        });
    }

    if (dinnerAgainBtn) {
        dinnerAgainBtn.addEventListener('click', () => {
            dinnerCard.style.opacity = '0.5';
            setTimeout(() => {
                pickRandomDinner();
                dinnerCard.style.opacity = '1';
            }, 300);
        });
    }

    // SNACK PICKER LISTENERS
    if (snackBtn) {
        snackBtn.addEventListener('click', () => {
            pickRandomSnack();
            snackBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                snackBtn.style.transform = 'scale(1)';
            }, 100);
        });
    }

    if (snackAgainBtn) {
        snackAgainBtn.addEventListener('click', () => {
            snackCard.style.opacity = '0.5';
            setTimeout(() => {
                pickRandomSnack();
                snackCard.style.opacity = '1';
            }, 300);
        });
    }

    console.log('✅ All event listeners attached successfully');
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Space or Enter to pick
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        
        // Determine which button is focused
        if (document.activeElement === pickAgainBtn) {
            pickAgainBtn.click();
        } else if (document.activeElement === dinnerAgainBtn) {
            dinnerAgainBtn.click();
        } else if (document.activeElement === snackAgainBtn) {
            snackAgainBtn.click();
        } else {
            // Default to movie picker if nothing specific is focused
            if (pickBtn) pickBtn.click();
        }
    }
});

// ============================================
// ANALYTICS TRACKING
// ============================================

function trackMovieSelection(movie) {
    try {
        console.log('Movie selected:', {
            title: movie.title,
            year: movie.year,
            rating: movie.rating,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Analytics error:', error);
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 Movie Picker Initializing...');

    // Initialize Movie Elements
    pickBtn = document.getElementById('pickBtn');
    pickAgainBtn = document.getElementById('pickAgainBtn');
    movieCard = document.getElementById('movieCard');
    movieTitle = document.getElementById('movie-title');
    movieMeta = document.getElementById('movie-meta');
    movieDescription = document.getElementById('movie-description');

    // Initialize Dinner Elements
    dinnerBtn = document.getElementById('dinnerBtn');
    dinnerAgainBtn = document.getElementById('dinnerAgainBtn');
    dinnerCard = document.getElementById('dinnerCard');
    dinnerName = document.getElementById('dinner-name');
    dinnerDescription = document.getElementById('dinner-description');

    // Initialize Snack Elements
    snackBtn = document.getElementById('snackBtn');
    snackAgainBtn = document.getElementById('snackAgainBtn');
    snackCard = document.getElementById('snackCard');
    snackName = document.getElementById('snack-name');
    snackDescription = document.getElementById('snack-description');

    // Validate all critical elements exist
    const essentialElements = [
        { name: 'pickBtn', element: pickBtn },
        { name: 'dinnerBtn', element: dinnerBtn },
        { name: 'snackBtn', element: snackBtn },
        { name: 'movieCard', element: movieCard },
        { name: 'dinnerCard', element: dinnerCard },
        { name: 'snackCard', element: snackCard }
    ];

    let allElementsFound = true;
    essentialElements.forEach(el => {
        if (!el.element) {
            console.error(`❌ Missing element: ${el.name}`);
            allElementsFound = false;
        }
    });

    if (!allElementsFound) {
        console.error('❌ ERROR: Some DOM elements not found!');
        return;
    }

    // Verify data arrays are loaded
    if (!window.MOVIES || window.MOVIES.length === 0) {
        console.error('❌ MOVIES array not loaded');
        return;
    }
    if (!window.DINNERS || window.DINNERS.length === 0) {
        console.error('❌ DINNERS array not loaded');
        return;
    }
    if (!window.SNACKS || window.SNACKS.length === 0) {
        console.error('❌ SNACKS array not loaded');
        return;
    }

    console.log(`✅ All data loaded successfully!`);
    console.log(`   • Movies: ${window.MOVIES.length}`);
    console.log(`   • Dinners: ${window.DINNERS.length}`);
    console.log(`   • Snacks: ${window.SNACKS.length}`);

    // Attach event listeners
    attachEventListeners();

    // Add focus styling for accessibility
    [pickBtn, dinnerBtn, snackBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('focus', function() {
                this.style.outline = `2px solid #d4af37`;
                this.style.outlineOffset = '2px';
            });
            btn.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        }
    });

    console.log('🎉 Movie Picker Ready!');
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`⏱️ Page load time: ${pageLoadTime}ms`);
    });
}