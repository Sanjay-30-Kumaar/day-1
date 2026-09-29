const quoteButton = document.querySelector("#quote-button");
const quoteText = document.querySelector("#quote-text");

quoteButton.addEventListener("click", async () => {

    quoteButton.disabled = true;
    quoteButton.textContent = "Loading...";
    quoteText.textContent = "Fetching a quote...";

    try {

        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        if (!response.ok) {
            throw new Error(
                `API request failed: ${response.status}`
            );
        }

        const data = await response.json();

        if (!data.quote || !data.author) {
            throw new Error("Invalid quote data received");
        }

        quoteText.textContent =
            `"${data.quote}" — ${data.author}`;

    } catch (error) {

        quoteText.textContent =
            "Unable to load a quote. Please try again.";

        console.error("Quote API error:", error);

    } finally {

        quoteButton.disabled = false;
        quoteButton.textContent = "Get Random Quote";

    }
});