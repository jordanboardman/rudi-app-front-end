import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#2B2C42",
        justifyContent: "space-evenly",
      }}
    >
      <img
        src="./Logos/Logo_Dark Background.png"
        alt="rudi logo"
        className="logo"
      />

      <Divider sx={{ backgroundColor: "white" }} />
      <List>
        <Typography sx={{ fontWeight: "bold" }}>
          <Link to="/" className="link">
            Home
          </Link>
        </Typography>
        
        <Typography sx={{ fontWeight: "bold" }}>
          <Link to="/about" className="link">
            About
          </Link>
        </Typography>
        
        <Typography sx={{ fontWeight: "bold" }}>
          <Link to="/students" className="link">
            Students
          </Link>
        </Typography>
        
        <Typography sx={{ fontWeight: "bold" }}>
          <Link to="/teachers" className="link">
            Teachers
          </Link>
        </Typography>
        
        <Typography sx={{ fontWeight: "bold" }}>
          <Link to="/rudiments" className="link">
            Rudiments!
          </Link>
        </Typography>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{}}>
      <AppBar
        component="nav"
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            backgroundColor: "#2B2C42",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex" }}>
            <img
              src="./Logos/Logo_Dark Background.png"
              alt="rudi logo"
              className="logo"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Typography sx={{ padding: "10px", fontWeight: "bold" }}>
                <Link to="/" className="link">
                  Home
                </Link>
              </Typography>
              
              <Typography sx={{ padding: "10px", fontWeight: "bold" }}>
                <Link to="/about" className="link">
                  About
                </Link>
              </Typography>
              
              <Typography sx={{ padding: "10px", fontWeight: "bold" }}>
                <Link to="/students" className="link">
                  Students
                </Link>
              </Typography>
              
              <Typography sx={{ padding: "10px", fontWeight: "bold" }}>
                <Link to="/teachers" className="link">
                  Teachers
                </Link>
              </Typography>
              
              <Typography sx={{ padding: "10px", fontWeight: "bold" }}>
                <Link to="/rudiments" className="link">
                  Rudiments!
                </Link>
              </Typography>
              
              <Button
          variant="contained"
          sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}>
            <Link to="/login" className="link">
            Login
            </Link>
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}>
            <Link to="/register" className="link">
            Register
            </Link>
        </Button>              
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#2B2C42",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
