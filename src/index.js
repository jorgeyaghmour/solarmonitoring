import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginform from "./components/Login/loginform";
import Dashboard from "./pages/Dashboard";
import Navbar from './components/Navbar';
import Alerts from './pages/Alerts';
import Weather from './pages/Weather';
import Account from './pages/Account';

ReactDOM.render(
<React.StrictMode>
    <App/>
</React.StrictMode>,
document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<App />} />
        <Route path="Loginform" element={<Loginform/>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="weather" element={<Weather />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
