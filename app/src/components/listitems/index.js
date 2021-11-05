import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Top Tokens" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Follow Us On</ListSubheader>
    <ListItem button component="a" href="#">
      <ListItemIcon>
        <TwitterIcon />
      </ListItemIcon>
      <ListItemText primary="Twitter" />
    </ListItem>
    <ListItem button component="a" href="#">
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>
    <ListItem button component="a" href="#">
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary="Github" />
    </ListItem>
  </div>
);