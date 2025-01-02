import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';
import type React from 'react';

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
        <Box my={4}>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
