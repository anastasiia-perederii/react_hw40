import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import UserList from './pages/UserList';
import Album from './pages/Album';
import Photos from './pages/Photos';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/album/:userId" element={<Album />} />
          <Route path="/photos/:albumId" element={<Photos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
