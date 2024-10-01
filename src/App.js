import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';

export default function App() {
  return (
  
    <BrowserRouter basename='Shiatsunagomi_repo'>
      <Routes>
        <Route index element={<Home/>}/> 
      </Routes>
    </BrowserRouter>
  )
}
