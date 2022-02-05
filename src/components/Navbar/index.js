import * as React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Divider, Drawer, List, ListItem, ListItemText, ListItemIcon} from "@mui/material";
import {Home, TrendingUp, Article, Paid, Settings, Logout, Favorite} from "@mui/icons-material";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import StoreIcon from "@mui/icons-material/Store";


export default function Navbar() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sidebar, setSidebar] = React.useState(false);

  const redirect = (url) => {
    navigate(url);
    setSidebar(false);
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer open={sidebar} onClose={() => setSidebar(false)}>
        <div align="center" style={{padding: 5}}>
          <img width="40%" src="/img/logo.png" alt="Logo"/>
        </div>
        <Divider/>

        <List>
          <ListItem button onClick={() => redirect('/')}>
            <ListItemIcon><Home/></ListItemIcon>
            <ListItemText>Inicio</ListItemText>
          </ListItem>
          <ListItem button onClick={() => redirect('/movimentacoes')}>
            <ListItemIcon><TrendingUp/></ListItemIcon>
            <ListItemText>Movimentações</ListItemText>
          </ListItem>
          <ListItem button onClick={() => redirect('/config')}>
            <ListItemIcon><Settings/></ListItemIcon>
            <ListItemText>Config</ListItemText>
          </ListItem>
          <ListItem button onClick={() => redirect('/extrato')}>
            <ListItemIcon><Paid/></ListItemIcon>
            <ListItemText>Extrato</ListItemText>
          </ListItem>
          <ListItem button onClick={() => redirect('/categorias')}>
            <ListItemIcon><Article/></ListItemIcon>
            <ListItemText>Categorias</ListItemText>
          </ListItem>

          <ListItem button onClick={() => redirect('/estabelecimentos')}>
            <ListItemIcon><StoreIcon/></ListItemIcon>
            <ListItemText>Estabelecimentos</ListItemText>
          </ListItem>

          <Divider/>
          <ListItem data-cy="item-logout" button onClick={() => redirect('/login')} style={{color: 'red'}}>
            <ListItemIcon><Logout style={{color: 'red'}}/></ListItemIcon>
            <ListItemText>Sair</ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            data-cy="menu"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setSidebar(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minhas Finanças
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="/config">
                  <MenuItem onClick={handleClose}>Configurações</MenuItem>
                </Link>
                <Link to="/login">
                  <MenuItem onClick={handleClose}>
                    Sair
                  </MenuItem>
                </Link>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
