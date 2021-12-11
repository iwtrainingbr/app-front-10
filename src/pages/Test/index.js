import {TextField, Button, Divider, Switch} from "@mui/material";

export default function Test() {
  return (
    <div style={{marginTop: 100}}>

      <Divider/>

      <TextField label="Nome"/>

      <br/><br/>

      <Switch/>
      <input type="checkbox"/> 

      <br/><br/>

      <Button color="secondary" size="large" variant="contained">ENTRAR</Button>
    </div>
  )
}
