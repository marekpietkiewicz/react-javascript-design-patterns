import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BuildIcon from '@material-ui/icons/Build';
import PeopleIcon from '@material-ui/icons/People';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles  } from '@material-ui/core/styles'; //createMuiTheme
// import { ThemeProvider } from '@material-ui/styles'
const useStyles = makeStyles((theme) => ({
  // link: {
  //   color: 'inherit',
  //   textDecoration: 'inherit'
  // }
  bold: {
    color: "red"
  },
  
}));

// const theme = createMuiTheme({
//   typography: {
//     body1: {
//       color: "red",
//       fontWeight: "900",
//     }
//   }
// })


export default function MainListItems() {
  const classes = useStyles();
  const active = clsx("Mui-selected", "Mui-disabled", classes.bold);

  return (
    <div>
  {/* <ThemeProvider theme={theme}> */}
      <ListItem
      color="inherit"
        button
        to='/'
        component={NavLink}
        activeClassName={active} 
        exact>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider />
      <ListItem
        button
        to='/patterns/factory'
        component={NavLink}
        activeClassName={active} 
        exact>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Factory" />
      </ListItem>
      <ListItem
        button
        to='/patterns/customers'
        component={NavLink}
        activeClassName={active}  
        exact>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      {/* </ThemeProvider> */}
    </div>
    
  )
};
