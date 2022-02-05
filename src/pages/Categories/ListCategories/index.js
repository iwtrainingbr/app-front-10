import {useState, useEffect} from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";

import {Fab, Card, Alert, CardContent, Button, Snackbar} from "@mui/material";
import {Add} from "@mui/icons-material";

import "./styles.css";

export default function Categories() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [data, setData] = useState ([]);
  const [message, setMessage] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [dataBackup, setDataBackup] = useState([]);
  const [idToRemove, setIdToRemove] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
      fetch('http://localhost:8000/categories')
        .then(response => response.json())
        .then(response => setData(response));
  }, []);


  const actionButtonStyle = {
    position: 'absolute',
    right: 16,
    bottom: 16
  };

  const removeCategory = (id) => {
    setMessage(true);
    setCancel(false);

    //guarda a categoria a ser removida, pra qualquer coisa adicionar depois de novo
    setDataBackup(JSON.parse(JSON.stringify(data)));

    //remove temporariamente da tela
    setData(
      data.filter(category => category.id !== id)
    );

    setIdToRemove(id);
  }

  const confirmRemove = () => {
    setMessage(false);

    if (cancel === true) {
      return;
    }

    fetch('http://localhost:8000/categories/'+idToRemove, {
      method: 'DELETE'
    });
  }

  const cancelRemove = () => {
    setCancel(true);
    setMessage(false);


    setData(dataBackup);
    setDataBackup([]);
  }

  const CategoryItem = (props) => {
    return (
        <ListItem
          secondaryAction={
            <IconButton data-cy={"remove-cat-" + props.data.id} onClick={() => removeCategory(props.data.id)} edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={props.data.name}
            secondary={""}
          />
        </ListItem>
    )
  }

  return(
    <div>

    <Snackbar
      open={message}
      autoHideDuration={6000}
      onClose={() => confirmRemove()}
      message="Categoria excluída"
      action={
        <Button color="secondary" onClick={() => cancelRemove()}>DESFAZER</Button>
      }
    />

      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Categorias
          </Typography>
          <hr/> {/* Final da parte superior */}

          <Card className={message && 'backgroundDark'}>
            <CardContent>
              <List dense={dense}>
                {data.map((categoryData) => (<CategoryItem data={categoryData}/>))}
              </List>
            </CardContent>
          </Card>


        </Grid>
      </Grid>

      <Fab data-cy="add-categories" onClick={() => navigate('/categorias/nova')} sx={actionButtonStyle} color="primary">
        <Add/>
      </Fab>

    </div>
  )
}
