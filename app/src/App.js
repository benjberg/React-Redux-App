import React from 'react';

import './App.css';
import  QuoteForm  from './components/quoteForm';
import QuoteList from './components/QuoteList';

function App() {
  return (
    <div className="App">
      <h1>Ron Swanson quote generator</h1>
      <QuoteForm />
      <QuoteList />
     <div>
      <img src='./assets/ron.PNG' alt='ron swanson mininaml'/>  </div>
    </div>
  );
}

export default App;
