import { Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

/**
 * Footer Componet renders footer data and links
 * mobile responsive
 */
function Footer() {
    return (
        <>
            <Divider sx={{ marginTop: '2rem' }} />
            <Box sx={{ paddingX: '1rem', marginY: '3rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} display="flex" justifyContent={{ xs: 'center', md: 'start' }}>
                        <Typography component="div" variant='h6'>
                            Stay-flexi
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent={{ xs: 'center', md: 'start' }}>
                        <Typography component="div" color='black' variant='h6'>
                            Get in touch
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Footer