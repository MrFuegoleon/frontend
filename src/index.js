/*
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import CreateDO from "./pages/Coopt-Sponsorize-CreateDO/CreateDO/CreateDO";
import Sponsorize from "./pages/Coopt-Sponsorize-CreateDO/Sponsorize/Sponsorize";
import Welcome from "./pages/Coopt-Sponsorize-CreateDO/Welcome";
import DIOhomepage from "./pages/ExecutionBoard/MyFeed";
import ExecutionBoard from "./pages/ExecutionBoard/ExecutionBoard";
import Archives from "./pages/ExecutionBoard/Achievements";
import LoginPage from "./pages/Profile-Help-Login/login";
import Myprofile from "./pages/Profile-Help-Login/Myprofile";
import Coopt from "./pages/Coopt-Sponsorize-CreateDO/Coopt/Coopt";



import { TasksProvider } from "./pages/TasksContext";


export default function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="Welcome" element={<Welcome />} />
          <Route path="Homepage" element={<Homepage />} />
          <Route path="CreateDO" element={<CreateDO />} />
          <Route path="Sponsorize" element={<Sponsorize />} />
          <Route path="DIO" element={<DIOhomepage />} />
          <Route path="ExecutionBoard" element={<ExecutionBoard />} />
          <Route path="Archives" element={<Archives />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="Myprofile" element={<Myprofile />} />
          <Route path="Coopt" element={<Coopt />} />
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
