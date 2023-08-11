//  REst API : here we use a websire called : https://api.forismatic.com/1.0/

// Get quote from an API 

async function getQuote() {
    
    // the fetch api request we are requesting follows the CORS policy, that
    // means by default you call an API from origin (in our case it a localhost : http:127.0.0.1:5500 )
    // by default this will not work it been blocked so when u use free apis it happens coz 
    // 'forimastic' api might not be properly configured to send CORS headers to allow this 
    // work on most of the APIs , there is solution .. around this we first request 
    // proxy API first 
    
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/' // this option is set up for everybody to use
    // but we can also set up our Own proxy server ...coz somethimes it might be down so better
    // to make our own proxy server 

    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'


    try { 

    const response = await fetch(proxyUrl + apiUrl); 
    const data = await response.json(); 
    console.log(data);  
        
    } catch (error) {
        // getQuote();
        console.log('Woops no Quote', error); 
        
    }

}

// Onload

getQuote(); 

