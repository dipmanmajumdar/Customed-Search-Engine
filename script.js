        // Replace with your Google Custom Search Engine ID
        const cx = '870ee2965b5264600';
        // Replace with your Google API Key
        const apiKey = 'AIzaSyAoNhFA5ieH2onmlKShV4X6EFkQWQwqnSk';

        let currentPage = 1;
        let resultsPerPage = 5;
        let allResults = [];

        // Perform Search
        function performSearch() {
            const query = document.getElementById('search-box').value;
            if (query) {
                const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&cx=${cx}&key=${apiKey}`;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        allResults = data.items || [];
                        currentPage = 1;
                        displayResults();
                    })
                    .catch(error => console.error('Error fetching search results:', error));
            } else {
                alert('Please enter a search query.');
            }
        }

        // Display Results
        function displayResults() {
            const resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = '';

            const start = (currentPage - 1) * resultsPerPage;
            const end = start + resultsPerPage;
            const pageResults = allResults.slice(start, end);

            if (pageResults.length > 0) {
                pageResults.forEach(result => {
                    const resultElement = document.createElement('div');
                    resultElement.classList.add('result-item');
                    resultElement.innerHTML = `
                        <h3><a href="${result.link}" target="_blank">${result.title}</a></h3>
                        <p>${result.snippet}</p>
                        <a href="${result.link}" target="_blank">${result.link}</a>
                    `;
                    resultsContainer.appendChild(resultElement);
                });
            } else {
                resultsContainer.innerHTML = '<p>No results found.</p>';
            }

            // Update Pagination Buttons
            document.getElementById('prev-page').disabled = currentPage === 1;
            document.getElementById('next-page').disabled = end >= allResults.length;
        }

        // Pagination Functions
        function prevPage() {
            if (currentPage > 1) {
                currentPage--;
                displayResults();
            }
        }

        function nextPage() {
            if ((currentPage * resultsPerPage) < allResults.length) {
                currentPage++;
                displayResults();
            }
        }

        // Light/Dark Mode Toggle
        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                themeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png';
            } else {
                themeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png';
            }
        }

        // Create Moving Stars
        function createStars() {
            const starsContainer = document.getElementById('stars-container');
            const numStars = 100; // Number of stars

            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed
                starsContainer.appendChild(star);
            }
        }

        // Initialize Stars
        createStars();
