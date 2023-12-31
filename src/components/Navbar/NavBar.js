import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext } from "../../theme";
import { Tokens } from "../../utils/colors/Colors";
import { useNavigate } from "react-router";
import { useLocalState } from "../../utils/localStorage/CustomLocalStorage";

const NavBar = () => {
  const theme = useTheme();
  const colors = Tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate("");
  const [jwt, setJwt] = useLocalState("", "jwt");

  const handleLogout = () => {
    setJwt(null);
    navigate("/");
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        
      
        
        <IconButton onClick={handleLogout}>
          <ExitToAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;
