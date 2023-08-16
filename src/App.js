import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Fungsi untuk mengambil kutipan acak dari API
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const data = response.data;
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []); // Menggunakan useEffect untuk mengambil kutipan saat komponen dimuat

  // Fungsi untuk mengganti kutipan
  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <div className="quote-container">
        <blockquote>
          <p>{quote}</p>
          <cite>- {author}</cite>
        </blockquote>
        <button onClick={handleNewQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
