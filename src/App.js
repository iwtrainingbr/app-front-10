import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Config from "./pages/Config";
import NotFound from "./pages/NotFound";
import RecoverPassword from "./pages/RecoverPassword";
import Login from "./pages/Login";
import Report from "./pages/Report";
import Register from "./pages/Register";
import Help from "./pages/Help";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      Aqui vai o navbar

      <Routes>
        <Route path="/config" element={<Config/>}/>
        <Route path="/recuperar-senha" element={<RecoverPassword/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/relatorio" element={<Report/>}/>
        <Route path="/cadastro" element={<Register/>}/>
        <Route path="ajuda" element={<Help/>}/>
          
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
