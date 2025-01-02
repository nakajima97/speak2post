'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress, Typography } from '@mui/material';

const ProcessingScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/result');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

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
