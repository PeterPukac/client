import React, {useEffect, useState} from 'react';
import AddAcount from './AddAcount';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <AddAcount/>
    </div>
  );
}

export default App;
