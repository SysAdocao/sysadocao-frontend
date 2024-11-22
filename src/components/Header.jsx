import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAppThemeContext } from "../contexts/ThemeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const navItems = [{name: "Cadastrar", route: "/sign-up"}, {name: "Entrar", route: "/sign-in"}];

function Header() {
  const { themeName, toggleTheme } = useAppThemeContext()
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{py: 1, px: 6}}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to={"/"}>
              <img src={Logo} alt="Logo SysAdoção" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.route} key={item.name}>
                <Button sx={{ color: "white" }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Button color="white" onClick={toggleTheme}>{themeName === "light" ? <DarkModeIcon /> : <LightModeIcon />}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
