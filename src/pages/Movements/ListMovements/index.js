import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Fab, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";
import {
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function ListMovements () {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8000/movements')
        .then(response => response.json())
        .then(response => setData(response));
  }, []);

    const actionButtonStyle = {
      position: 'absolute',
      right: 16,
      bottom: 16
    };

    const MovementItem = (props) => {
      return (
        <ListItem  secondaryAction = {<Typography color={props.data.type === 'in'? 'green' : 'error'}>{props.data.price}</Typography>}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItem  secondaryAction = {<Typography>{props.data.description}</Typography>}>
            <Divider/>
          </ListItem>
        </ListItem>
      );
    };


    return (
      <div>
          <h2 align="center"> - Movimentações - </h2>

          <Divider/>

          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {data.map((movementData) => (<MovementItem data= {movementData}/>))}
          </List>


          <Fab onClick={() => navigate('/movimentacoes/add')} sx={actionButtonStyle} color="primary">
            <Add/>
          </Fab>
      </div>
  )
}
