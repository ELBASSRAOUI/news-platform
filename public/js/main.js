// Fonction pour récupérer et afficher les derniers articles
async function fetchLatestNews() {
    try {
        const response = await fetch('/api/news'); // Remplacez par l'URL réelle de votre API
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.posts && data.posts.length > 0) {
            displayNews(data.posts);
        } else {
            showError("Aucun article disponible pour le moment.");
        }
    } catch (error) {
        console.error('Erreur:', error);
        showError("Impossible de charger les articles. Veuillez réessayer plus tard.");
    }
}

// Fonction pour afficher les articles dans la page
function displayNews(news) {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Vider le conteneur avant d'ajouter de nouveaux articles

    news.forEach((post) => {
        // Création d'une colonne pour chaque article
        const col = document.createElement('div');
        col.className = 'col-md-4';

        // Structure de la carte Bootstrap pour l'article
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${post.image}" class="card-img-top" alt="${post.title}">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.summary}</p>
                    <a href="${post.link}" class="btn btn-primary">Lire la suite</a>
                </div>
            </div>
        `;

        // Ajout de la colonne dans le conteneur
        container.appendChild(col);
    });
}

// Fonction pour afficher un message d'erreur
function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;  // Met à jour le texte du message d'erreur
    errorDiv.style.display = 'block'; // Affiche l'alerte d'erreur
}

// Fonction pour récupérer et afficher les derniers articles
async function fetchLatestNews() {
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'block'; // Afficher le spinner de chargement

    try {
        const response = await fetch('/api/news');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des articles');
        }
        const data = await response.json();
        displayNews(data.posts);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les articles');  // Affiche l'erreur
    } finally {
        spinner.style.display = 'none'; // Masque le spinner de chargement
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', fetchLatestNews);
