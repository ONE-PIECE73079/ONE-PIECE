const apiKey = 'YOUR_API_KEY';
const cseId = 'YOUR_CSE_ID';

function search(query) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cseId}&q=${query}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = data.items;
            displaySearchResults(results);
        });
}

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '';
    results.forEach(result => {
        const resultHTML = `
            <div class="search-result">
                <h2>${result.title}</h2>
                <p>${result.snippet}</p>
                <a href="${result.link}" target="_blank">Visit</a>
            </div>
        `;
        searchResultsContainer.innerHTML += resultHTML;
    });
}

document.getElementById('search-form').addEventListener('submit', event => {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    search(query);
});