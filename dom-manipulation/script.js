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
(document.getElementById("newQuote")).addEventListener("click",  showRandomQuote);


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

(document.getElementById("newQuote")).addEventListener("click", displayRandomQuote);
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
(document.getElementById("newQuote")).addEventListener("click", showRandomQuote);


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
const FILTER_KEY = "selected_category";


function populateCategories() {
const categories = new Set();
quotes.forEach(q => categories.add(q.category));


// Reset dropdown
    (document.getElementById("categoryFilter")).innerHTML = '<option value="all">All Categories</option>';


categories.forEach(category => {
const option = document.createElement("option");
option.value = category;
option.textContent = category;
    (document.getElementById("categoryFilter")).appendChild(option);
});
}
function filterQuotes() {
const selectedCategory = (document.getElementById("categoryFilter")).value;


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
function populateCategories() {
  const categories = new Set();
  quotes.forEach(q => categories.add(q.category));

  (document.getElementById("categoryFilter")).innerHTML = '<option value="all">All Categories</option>';

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    (document.getElementById("categoryFilter")).appendChild(option);
  });
}
const categories = new Set();
quotes.forEach(q => categories.add(q.category));
(document.getElementById("categoryFilter")).appendChild(option);
function filterQuotes() {
  const selectedCategory = (document.getElementById("categoryFilter")).value;
  localStorage.setItem("selected_category", selectedCategory);

  quoteDisplay.innerHTML = "";

  const filteredQuotes = selectedCategory === "all"
    ? quotes
    : quotes.filter(q => q.category === selectedCategory);

  filteredQuotes.forEach(quote => {
    const p = document.createElement("p");
    p.textContent = `"${quote.text}" (${quote.category})`;
    quoteDisplay.appendChild(p);
  });
}
quotes.filter(q => q.category === selectedCategory);
quoteDisplay.innerHTML = "";
quoteDisplay.appendChild(p);
localStorage.setItem("selected_category", selectedCategory);
function restoreLastFilter() {
  const savedFilter = localStorage.getItem("selected_category");
  if (savedFilter) {
    (document.getElementById("categoryFilter")).value = savedFilter;
  }
  filterQuotes();
}
populateCategories();
restoreLastFilter();
// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const categoryFilter = document.getElementById("categoryFilter");
const newQuoteBtn = document.getElementById("newQuote");

/* -------------------------------
   Populate Categories
--------------------------------*/
function populateCategories() {
  const categories = new Set(quotes.map(q => q.category));

  (document.getElementById("categoryFilter")).innerHTML = `<option value="all">All Categories</option>`;

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    (document.getElementById("categoryFilter")).appendChild(option);
  });
}

/* -------------------------------
   Filter Quotes
--------------------------------*/
function filterQuotes() {
  const selectedCategory = (document.getElementById("categoryFilter")).value;

  // Save selected category
  localStorage.setItem("selectedCategory", selectedCategory);

  quoteDisplay.innerHTML = "";

  const filteredQuotes =
    selectedCategory === "all"
      ? quotes
      : quotes.filter(q => q.category === selectedCategory);

  filteredQuotes.forEach(q => {
    const p = document.createElement("p");
    p.textContent = `"${q.text}" (${q.category})`;
    quoteDisplay.appendChild(p);
  });
}

/* -------------------------------
   Restore Last Selected Category
--------------------------------*/
function restoreLastCategory() {
  const savedCategory = localStorage.getItem("selectedCategory");
  if (savedCategory) {
    (document.getElementById("categoryFilter")).value = savedCategory;
  }
  filterQuotes();
}

/* -------------------------------
   Event Listeners
--------------------------------*/
(document.getElementById("categoryFilter")).addEventListener("change", filterQuotes);

(document.getElementById("newQuote")).addEventListener("click", () => {
  filterQuotes();
});

/* -------------------------------
   Initialize App
--------------------------------*/
populateCategories();
restoreLastCategory();
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const notification = document.createElement("div");
document.body.prepend(notification);

/* -----------------------------
   Save to Local Storage
------------------------------*/
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

/* -----------------------------
   Display Quotes
------------------------------*/
function displayQuotes(data = quotes) {
  quoteDisplay.innerHTML = "";
  data.forEach(q => {
    const p = document.createElement("p");
    p.textContent = `"${q.text}" (${q.category})`;
    quoteDisplay.appendChild(p);
  });
}

/* -----------------------------
   Fetch Quotes From Server
------------------------------*/
async function fetchServerQuotes() {
  const response = await fetch(API_URL);
  const serverData = await response.json();

  // Convert server posts to quote format
  return serverData.slice(0, 5).map(post => ({
    id: post.id,
    text: post.title,
    category: "Server"
  }));
}

/* -----------------------------
   Sync Logic (Server Wins)
------------------------------*/
async function syncQuotes() {
  const serverQuotes = await fetchServerQuotes();
  let conflictDetected = false;

  serverQuotes.forEach(serverQuote => {
    const localIndex = quotes.findIndex(q => q.id === serverQuote.id);

    if (localIndex === -1) {
      quotes.push(serverQuote);
    } else {
      conflictDetected = true;
      quotes[localIndex] = serverQuote; // server takes precedence
    }
  });

  saveQuotes();
  displayQuotes();
  notify(conflictDetected
    ? "⚠️ Conflicts detected. Server data applied."
    : "✅ Quotes synced successfully.");
}

/* -----------------------------
   Notification System
------------------------------*/
function notify(message) {
  notification.textContent = message;
  notification.style.background = "#222";
  notification.style.color = "#fff";
  notification.style.padding = "10px";
  setTimeout(() => notification.textContent = "", 4000);
}

/* -----------------------------
   Manual Conflict Resolution
------------------------------*/
function manualResolve() {
  if (confirm("Reload server data and overwrite local quotes?")) {
    syncQuotes();
  }
}

/* -----------------------------
   Periodic Sync (Every 30s)
------------------------------*/
setInterval(syncQuotes, 30000);

/* -----------------------------
   Initialize
------------------------------*/
displayQuotes();

