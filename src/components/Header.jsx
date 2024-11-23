import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import Logo from "../assets/logo.png";
import Avatar from "@mui/material/Avatar";

function Header() {
  const { isLogged, userName, handleLogout } = useAuth();

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
              gap: 1,
              display: { xs: "none", sm: "flex" }
            }}
          >
            {isLogged ? (
              <>
                <Link to={"/pets"}>
                  <Button sx={{ color: "white" }}>Pets</Button>
                </Link>
                {/* Configurar favoritos posteriormente */}
                <Link to={"/pets"}>
                  <Button sx={{ color: "white" }}>Favoritos</Button>
                </Link>
                <Avatar sx={{ cursor: "pointer", ml: ".5rem"}} onClick={handleLogout}>
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
                  <Button sx={{ fontWeight: "bold", color: "white" }}>Entrar</Button>
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
