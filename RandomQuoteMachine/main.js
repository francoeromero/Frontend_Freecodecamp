import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const quoteData = [
  { text: `'The purpose of our lives is to be happy'`, author: 'Dalai Lama' },
  { text: `'Life is what happens when you are busy making other plans'`, author: 'John Lennon' },
  { text: `'Get busy living or get busy dying.'`, author: 'Stephen King' },
  { text: `'You only live once, but if you do it right, once is enough'`, author: 'Mae West' },
  { text: `'Many of life s failures are people who did not realize how close they were to success when they gave up'`, author: 'Thomas A. Edison' },
];

//componente QuoteBox <QuoteBox/>
//estructura de elementos html
const QuoteBox = ({ quote, handleNewQuote }) => (
	<div id='quote-box'>
    <p id='text'>{quote.text}</p>
    <h2 id='author'>{quote.author}</h2>
    <div className='actions'>
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
//random
const getRandomIndex = () =>
	Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);

//random color
const getRandomColor = () => {
  return Math.floor(Math.random() * 4) + 1;
};

//componente App <App/>
const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const [colorChange, setColorChange] = React.useState(false);
 	const [currentColor, setCurrentColor] = React.useState(getRandomColor());

  const handleNewQuote = () =>{
    setQuote(quoteData[getRandomIndex()]);
    setColorChange(true);
    setCurrentColor(getRandomColor()); 
  };
  return (
    <div className={`main color-${currentColor} ${colorChange ? 'color-change' : ''}`}>
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  ); 
};
//(componente , seleccion del elemento DOM)
ReactDOM.render(<App />, document.querySelector('#app'))

















// import React from 'https://esm.sh/react@18.2.0';
// import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

// const quoteData = [
//   { text: `'The purpose of our lives is to be happy'`, author: 'Dalai Lama' },
//   { text: `'Life is what happens when you are busy making other plans'`, author: 'John Lennon' },
//   { text: `'Get busy living or get busy dying.'`, author: 'Stephen King' },
//   { text: `'You only live once, but if you do it right, once is enough'`, author: 'Mae West' },
//   { text: `'Many of life s failures are people who did not realize how close they were to success when they gave up'`, author: 'Thomas A. Edison' },
// ];

// //componente QuoteBox <QuoteBox/>
// //estructura de elementos html
// const QuoteBox = ({ quote, handleNewQuote }) => (
// 	<div id='quote-box'>
//     <p id='text'>{quote.text}</p>
//     <h2 id='author'>{quote.author}</h2>
//     <div className='actions'>
//       <button
//         id='new-quote'
//         class='button'
//         onClick={handleNewQuote}
//         >
//         New Quote
//       </button>
//       <a
//         href='https://twitter.com/intent/tweet'
//         id='tweet-quote'
//         target='_blank'
//         >
//       Tweet
//       </a>
//     </div>
//   </div>
// );
// //random
// const getRandomIndex = () =>
// 	Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);

// //componente App <App/>
// const App = () => {
//   const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
//   const handleNewQuote = () =>{
//     setQuote(quoteData[getRandomIndex()])
//   }
//   return (
//     <div className='main'>
//       <QuoteBox quote={quote} handleNewQuote={handleNewQuote}/>
//     </div>
//   ); 
// };
// //(componente , seleccion del elemento DOM)
// ReactDOM.render(<App />, document.querySelector('#app'))
