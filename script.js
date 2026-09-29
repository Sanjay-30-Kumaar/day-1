const quoteButton = document.querySelector("#quote-button");
const quoteText = document.querySelector("#quote-text");

quoteButton.addEventListener("click", async () => {

    quoteText.textContent = "Loading...";

    try {

        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteText.textContent =
            `"${data.quote}" — ${data.author}`;

    } catch (error) {

        quoteText.textContent =
            "Unable to load a quote. Please try again.";

        console.error(error);
    }
});