import React, { memo } from 'react';
import { CircularProgress, Box } from '@mui/material';

export const Loader = memo(() => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                background: 'rgba(0,0,0,.5)',
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <CircularProgress sx={{ mr: 'auto', ml: 'auto' }} />
        </Box>
    );
});
