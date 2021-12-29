import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={2}>
              <SideBar/>
            </Grid>
            <Grid item xs={10} className="app__display_flex app__overflow_y">
              <Header/>
              <Navigation/>
              <Footer/>
            </Grid>
          </Grid>
        </Box>
      </Router>
    </div>
  );
}

export default App;
