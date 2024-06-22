import { useState } from 'react'
import Form from './components/Form/Form';
import Pincode from './components/Pincode/Pincode';
import Loader from './components/Loader/Loader';
import './App.css'

function App() {
  const [pincode, setPincode] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPincodeDetails = async (pincode) => {
    if (pincode.length !== 6) {
      setError('Pincode must be 6 digits');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const result = await response.json();
      if (result[0].Status === 'Error') {
        setError(result[0].Message);
        setData(null);
      } else {
        setData(result[0].PostOffice);
      }
    } catch (err) {
      setError('Something went wrong!');
      setData(null);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <Form setPincode={setPincode} fetchPincodeDetails={fetchPincodeDetails} />
      {loading && <Loader />}
      {error && <div className="error">{error}</div>}
      {data && <Pincode data={data} />}
    </div>
  );
}

export default App
