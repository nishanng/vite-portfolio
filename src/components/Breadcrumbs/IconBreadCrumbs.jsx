import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Person';
import WhatshotIcon from '@mui/icons-material/Work';
import GrainIcon from '@mui/icons-material/Chat';
import ContactIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery } from '@mui/material';
import './IconBreadCrumbs.css';

export default function IconBreadcrumbs() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const isSmallScreen = useMediaQuery('(max-width:900px)');

  const breadcrumbLinks = (
    <Breadcrumbs aria-label="breadcrumb">
      <ScrollLink
        activeClass="active"
        to="about-me"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
      >
        <Link underline="hover" sx={{ display: 'flex', alignItems: 'center', fontSize: '1.8rem', color: 'white' }} color="inherit">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          About Me
        </Link>
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="projects_section"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
      >
        <Link underline="hover" sx={{ display: 'flex', alignItems: 'center', fontSize: '1.8rem', color: 'white' }} color="inherit">
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Projects
        </Link>
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="blog"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
      >
        <Link underline="hover" sx={{ display: 'flex', alignItems: 'center', fontSize: '1.8rem', color: 'white' }} color="inherit">
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Blog
        </Link>
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
      >
        <Link underline="hover" sx={{ display: 'flex', alignItems: 'center', fontSize: '1.8rem', color: 'white' }} color="inherit">
          <ContactIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Contact
        </Link>
      </ScrollLink>
    </Breadcrumbs>
  );
  

  return (
    <div className="iconBreadcrumbs" role="presentation">
      {isSmallScreen ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'inline-flex', md: 'none' }, position: 'absolute', top: '1rem', right: '1rem' }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
              {['About Me', 'Projects', 'Blog', 'Contact'].map((text, index) => (
                <ListItem button key={text} onClick={toggleDrawer(false)}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            </Drawer>
        </>
      ) : (
        breadcrumbLinks
      )}
    </div>
  );
}
