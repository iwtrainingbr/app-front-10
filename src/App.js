import {BrowserRouter, Routes, Route} from "react-router-dom";

import {ThemeProvider, createTheme} from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ListCategories from "./pages/Categories/ListCategories";
import Config from "./pages/Config";
import NotFound from "./pages/NotFound";
import RecoverPassword from "./pages/RecoverPassword";
import Login from "./pages/Login";
import Report from "./pages/Report";
import Register from "./pages/Register";
import Help from "./pages/Help";
import Test from "./pages/Test";
import AddCategory from"./pages/Categories/AddCategory";
import Fabricio from "./pages/Fabricio";
import Daniel from "./pages/Daniel";
import Hitalo from "./pages/Hitalo";
import Thiago from"./pages/Thiago";
import Alessandro from "./pages/Alessandro";
import AddMovement from "./pages/Movements/AddMovement";
import ListMovements from "./pages/Movements/ListMovements";
import Carrinho from "./pages/Carrinho";
import Stores from "./pages/Stores";

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#d9b431',
    }
  },
});

//Para que o programa funcione, é preciso importar e colocar o PATH
export default function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Navbar/>

        <div className="content">
          <Routes>
            <Route path="/config" element={<Config/>}/>
            <Route path="/recuperar-senha" element={<RecoverPassword/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/extrato" element={<Report/>}/>
            <Route path="/cadastro" element={<Register/>}/>
            <Route path="/ajuda" element={<Help/>}/>
            <Route path="/teste" element={<Test/>}/>
            <Route path="/categorias/nova" element={<AddCategory/>}/>
            <Route path="/categorias" element={<ListCategories/>}/>
            <Route path="/hitalo" element={<Hitalo/>}/>
            <Route path="/fabricio" element={<Fabricio/>}/>
            <Route path="/daniel" element={<Daniel/>}/>
            <Route path="/thiago" element={<Thiago/>}/>
            <Route path="/alessandro" element={<Alessandro/>}/>
            <Route path="/movimentacoes/add" element={<AddMovement/>}/>
            <Route path="/movimentacoes" element={<ListMovements/>}/>
            <Route path="/carrinho" element={<Carrinho/>}/>
            <Route path="/estabelecimentos" element={<Stores/>} />
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
