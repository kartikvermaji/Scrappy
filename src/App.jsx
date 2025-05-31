import { BrowserRouter, Navigate, Routes, Route, Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Community from "./pages/Community";
import Service from "./pages/Service";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/> }/>
        <Route path="/about" element={<About/> }/>
        <Route path="/services" element={<Service/> }/>
        <Route path="/community" element={<Community/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
