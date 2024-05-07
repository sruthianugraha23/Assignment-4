// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login'; // Correct import
import BookList from './Bookllist.js'; // Correct import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/BookList" element={<BookList />} />
      </Routes>
    </Router>
  );
};

export default App;
