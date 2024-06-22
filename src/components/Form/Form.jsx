import React, { useState } from 'react';

const Form = ({ setPincode, fetchPincodeDetails }) => {
    const [input, setInput] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setPincode(input);
      fetchPincodeDetails(input);
    };
  
    return (
      <form onSubmit={handleSubmit} className="pincode-form">
        <label>Enter Pincode</label>
        <input
          type="text"
          placeholder="Pincode"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Lookup</button>
      </form>
    );
}

export default Form