import React from 'react';
import { Box, Grid, Typography, Avatar, Button, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const days = [
  { day: 'Mon', date: 25, slots: ['10:00', '11:00', '12:00'] },
  { day: 'Tues', date: 26, slots: ['08:00', '09:00', '10:00'] },
  { day: 'Wed', date: 27, slots: ['12:00', '-', '13:00'] },
  { day: 'Thurs', date: 28, slots: ['10:00', '11:00', '16:00'] },
  { day: 'Fri', date: 29, slots: ['14:00', '-', '16:00'] },
  { day: 'Sat', date: 30, slots: ['12:00', '14:00', '15:00'] },
  { day: 'Sun', date: 31, slots: ['09:00', '10:00', '11:00'], disabled: true },
];

const appointments = [
  {
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: '🦷',
    color: '#3634A6',
    textColor: '#fff',
  },
  {
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: '💪',
    color: '#E7E9FC',
    textColor: '#3634A6',
  },
];

const upcoming = [
  {
    day: 'Thursday',
    items: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '💉' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ],
  },
  {
    day: 'Saturday',
    items: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧑‍⚕️' },
    ],
  },
];

const Calender = () => {
  return (
    <Box sx={{ bgcolor: '#F6FAFF', borderRadius: 4, p: 3, minHeight: 700 }}>
      {/* Header */}
      <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight={700}>October 2021</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: '#00DFEF', width: 40, height: 40 }}> {/* Replace with user avatar if needed */} </Avatar>
          <Button variant="contained" sx={{ bgcolor: '#3634A6', minWidth: 0, p: 1, borderRadius: 2 }}>
            <AddIcon />
          </Button>
        </Box>
      </Grid>
      {/* Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton size="small"><ArrowBackIosNewIcon fontSize="small" /></IconButton>
        <IconButton size="small"><ArrowForwardIosIcon fontSize="small" /></IconButton>
      </Box>
      {/* Calendar Days */}
      <Grid container spacing={1} sx={{ mb: 3 }}>
        {days.map((d, idx) => (
          <Grid item xs key={d.day}>
            <Box
              sx={{
                bgcolor: idx === 1 ? '#E7E9FC' : 'transparent',
                borderRadius: 3,
                p: 1,
                textAlign: 'center',
                opacity: d.disabled ? 0.4 : 1,
              }}
            >
              <Typography variant="body2" fontWeight={700} color={idx === 1 ? '#3634A6' : '#222'}>
                {d.day}
              </Typography>
              <Typography variant="h6" fontWeight={700} color={idx === 1 ? '#3634A6' : '#222'}>
                {d.date}
              </Typography>
              <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {d.slots.map((slot, i) => (
                  <Box
                    key={slot}
                    sx={{
                      bgcolor: idx === 1 && i === 1 ? '#3634A6' : idx === 1 ? '#E7E9FC' : '#E7E9FC',
                      color: idx === 1 && i === 1 ? '#fff' : '#3634A6',
                      borderRadius: 2,
                      px: 1,
                      py: 0.2,
                      fontSize: 13,
                      fontWeight: 500,
                      mb: 0.3,
                      ...(idx !== 1 && i !== 1 && { opacity: 0.7 }),
                    }}
                  >
                    {slot}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Appointments */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {appointments.map((a, i) => (
          <Grid item xs={12} md={6} key={a.title}>
            <Box
              sx={{
                bgcolor: a.color,
                color: a.textColor,
                borderRadius: 3,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                minHeight: 80,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight={700}>{a.title} <span style={{ fontSize: 22 }}>{a.icon}</span></Typography>
                <Typography fontSize={14}>{a.time}</Typography>
                <Typography fontSize={13}>{a.doctor}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Upcoming Schedule */}
      <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>The Upcoming Schedule</Typography>
      {upcoming.map((u) => (
        <Box key={u.day} sx={{ mb: 2 }}>
          <Typography fontWeight={600} color="#3634A6" sx={{ mb: 1 }}>On {u.day}</Typography>
          <Grid container spacing={2}>
            {u.items.map((item) => (
              <Grid item xs={12} md={6} key={item.title}>
                <Box
                  sx={{
                    bgcolor: '#E7E9FC',
                    borderRadius: 3,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Typography fontWeight={700}>{item.title} <span style={{ fontSize: 20 }}>{item.icon}</span></Typography>
                  <Box sx={{ flex: 1 }} />
                  <Typography fontSize={14}>{item.time}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Calender;