const { quotes } = require("./quotes");

const quotes = [
    // ===== FUNCTION: SHOW RANDOM QUOTE =====
    function showRandomQuote() {
        quoteDisplay.innerHTML = ""; // clear previous content


        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];


        const quoteText = document.createElement("p");
        quoteText.textContent = `"${quote.text}"`;


        const quoteCategory = document.createElement("small");
        quoteCategory.textContent = `Category: ${quote.category}`;


        quoteDisplay.appendChild(quoteText);
        quoteDisplay.appendChild(quoteCategory);
    }()
];
exports.quotes = quotes;
