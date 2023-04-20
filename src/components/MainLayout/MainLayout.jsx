import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { Box, FormControlLabel, FormGroup, Switch } from '@mui/material'
import AppBarComponent from '../AppBarComponent';
import AppDrawer from '../AppDrawer';

const MainLayout = () => {
  const location = useLocation();
  const [auth, setAuth] = React.useState(true);
  const [drawerState, setDrawerState] = useState(false);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const toggleDrawer = () => {
    setDrawerState(prev => !prev);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch 
              checked={auth}
              onChange={handleChange}
              aria-label='login switch'
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>

      <AppBarComponent auth={auth} toggleDrawer={toggleDrawer}/>
      <AppDrawer drawerState={drawerState} toggleDrawer={toggleDrawer}/>
      <Outlet/>
    </Box>
  )
}

export default MainLayout