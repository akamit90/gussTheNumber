import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [user, setUser] = useState('');
  const [result, setResult] = useState(null);

  const generateRandomNumber = () => {
    const a = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(a);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const check = () => {
    const userNumber = parseInt(user, 10);
    if (userNumber === randomNumber) {
      setResult('won');
    } else {
      setResult('loss');
    }
  };
  console.log({ randomNumber }); // Move the console.log here

  return (
    <>
      <h1>Guess the number </h1>
      <h1>
        <input
          type="number"
          placeholder="Enter a number here up to 100"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </h1>
      <button onClick={check}>Click</button>
      <div>Result: {result}</div>
    </>
  );
}

export default App;
