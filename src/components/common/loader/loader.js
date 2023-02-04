import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './loader.css'

/**
 * Loader component
 * @returns Loader
 */
function Loader() {
    return (
        <Box display={'flex'} justifyContent="center" alignItems={'center'} height="100vh">
            <div className="lds-ripple"><div></div><div></div></div>
        </Box>
    )
}

export default Loader