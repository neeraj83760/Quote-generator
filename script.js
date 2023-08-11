const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

// Get Quotes from API

let apiQuotes = []; 

// Show New Quote 

function newQuote(){
// Pick a random Quote from ApiQuotes array

const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

// Check wether an author feild is blank or not and replace it with Unkonwn

if(!quote.author){

    authorText.textContent = 'Unknown'
}
else {

    authorText.textContent = quote.author;
}

// Check Quote length to determine the styling
// In If statement we are adding and removing the CSS class 

if(quote.text.length > 30){

    quoteText.classList.add('long-quote') 
}

else{

    quoteText.classList.remove('long-quote')
}
    quoteText.textContent = quote.text;  


// console.log(quote); 
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

// Tweet a Quote : for that we need to visit the site called : https:// www.tiwtter.com/intent/tweet

// https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent

function tweetQuote(){

    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    
    window.open(twitterUrl, '_blank');

}

// Event Listeners 

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote); 



// onLoad

getQuotes();