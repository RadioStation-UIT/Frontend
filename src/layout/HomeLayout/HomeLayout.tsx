import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/Home.css';
import BannerComponent from '../../components/HomeComponent/Banner';

function HomeLayout(){
    return(
        <div className="home container">
            <BannerComponent/>
        </div>
    )
}

export default HomeLayout;