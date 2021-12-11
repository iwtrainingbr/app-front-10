import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./pages/Login";
import Report from "./pages/Report";
import Config from "./pages/Config";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      Aqui vai o navbar

      <Routes>
        <Route path="/config" element={<Config/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/relatorios" element={<Report/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
