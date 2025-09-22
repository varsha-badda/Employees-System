import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthContext1 from './context/AuthContext1.jsx';
import TaskContext1 from './context/TaskContext1.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext1>
      <TaskContext1>
        <App />
      </TaskContext1>
    </AuthContext1>
  </React.StrictMode>
);