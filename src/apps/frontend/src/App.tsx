import React, { useState } from 'react';
import './App.css';
import { AppBar, Box, Button, Unstable_Grid2 as Grid, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'


function App() {
  var [username, setFirstName] = useState('Ronny')
  function updateUsername(username: string) {
    if (username.length <= 20) setFirstName(username)
  }
  return (
      <Grid container rowSpacing={3}>
          <Grid xs={12} md={12}>
              <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                      <Toolbar>
                          <IconButton
                              size="large"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              sx={{ mr: 1 }}
                          >
                              <MenuIcon />
                          </IconButton>
                          <Typography
                              variant="h6"
                              component="div"
                              sx={{ flexGrow: 1 }}
                          >
                              Aísu
                          </Typography>
                          <Button color="inherit">Login</Button>
                      </Toolbar>
                  </AppBar>
              </Box>
          </Grid>
          <Grid xs={12} container alignItems="center" justifyContent="center">
              <Grid xs={7}>
                  <TextField
                      required
                      fullWidth
                      id="outlined-required"
                      label="Username"
                      value={username}
                      onChange={(e) => updateUsername(e.target.value)}
                      defaultValue="Hello World"
                  />
              </Grid>
              <Grid xs={7}>
                  <TextField
                      fullWidth
                      required
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      value=""
                      autoComplete="current-password"
                  />
              </Grid>
          </Grid>
      </Grid>
  )
}

export default App;
