import React from 'react';
import '../../asset/css/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { artists } from '../../api/artists'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

function TopArtistsChild() {
    const sliderRef = React.useRef<Slider | null>(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };

    const slickNext = () => {
        sliderRef.current?.slickNext()
    };

    const slickPrev = () => {
        sliderRef.current?.slickPrev();
    };
    return (
        <div className="tac">
            <Slider ref={sliderRef} {...settings}>
                {
                    artists.map((artist, index) => {
                        return (
                            <div className="tac__cover_artist">
                                <div className="tac__artist">
                                    <img src={artist.image} />
                                    <div
                                        className="nrc__play_album"
                                    >
                                        <FavoriteIcon />
                                    </div>
                                    <div className="nrc__album_stat">
                                        <span className="nrc__album_stat_number_song">
                                            <FavoriteIcon />
                                            <span>{artist.like}</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="nrc__album_title">
                                    <Link to={'/artists/' + artist.idArtist}>
                                        <h3>{artist.name}</h3>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="uec__prev_next">
                <div className="uec__prev" onClick={slickPrev}><NavigateBeforeIcon /></div>
                <div className="uec__next" onClick={slickNext}><NavigateNextIcon /></div>
            </div>
        </div>
    )
}

export default TopArtistsChild;