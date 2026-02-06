import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Routine from './pages/Routine';
import Recruitment from './pages/Recruitment';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { Usuario } from './types';

function App() {
  const [currentUser, setCurrentUser] = useState<Usuario | null>(null);

  if (!currentUser) {
    return <Login onLogin={setCurrentUser} />;
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar user={currentUser} onLogout={() => setCurrentUser(null)} />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard user={currentUser} />} />
            <Route path="/routine" element={<Routine user={currentUser} />} />
            <Route path="/recruitment" element={<Recruitment user={currentUser} />} />
            <Route path="/admin" element={<Admin user={currentUser} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
