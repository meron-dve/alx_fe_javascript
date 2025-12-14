const { quotes } = require("./quotes");
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
