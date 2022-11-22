import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/router";
import LogoImg from "../../public/asset/Images/LogoRaas.png";
import Image from "next/image";

const pages = [
  {
    name: "Home",
    path: "/home/main",
  },
  {
    name: "About",
    path: "/home/about",
  },
  {
    name: "Blog",
    path: "/home/blog",
  },
  {
    name: "Contact Us",
    path: "/home/contact",
  },
];
const pagesNew = [
  {
    name: "Hire Me",
    path: "/home/contact",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activator, setActivator] = useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleRoute = (e, i) => {
    setAnchorElNav(null);
    router.push(e);
    setActivator(i);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#F2F4F5" , color:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              mr: 4,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Image
              src={LogoImg}
              alt="Picture of the author"
              width={90}
              height={30}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ justifyContent: "center" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((e, i) => (
                <MenuItem
                  key={i}
                  sx={{ justifyContent: "center" }}
                  className={` font-fam ${
                    router.pathname.indexOf(e.path) !== -1
                      ? "nav-act-dp"
                      : "nav"
                  }`}
                  onClick={() => handleRoute(e.path, i)}
                >
                  <Typography textAlign="center">{e.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* RESPONSIVE NAVBAR STARTS  */}
          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Image
              src={LogoImg}
              alt="Picture of the author"
              width={90}
              height={30}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((e, i) => (
              <Button
                className={`font-fam ${
                  router.pathname.indexOf(e.path) !== -1 ? "nav-act" : "nav"
                }`}
                key={i}
                onClick={() => handleRoute(e.path, i)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {e.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
            //   flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "end" },
            }}
          >
            {pagesNew.map((e, i) => (
              <Button
                className={`font-fam ${
                  router.pathname.indexOf(e.path) !== -1 ? "nav-act" : "nav"
                }`}
                key={i}
                onClick={() => handleRoute(e.path, i)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {e.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
