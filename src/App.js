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
import Fabricio from "./pages/Fabricio";
import Daniel from "./pages/Daniel";
import Hitalo from "./pages/Hitalo";
import Thiago from"./pages/Thiago";
import Alessandro from "./pages/Alessandro";
import ListMovements from "./pages/Movements/ListMovements";


import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

//Para que o programa funcione, é preciso importar e colocar o PATH
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
        <Route path="/hitalo" element={<Hitalo/>}/>
        <Route path="/fabricio" element={<Fabricio/>}/>
        <Route path="/daniel" element={<Daniel/>}/>
        <Route path="/thiago" element={<Thiago/>}/>
        <Route path="/alessandro" element={<Alessandro/>}/>
        <Route path="/movimentacoes" element={<ListMovements/>}/>


        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
