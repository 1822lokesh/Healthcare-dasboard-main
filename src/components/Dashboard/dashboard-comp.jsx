import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, LinearProgress, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import humananatomy from "../../assets/humananatomy.jpeg";
import lungs from '../../assets/lungs.jpeg';
import teeth from '../../assets/teeth.jpeg';
import bone from '../../assets/bone.jpeg';
import Activity from '../../components/Dashboard/Activity/activity'; 

const healthData = [
  {
    label: 'Lungs',
    icon: <img src={lungs} alt="Lungs" style={{ width: 40, height: 40 }} />,
    date: '26 Okt 2021',
    value: 70,
    color: 'error',
  },
  {
    label: 'Teeth',
    icon: <img src={teeth} alt="Teeth" style={{ width: 40, height: 40 }} />,
    date: '26 Okt 2021',
    value: 90,
    color: 'success',
  },
  {
    label: 'Bone',
    icon: <img src={bone} alt="Bone" style={{ width: 40, height: 40 }} />,
    date: '26 Okt 2021',
    value: 60,
    color: 'warning',
  },
];


export const DashboardComponent = () => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Top Bar */}
      <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F6FAFF', borderRadius: 2, px: 2, py: 1 }}>
            <SearchIcon sx={{ color: 'grey.500', mr: 1 }} />
            <input
              type="text"
              placeholder="Search"
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: 16,
                width: "400px",
              }}
            />
          </Box>
        </Grid>
        <Grid item>
          <NotificationsNoneIcon sx={{ color: 'grey.600', fontSize: 28 }} />
        </Grid>
      </Grid>

      {/* Dashboard Title and Week Selector */}
      <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight={700}>Dashboard</Typography>
        <Button size="small" sx={{ color: 'grey.600', textTransform: 'none' }}>This Week ▾</Button>
      </Grid>

      {/* Anatomy Image and Health Data Side by Side */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {/* Anatomy Image with Magnify */}
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 3, bgcolor: '#F6FAFF', position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 380, }}>

              <img src={humananatomy} alt="Anatomy" style={{ width: '100%', height: 'auto', maxHeight: 320, objectFit: 'cover' }} />

              {/* Healthy Heart Label */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 100,
                  left: { xs: 120, md: 170 },
                  bgcolor: '#3634A6',
                  color: '#fff',
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 14,
                  boxShadow: 1,
                  zIndex: 100,
                }}
              >
                <FavoriteIcon sx={{ fontSize: 18, mr: 1, color: 'red' }} />
                Healthy Heart
              </Box>
              {/* Healthy Leg Label */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 140,
                  left: { xs: 120, md: -30 },
                  bgcolor: "#00DFEF",
                  color: '#fff',
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 14,
                  boxShadow: 1,
                }}
              >
                <DirectionsRunIcon sx={{ fontSize: 18, mr: 1 }} />
                Healthy Leg
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Health Stats */}
        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 3, bgcolor: '#F6FAFF', position: 'relative', minHeight: 250 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minHeight: 320, }}>
              {healthData.map((item) => (
                <Paper key={item.label} elevation={0} sx={{ p: 2, borderRadius: 2, bgcolor: '#F6FAFF' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ bgcolor: 'white', mr: 2, color: 'primary.main' }}>{item.icon}</Avatar>
                    <Box>
                      <Typography fontWeight={600}>{item.label}</Typography>
                      <Typography variant="caption" color="text.secondary">Date: {item.date}</Typography>
                    </Box>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    color={item.color}
                    sx={{ height: 8, borderRadius: 5, bgcolor: '#e3eafc' }}
                  />
                </Paper>
              ))}
              <Box sx={{ textAlign: 'right', mt: 1 }}>
                <Button size="small" sx={{ color: 'primary.main', textTransform: 'none' }}>Details &rarr;</Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Activity />
    </Box>
  );
};