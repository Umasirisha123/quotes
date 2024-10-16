const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
 
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}


function newQuote() {
    loading();
   
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   
   if (!quote.author) {
    authorText.textContent = 'Unknown';
   } else {
    authorText.textContent = quote.author; 
   }
   
   if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
   } else {
    quoteText.classList.remove('long-quote');
   }
   
   quoteText.textContent = quote.text;
   complete();
}


async function getQuotes() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
        
    }
}

 

newQuoteBtn.addEventListener('click', newQuote);
 


getQuotes();