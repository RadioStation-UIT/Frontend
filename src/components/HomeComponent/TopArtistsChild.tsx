import React from 'react';
import '../../asset/css/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface TopArtistsChild{
    allArtists: {
        idArtists: string,
        name: string,
        stageName: string,
        birthday: string,
        nation: string,
        prize: string[],
        description: string,
        image: string,
        like: number,
    }[];
}

function TopArtistsChild({
    allArtists
}: TopArtistsChild) {
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
                    allArtists.map((artist, index) => {
                        return (
                            <div className="tac__cover_artist">
                                <div className="tac__artist">
                                    <img src={artist.image} alt={artist.stageName}/>
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
                                    <Link to={'/artists/' + artist.idArtists}>
                                        <h3>{artist.stageName}</h3>
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