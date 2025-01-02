document.getElementById("create-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    const errorMessageContainer = document.getElementById("error-message");

    // Simple validation to check if both title and body are filled
    if (!title || !body) {
        showError("Both title and body are required.");
        return;
    }

    // Simulate article creation (e.g., saving to database or sending to API)
    const newArticle = {
        title: title,
        body: body
    };

    // For demonstration, log the new article object
    console.log("Article created:", newArticle);

    // Optionally, you can redirect the user to the articles page or display a success message
    alert("Article created successfully!");

    // Reset the form fields
    document.getElementById("create-form").reset();
});

// Function to display error message
function showError(message) {
    const errorMessageContainer = document.getElementById("error-message");
    errorMessageContainer.textContent = message;
    errorMessageContainer.style.color = 'red';
}
