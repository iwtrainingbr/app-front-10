import {useState} from "react";
import {Button} from "@mui/material";

export default function Alessandro() {
  const [quantity, setQuantity] = useState(0);
  const [visibility, setVisibility] = useState(true);

  const decrement = () => {
    if (quantity === 0) {
      return;
    }

    setQuantity(quantity - 1);
  }

  const add = () => {
    if (quantity === 10) {
      return;
    }

    setQuantity(quantity + 1);
  }


  return (
    <div>
      Bem vindo, Alessandro

      <hr/>
      <div hidden={!visibility}>
        Alguma coisa
      </div>
      <Button onClick={() => setVisibility(!visibility)}>
        { visibility === true ? "Ocultar" : "Mostrar" }
      </Button>
      <hr/>

      <br/>
      <Button variant="outlined" onClick={decrement}>-</Button>
      {quantity}
      <Button variant="outlined" onClick={add}>+</Button>

    </div>
  )
}
