import React, { useState, useEffect } from 'react';
import './app.css';
import Dropdown from './drodown/dropdown';
const App = () => {

  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };


  const roundOptions = ['', 'Jeopardy!', 'Double Jeopardy!', 'Final Jeopardy!'];
  const valuesOptions = ['', '$200', '$400', '$600', '$800', '$1000', '$1200'];

  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = () => {
    if (!selectedPrice || !selectedCategory) {
      alert('Please select both price and category.');
      return;
    }

    const priceValue = selectedPrice.replace('$', '');
    const query = new URLSearchParams({
      price: priceValue,
      category: selectedCategory
    });

    fetch(`/api/items?${query.toString()}`)
      .then(res => res.json())
      .then(data => {
        console.log('API response:', data);
        // You can store this in state and render it
      })
      .catch(error => {
        console.error('API error:', error);
      });
  };

  return (

    <div className='app-container'>
      <h2 className="title">Jeaopardy!</h2>
      <Dropdown
        label='Round selector:'
        options={roundOptions}
        onSelect={handleSelect}
      />

      <Dropdown
        label='Value selector:'
        options={valuesOptions}
        onSelect={handleSelect}
      />
       <button onClick={handleSearch}>Get question</button>
    </div>
  );
}

export default App;
