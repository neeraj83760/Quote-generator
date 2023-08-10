// Get Quotes from API

let apiQuotes = []; 

// Show New Quote 

function newQuote(){
// Pick a random Quote from ApiQuotes array

const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

console.log(quote); 
}

async function getQuotes() {

    const apiUrl = 'https://type.fit/api/quotes';

    try {

    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    
    newQuote();
    // console.log(apiQuotes); 
        
    } catch (error) {
        
        // Catch Error here 
        

    }

}

// onLoad

getQuotes();