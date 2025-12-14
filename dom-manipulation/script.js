const { quotes, quotes } = require("./quotes");
const { quotes } = require("./quotes.1");


{
        const formDiv = document.createElement("div");


        const textInput = document.createElement("input");
        textInput.id = "newQuoteText";
        textInput.placeholder = "Enter a new quote";


        const categoryInput = document.createElement("input");
        categoryInput.id = "newQuoteCategory";
        categoryInput.placeholder = "Enter quote category";


        const addBtn = document.createElement("button");
        addBtn.textContent = "Add Quote";


        addBtn.addEventListener("click", () => {
            addQuote(textInput.value, categoryInput.value);
            textInput.value = "";
            categoryInput.value = "";
        });


        formDiv.appendChild(textInput);
        formDiv.appendChild(categoryInput);
        formDiv.appendChild(addBtn);


        document.body.appendChild(formDiv);
    }


// ===== FUNCTION: ADD QUOTE =====
(text, category) => {
    if (!text || !category) {
        alert("Please enter both quote and category");
        return;
    }


    quotes.push({ text, category });
    alert("Quote added successfully!");
}



// ===== EVENTS =====
newQuoteBtn.addEventListener("click",  showRandomQuote);


// ===== INITIAL SETUP =====
createAddQuoteForm();
const randomIndex = Math.floor(Math.random() * quotes.length);
const quote = quotes[randomIndex];
function displayRandomQuote() {
  quoteDisplay.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const textEl = document.createElement("p");
  textEl.textContent = `"${quote.text}"`;

  const categoryEl = document.createElement("small");
  categoryEl.textContent = `Category: ${quote.category}`;

  quoteDisplay.appendChild(textEl);
  quoteDisplay.appendChild(categoryEl);
}
function addQuote(text, category) {
  if (!text || !category) {
    alert("Please enter both quote and category");
    return;
  }

  quotes.push({
    text: text,
    category: category
  });
}
quotes.push({ text, category });
displayRandomQuote();
const newQuoteBtn = document.getElementById("newQuote");

newQuoteBtn.addEventListener("click", displayRandomQuote);
 {
        const formDiv = document.createElement("div");


        const textInput = document.createElement("input");
        textInput.id = "newQuoteText";
        textInput.placeholder = "Enter a new quote";


        const categoryInput = document.createElement("input");
        categoryInput.id = "newQuoteCategory";
        categoryInput.placeholder = "Enter quote category";


        const addBtn = document.createElement("button");
        addBtn.textContent = "Add Quote";


        addBtn.addEventListener("click", () => {
            addQuote(textInput.value, categoryInput.value);
            textInput.value = "";
            categoryInput.value = "";
        });


        formDiv.appendChild(textInput);
        formDiv.appendChild(categoryInput);
        formDiv.appendChild(addBtn);


        document.body.appendChild(formDiv);
    }


// ===== FUNCTION: ADD QUOTE =====
function addQuote(text, category) {
if (!text || !category) {
alert("Please enter both quote and category");
return;
}


quotes.push({ text, category });
alert("Quote added successfully!");
}


// ===== EVENTS =====
newQuoteBtn.addEventListener("click", showRandomQuote);


// ===== INITIAL SETUP =====
createAddQuoteForm();
function saveQuotes() {
  localStorage.setItem("dynamic_quotes", JSON.stringify(quotes));
}
quotes.push({ text, category });
saveQuotes();
function loadQuotes() {
  const savedQuotes = localStorage.getItem("dynamic_quotes");
  if (savedQuotes) {
    return JSON.parse(savedQuotes);
  }
  return [];
}
exports.loadQuotes = loadQuotes;


sessionStorage.setItem("lastQuote", JSON.stringify(quote));
function displayRandomQuote() {
  const quote = quotes[randomIndex];
  sessionStorage.setItem("lastQuote", JSON.stringify(quote));
}
const exportBtn = document.getElementById("exportQuotes");
exportBtn.addEventListener("click", exportToJsonFile);
function exportToJsonFile() {
  const jsonData = JSON.stringify(quotes, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();

  URL.revokeObjectURL(url);
}
function importFromJsonFile(event) {
  const fileReader = new FileReader();

  fileReader.onload = function (e) {
    try {
      const importedQuotes = JSON.parse(e.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert("Quotes imported successfully!");
    } catch {
      alert("Invalid JSON file");
    }
  };

  fileReader.readAsText(event.target.files[0]);
}
importInput.addEventListener("change", importFromJsonFile);
const importInput = document.getElementById("importFile");
importInput.addEventListener("change", importFromJsonFile);
function importFromJsonFile(event) {
  const fileReader = new FileReader();

  fileReader.onload = function (e) {
    try {
      const importedQuotes = JSON.parse(e.target.result);

      // Add imported quotes to existing quotes
      quotes.push(...importedQuotes);

      // Persist updated quotes
      saveQuotes();

      alert("Quotes imported successfully!");
    } catch (error) {
      alert("Invalid JSON file");
    }
  };

  fileReader.readAsText(event.target.files[0]);
}
// ===== STORAGE KEYS =====
const STORAGE_KEY = "dynamic_quotes";


// ===== LOAD QUOTES FROM LOCAL STORAGE =====
function loadQuotes() {
const savedQuotes = localStorage.getItem(STORAGE_KEY);
if (savedQuotes) {
return JSON.parse(savedQuotes);
}
return [];
}
exports.loadQuotes = loadQuotes;


// ===== SAVE QUOTES TO LOCAL STORAGE =====
function saveQuotes() {
localStorage.setItem(STORAGE_KEY, JSON.stringify(quotes));
}
let quotes = loadQuotes();


// Fallback default quotes
if (quotes.length === 0) {
quotes = [
{ text: "Believe in yourself", category: "Motivation" },
{ text: "Success is earned", category: "Success" }
];
saveQuotes();
}
const categoryFilter = document.getElementById("categoryFilter");
const FILTER_KEY = "selected_category";


function populateCategories() {
const categories = new Set();
quotes.forEach(q => categories.add(q.category));


// Reset dropdown
categoryFilter.innerHTML = '<option value="all">All Categories</option>';


categories.forEach(category => {
const option = document.createElement("option");
option.value = category;
option.textContent = category;
categoryFilter.appendChild(option);
});
}
function filterQuotes() {
const selectedCategory = categoryFilter.value;


// Save filter preference
localStorage.setItem(FILTER_KEY, selectedCategory);


quoteDisplay.innerHTML = "";


const filteredQuotes = selectedCategory === "all"
? quotes
: quotes.filter(q => q.category === selectedCategory);


if (filteredQuotes.length === 0) {
quoteDisplay.textContent = "No quotes in this category";
return;
}


filteredQuotes.forEach(quote => {
const p = document.createElement("p");
p.textContent = `"${quote.text}" (${quote.category})`;
quoteDisplay.appendChild(p);
});
}
localStorage.setItem("selected_category", selectedCategory);
