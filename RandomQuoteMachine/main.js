import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

//funcion 1 <QuoteBox/>
const QuoteBox = () => (
	<div id='quote-box'>
    <p id='text'>{quote.text}</p>
    <h2 id='author'>{quote.author}</h2>
    <div class='actions'>
      <button
        id='new-quote'
        class='button'
        onClick={handleNewQuote}
        >
        New Quote
      </button>
      <a
        href='https://twitter.com/intent/tweet'
        id='tweet-quote'
        target='_blank'
        >
      Tweet
      </a>
    </div>
  </div>
);
//funcion 2 <App/>
const App = () => (
  <div class='main'>
  	<QuoteBox/>
  </div>
);
//(nombre de la variable , seleccion del elemento html)
ReactDOM.render(<App/>, document.querySelector('#app'))