import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Config from "./pages/Config";
import NotFound from "./pages/NotFound";
import RecoverPassword from "./pages/RecoverPassword";
import Login from "./pages/Login";
import Report from "./pages/Report";
import Register from "./pages/Register";
import Help from "./pages/Help";
import Test from "./pages/Test";
import AddCategory from"./pages/Categories/AddCategory";
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/config" element={<Config/>}/>
        <Route path="/recuperar-senha" element={<RecoverPassword/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/relatorio" element={<Report/>}/>
        <Route path="/cadastro" element={<Register/>}/>
        <Route path="/ajuda" element={<Help/>}/>
        <Route path="/teste" element={<Test/>}/>
        <Route path="/categorias/nova" element={<AddCategory/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
