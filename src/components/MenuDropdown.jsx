import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { Avatar, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

function AvatarMenu() {
    const { userName, handleLogout } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleProfile = () => {
        handleClose();
        navigate("/profile");
    };

  return (
    <>
        <Tooltip title="Account settings">
            <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            >
            <Avatar 
                sx={{ bgcolor: "secondary.main" }} 
            >
                {userName
                .split(" ")
                .slice(0, 2)
                .map((name) => name[0])
                .join("")
                .toUpperCase()}
            </Avatar>
            </IconButton>
        </Tooltip>
        <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <MenuItem onClick={handleProfile}>
            <ListItemIcon>
                <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem 
            onClick={() => {
                handleClose();
                handleLogout();
                navigate("/sign-in");
            }}
            >
            <ListItemIcon>
                <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
            </MenuItem>
        </Menu>
    </>
  );
}

export default AvatarMenu;