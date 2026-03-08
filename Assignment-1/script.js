const postsContainer = document.getElementById('posts');
const errorContainer = document.getElementById('error');
const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=6';

async function loadPosts() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        displayPosts(data);
    } catch (error) {
        errorContainer.innerHTML = `<p class="error-msg">Oops! We couldn't load the data. Please check your connection and try again.</p>`;
        console.error('Fetch error:', error);
    }
}

function displayPosts(posts) {
    postsContainer.innerHTML = posts.map(post => `
        <div class="card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `).join('');
}