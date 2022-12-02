import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const categories = ["home", "about", "contact"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              margin: "1rem 0",
            }}
          >
            SpaceX
          </Typography>

          <Toolbar disableGutters>
            {/* For Desktop */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "end" },
              }}
            >
              {categories.map((c, i) => (
                <Button
                  key={c}
                  sx={{
                    color: "inherit",
                    display: "block",
                    padding: 0,
                    margin: "0 0 0 1rem",
                  }}
                >
                  {c}
                </Button>
              ))}
            </Box>

            {/* For Mobile*/}

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <MenuIcon onClick={handleOpenNavMenu} color="inherit" />
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
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  textTransform: "uppercase",
                }}
              >
                {categories.map((c, i) => (
                  <MenuItem
                    key={c}
                    onClick={() => {
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">{c}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Typography
        variant="h5"
        component="h6"
        fontSize={{ xs: "1.5rem", sm: "1.5rem", md: "2rem" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          marginTop: 3,
        }}
      >
        Welcome to SpaceX
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "monospace",
          fontWeight: 500,
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "none",
          margin: 2,
        }}
      >
        SpaceX Launches...
      </Typography>
    </React.Fragment>
  );
}
export default NavBar;
