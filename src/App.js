import AddAcount from './AddAcount';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import DataLoader from './DataLoader';
import Navbar from './Navbar';
import Main from './Main';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path="/list" element={<DataLoader/>} />
        <Route path="/" element={<Main/>} />
        <Route path="addAccount" element={<AddAcount/>} />
      </Routes>

    </div>
  );
}

export default App;
