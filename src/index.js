import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Students from "./Students"
import Student from './Student';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './Test';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="students" element={<Students />}>
          <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a student</p>
                </main>
              }
            />
            <Route path=":myStuName" element={<Student />} />
            
          </Route>
          <Route path="dogs" element={<Test/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

