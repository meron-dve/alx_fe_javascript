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
exports.quotes = quotes;// Initial quotes
let quotes = [
    { text: "Stay hungry, stay foolish.", category: "Motivation" },
    { text: "Talk is cheap. Show me the code.", category: "Programming" },
    { text: "Success is not final; failure is not fatal.", category: "Motivation" }
];
const quoteDisplay = document.getElementById("quoteDisplay");
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { id: 1, text: "Stay hungry, stay foolish.", category: "Motivation" },
    { id: 2, text: "Talk is cheap. Show me the code.", category: "Programming" }
];

