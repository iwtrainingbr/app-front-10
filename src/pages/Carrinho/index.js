import {useState} from "react";
import {Button, Divider} from "@mui/material";

export default function Carrinho() {
  const [quantity, setQuantity] = useState(1);

  function add () {
    setQuantity(quantity + 1);
  }

  function remove () {
    setQuantity(quantity - 1);
  }


  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <Divider/>
      <br/>

      <Button onClick={remove} variant="outlined">-</Button>
      {quantity}
      <Button onClick={add} variant="outlined">+</Button>
    </div>
  )
}
