import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AddBookmark from './Pages/AddBookmark.jsx';
import EditBookmark from './Pages/EditBookmark.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route index element={<App />} />
        <Route path='/add' element={<AddBookmark />} />
        <Route path='/edit/:id' element={<EditBookmark />} />
      </Routes>
    </React.StrictMode>,
  </BrowserRouter>
)
