import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import img from "./img/404.svg";

export default function NotFound() {
  return (
    <div align="center">
      <br/>
      <img width="80%" src={img}/>

      <p className="mt-5">Ops, a página não foi encontrada.</p>

      <Button variant="contained" color="secondary">Teste</Button>

      <Link to="/">Voltar pro inicio</Link>
    </div>
  )
}
