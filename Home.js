// HomePage.js
import React, { useState } from 'react';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Home Page</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Add a movie or book" 
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
