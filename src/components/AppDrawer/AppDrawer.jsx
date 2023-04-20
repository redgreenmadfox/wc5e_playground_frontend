import { Drawer, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import InboxIcon from '@mui/icons-material/MoveToInbox';

const AppDrawer = ({ drawerState, toggleDrawer }) => {
  return (
    <Drawer
      anchor='left'
      open={drawerState}
      onClose={toggleDrawer}
      onClick={toggleDrawer}
    >
      <Box
        role='presentation'
        sx={{ width: 250 }}
        onClick={toggleDrawer}
      >
        <List>
          <ListItem disablePadding onClick={toggleDrawer}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/">Home</Link>
          </ListItem>

          <ListItem disablePadding onClick={toggleDrawer}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/posts">Posts</Link>
          </ListItem>

          <ListItem disablePadding onClick={toggleDrawer}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/users">Users</Link>
          </ListItem>

          <ListItem disablePadding onClick={toggleDrawer}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/spells">Spells</Link>
          </ListItem>

          <ListItem disablePadding onClick={toggleDrawer}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/classes">Classes</Link>
          </ListItem>

          <ListItem disablePadding onClick={toggleDrawer}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/nothing-here">Nothing Here</Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}

export default AppDrawer