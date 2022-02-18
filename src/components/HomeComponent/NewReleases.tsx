import React from 'react';
import '../../asset/css/Home.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom';
import NewReleasesChild from './NewReleasesChild';

function NewReleases(){
    return(
        <div className="hp__margin_top_32">
            <div className="hp__header">
                <div className="hp__display_flex">
                    <h2 className="hp__title_h2">New Releases</h2>
                    <Link to="/albums/new-releases">
                        <div className="hp__see_all">
                            <p>See all</p>
                            <ArrowForwardIcon/>
                        </div>
                    </Link>
                </div>
            </div>
            <NewReleasesChild/>
        </div>
    )
}

export default NewReleases;