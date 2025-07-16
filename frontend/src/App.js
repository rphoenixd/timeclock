import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import PunchLog from './components/PunchLog';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2>🕒 Timeclock SwipeStation Admin</h2>
        <nav className="my-3">
          <Link className="btn btn-primary me-2" to="/">Users</Link>
          <Link className="btn btn-secondary" to="/punches">Punch Logs</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/punches" element={<PunchLog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
