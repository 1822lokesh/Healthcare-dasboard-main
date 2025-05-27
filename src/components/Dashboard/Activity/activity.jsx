import React from 'react'
import { Box, Paper, Typography, Grid } from '@mui/material'
import { activityData, days } from "../../../mockData/index"


const Activity = () => {
    return (
        <Box>
            <Paper elevation={0} sx={{ mt: 4, p: 3, borderRadius: 3, bgcolor: '#F6FAFF' }}>
                <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                    <Typography fontWeight={700}>Activity</Typography>
                    <Typography variant="body2" color="text.secondary">
                        3 appointment on this week
                    </Typography>
                </Grid>

                {/* Simple Activity Bar Graph */}
                <Box sx={{ display: 'flex', alignItems: 'end', height: 80, gap: 2 }}>
                    {activityData?.map((bars, i) => (
                        <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                            <Box sx={{ display: 'flex', gap: 0.5 }}>
                                {bars.map((h, j) => (
                                    <Box
                                        key={j}
                                        sx={{
                                            width: 6,
                                            height: `${h * 8}px`,
                                            bgcolor: j === 1 ? '#00DFEF' : (j === 2 ? 'info.main' : 'grey.400'),
                                            borderRadius: 1,
                                        }}
                                    />
                                ))}
                            </Box>
                            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                                {days[i]}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Paper>
        </Box>
    )
}

export default Activity