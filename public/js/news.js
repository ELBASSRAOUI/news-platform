// Fonction pour récupérer les derniers articles
async function fetchLatestNews() {
    try {
        const response = await fetch('/api/news'); // Assurez-vous que cette route est correcte
        const data = await response.json();
        
        if (response.ok) {
            displayNews(data.posts); // Affiche les articles récupérés
        } else {
            showError('Erreur lors du chargement des articles');
        }
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les articles');
    }
}

// Fonction pour afficher les articles
function displayNews(news) {
    const container = document.getElementById('news-container');
    container.innerHTML = '';  // Vider le conteneur avant de l'afficher

    if (news.length === 0) {
        container.innerHTML = '<p>Aucun article disponible.</p>';
        return;
    }

    news.forEach(article => {
        const articleHTML = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${article.imageUrl}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.body}</p>
                        <a href="/news/${article.id}" class="btn btn-primary">Lire la suite</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += articleHTML;
    });
}

// Fonction pour afficher les erreurs
function showError(message) {
    const errorContainer = document.getElementById('error-message');
    errorContainer.innerHTML = `<div class="alert alert-danger">${message}</div>`;
}

// Appeler la fonction pour récupérer et afficher les articles à chaque chargement de la page
document.addEventListener('DOMContentLoaded', fetchLatestNews);
