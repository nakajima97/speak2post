import React from 'react';
import { AppBar, Container, CssBaseline, Toolbar, Typography, Box } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Speak2post
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;