import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { colors } from "../media/colorsModule";
import { Link } from "react-router-dom";
import logo from './media/logo.png';
import styles from './media/header.module.scss';


export const Header:React.FC = () => {
	const navItems = [
    {link: 'method', title: 'Метод'},
    {link: 'therapy', title: 'Суть терапии'},
    {link: 'price', title: 'Цены'},
    {link: 'equipment', title: 'Оборудование'},
    {link: 'languages', title: 'Языки'}
  ];
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	  };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
	const drawer = (
		<Box className={styles.drawer} onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 240, height: '100%' }}>
		  <Typography variant="h6" sx={{ my: 2 }}>
			{'Без границ'}
		  </Typography>
		  <Divider />
		  <List className={styles.linkListDrawer}>
			{navItems.map((item) => (
			  <ListItem key={item.title} disablePadding>
				<ListItemButton sx={{ textAlign: 'center' }}>
				  <Link to={`/${item.link}`}>
          {item.title}
				  </Link>
        </ListItemButton>
			  </ListItem>
			))}
		  </List>
		</Box>
	  );

	return (
    <section style={{marginBottom: 65}}>

		<AppBar component="nav" sx={{backgroundColor: colors.color_3}}>
        <Toolbar className={styles.header} sx={{maxWidth: 1200, width: '90%', marginInline: 'auto'}}>
          <Link className={styles.logoLink} to='/'>
            <img src={logo} alt="logo" />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            aria-label="open drawer"
            edge="start"
			      onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: colors.color_grey}}
            >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button className={styles.therapyWrapper} onClick={handleClick}>
              {'Терапия'}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              >
        <MenuItem onClick={handleClose}>
            <Link style={{color: colors.color_grey, textDecoration: 'none  '}} to={'/method'}>
              {'Метод'}
            </Link>
          </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={{color: colors.color_grey, textDecoration: 'none  '}} to={'/'}>
            {'Оборудование'}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={{color: colors.color_grey, textDecoration: 'none  '}} to={'/therapy'}>
            {'Суть терапии'}
          </Link>
        </MenuItem>
      </Menu>
            <Button  className={styles.link}>
              <Link to={'/price'}>
                {'Цены'}
              </Link>
            </Button>
            <Button  className={styles.link}>
              <Link to={'/languages'}>
                {'Иностранные языки'}
              </Link>
            </Button>
          </Box>
        </Toolbar>
		<Drawer
          className={styles.drawerWrapper}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          >
          {drawer}
        </Drawer>
      </AppBar>
      </section>
	)
}