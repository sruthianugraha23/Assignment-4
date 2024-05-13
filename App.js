import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './login';
import HomePage from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        
              <Link to="/"></Link>
            
             
            

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
