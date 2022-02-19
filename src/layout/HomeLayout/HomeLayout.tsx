import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/Home.css';
import BannerComponent from '../../components/HomeComponent/Banner';
import NewReleases from '../../components/HomeComponent/NewReleases';
import UpcomingEvents from '../../components/HomeComponent/UpcomingEvents';
import TopArtists from '../../components/HomeComponent/TopArtists';

function HomeLayout(){
    return(
        <div className="home container">
            <BannerComponent/>
            <NewReleases/>
            <UpcomingEvents/>
            <TopArtists/>
        </div>
    )
}

export default HomeLayout;