import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/Home.css';
import BannerComponent from '../../components/HomeComponent/Banner';
import NewReleases from '../../components/HomeComponent/NewReleases';

function HomeLayout(){
    return(
        <div className="home container">
            <BannerComponent/>
            <NewReleases/>
        </div>
    )
}

export default HomeLayout;