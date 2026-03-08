async function getApiData() {
    const container = document.getElementById('posts');
    const loadingElement = document.getElementById('loading');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        renderData(data);

    } catch (error) {
        console.error("Fetch error: ", error);
        container.innerHTML = `<p class="error">Failed to load data. Please try again later.</p>`;
    } finally {
        if (loadingElement) loadingElement.style.display = 'none';
    }
}


function renderData(posts) {
    const container = document.getElementById('posts');
    container.innerHTML = posts.map(post => `
        <div class="data-card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `).join('');
}

if (document.getElementById('posts')) {
    window.addEventListener('loadposts', getApiData);
}