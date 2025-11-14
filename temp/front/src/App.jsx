import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>User Management System</h1>
      </header>
      <main className="app-content">
        <UserList />
      </main>
    </div>
  );
}

export default App;
