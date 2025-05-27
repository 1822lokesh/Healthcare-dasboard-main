import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Layout from './layout/layout';
import LeftMenu from './components/Left-Menu/left-menu';
// import Calender from './components/Calender/Calender';
import AppRoutes from './routes/routes';
import Calender from './components/Calender/calender'

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <BrowserRouter>
      <Layout>
        <Grid
          container
          sx={{
            width: '100%',
            minHeight: '100vh',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          {/* Left Menu: always render, handles its own responsive logic */}
          <LeftMenu />

          {/* Main Content */}
          <Grid
            item
            sx={{
              width: isMobile ? '100%' : '42%',
              flexGrow: 1,
              bgcolor: 'background.default',
              p: 1,
            }}
          >
            <AppRoutes />
          </Grid>

          {/* Calendar */}
          {!isMobile && (
            <Grid
              item
              sx={{
                width: '42%',
                bgcolor: 'background.default',
                p: 3,
              }}
            >
              <Calender />
            </Grid>
          )}

          {/* On mobile, show calendar below main content */}
          {isMobile && (
            <Grid
              item
              sx={{
                width: '100%',
                bgcolor: 'background.default',
                p: 1,
              }}
            >
              <Calender />
            </Grid>
          )}
        </Grid>
      </Layout>
    </BrowserRouter>
  );
}

export default App;