const articleContainer = document.getElementById("articleContainer");

const articles = [
    {
        id: 1,
        title: "Article 1",
        body: "This is the first article. It provides an overview of the latest news.",
        imageUrl: "https://via.placeholder.com/600x300"
    },
    {
        id: 2,
        title: "Article 2",
        body: "This is the second article, covering detailed insights.",
        imageUrl: "https://via.placeholder.com/600x300"
    },
    {
        id: 3,
        title: "Article 3",
        body: "Learn more about this amazing topic in our third article.",
        imageUrl: "https://via.placeholder.com/600x300"
    }
];

const urlParams = new URLSearchParams(window.location.search);
const articleId = parseInt(urlParams.get('id'), 10);

function displayArticle() {
    try {
        const article = articles.find(a => a.id === articleId);
        if (!article) {
            throw new Error("Article not found.");
        }

        const articleHTML = `
            <div class="card">
                <img src="${article.imageUrl}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.body}</p>
                </div>
            </div>
        `;
        articleContainer.innerHTML = articleHTML;
    } catch (error) {
        articleContainer.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}

displayArticle();
