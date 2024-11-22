import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useAppThemeContext } from "../contexts/ThemeContext";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import Logo from "../assets/logo.png";
import { Icon } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

function Header() {
  const { isLogged, userName, handleLogout } = useAuth();
  const { themeName, toggleTheme } = useAppThemeContext();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ py: 1, px: 6 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={Logo} alt="Logo SysAdoção" />
            </Link>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              gap: 2,
              display: { xs: "none", sm: "flex" }
            }}
          >
            {isLogged ? (
              <>
                <Icon sx={{ cursor: "pointer" }}>
                  <FavoriteIcon />
                </Icon>
                <Icon sx={{ cursor: "pointer" }}>
                  <NotificationsIcon />
                </Icon>
                <Icon
                  sx={{ cursor: "pointer" }}
                  color="white"
                  onClick={toggleTheme}
                >
                  {themeName === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </Icon>
                <Avatar sx={{ cursor: "pointer" }} onClick={handleLogout}>
                  {userName
                    .split(" ")
                    .slice(0, 2)
                    .map((name) => name[0])
                    .join("")
                    .toUpperCase()}
                </Avatar>
              </>
            ) : (
              <>
                <Link to={"/sign-up"}>
                  <Button sx={{ color: "white" }}>Cadastrar</Button>
                </Link>
                <Link to={"/sign-in"}>
                  <Button sx={{ color: "white" }}>Entrar</Button>
                </Link>
              </>
              
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
