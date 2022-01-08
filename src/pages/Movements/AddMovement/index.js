import * as React from 'react';

import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,  
} from '@mui/material';




export default function AddMovement() {
  const [categ, setCateg] = React.useState('');

  const handleChange = (event) => {
    setCateg(event.target.value);
  };
  return (
    <div>
    <br/>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categ}
            label="Categoria"
            onChange={handleChange}
          >
            <MenuItem value={10}>Mercado</MenuItem>
            <MenuItem value={20}>Serviços</MenuItem>
            <MenuItem value={30}>Veículos</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Valor (R$)" variant="outlined" size="small" />
      </Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">Tipo de Movimentação</FormLabel>
        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel value="in" control={<Radio />} label="Entrada" />
          <FormControlLabel value="out" control={<Radio />} label="Saída" />
        </RadioGroup>
      </FormControl>
      <br/>
      <Button variant="contained" disableElevation>
        Adicionar
      </Button>
    </div>
  );
}
