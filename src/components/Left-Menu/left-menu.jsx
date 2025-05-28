import * as React from "react";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventIcon from "@mui/icons-material/Event";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatIcon from "@mui/icons-material/Chat";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link } from "react-router-dom";
import { Settings } from "@mui/icons-material";

const navItems = [
  { label: "Dashboard", path: "/", icon: <DashboardIcon /> },
  { label: "History", path: "/history", icon: <HistoryIcon /> },
  { label: "Calendar", path: "/calendar", icon: <CalendarMonthIcon /> },
  { label: "Appointments", path: "/appointments", icon: <EventIcon /> },
  { label: "Statistics", path: "/statistics", icon: <BarChartIcon /> },
];

const secondaryNavItems = [
  { label: "Chat", path: "/chat", icon: <ChatIcon /> },
  { label: "Support", path: "/support", icon: <SupportAgentIcon /> },
];

export default function LeftMenu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerContent = (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ px: 2, pb: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Healthcare
        </Typography>
      </Box>
      <Box sx={{px : 2, mb : 1}}>
        <Typography variant="caption" color="textSecondary">
          General
          </Typography>
      </Box>
      
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 1 }} />
      <Box sx={{px : 2, mt: 2, mb : 1}}>
        <Typography variant="caption" color="textSecondary">
          Tools
          </Typography>
      </Box>
      <List>
        {secondaryNavItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
//     <Box>
//       <Divider />
//       <List>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/settings" onClick={()} => setMobileOpen(false)}>
//           <ListItemIcon>
//           <SettingsIcon/>
//           </ListItemIcon>
//           <ListItemText primary="Settings" />
//           </ListItemButton>

//           </ListItem>>
// t      </List>
//     </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              zIndex: 1201,
              display: { xs: "inline-flex", sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              [`& .MuiDrawer-paper`]: {
                width: 220,
                boxSizing: "border-box",
                bgcolor: "#F6FAFF",
              },
            }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: 220,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 220,
              boxSizing: "border-box",
              bgcolor: "#F6FAFF",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}
