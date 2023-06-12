import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

//componente QuoteBox <QuoteBox/>
//estructura de elementos html
const QuoteBox = ({ quote, handleNewQuote }) => (
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
//componente App <App/>
const App = () => {
  const [quote, setQuote] = React.useState({ text: 'Hello world', author: 'Mahammed'})
  const handleNewQuote = () =>{
    
  }
  return (
    <div className='main'>
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote}/>
    </div>
  ); 
};
//(nombre de la variable , seleccion del elemento html)
ReactDOM.render(<App />, document.querySelector('#app'))
