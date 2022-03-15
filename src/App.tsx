import react, {useEffect} from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './navigation/Navigation';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {userAction} from './redux/actions/user';

function App() {
  const dispatch = useDispatch();
  const getUserByToken = async () => {
    return axios.get("http://localhost:5000/api/user/get-user-by-token",{
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken")
      }
    })
      .then((res) => { 
        dispatch(userAction('login', res.data));
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    getUserByToken()
  }, [])

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
