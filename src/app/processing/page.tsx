import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const ProcessingScreen = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="64">
      <CircularProgress size={64} thickness={4} />
      <Typography variant="h6" component="p" mt={4} color="textSecondary">
        Processing your recording...
      </Typography>
    </Box>
  );
};

export default ProcessingScreen;
