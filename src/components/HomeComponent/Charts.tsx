import React from 'react';
import '../../asset/css/Home.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { formatTimer } from '../../util/timmer';
import { listen } from '../../redux/actions/listen';
import {album} from '../../redux/actions/playAlbum';
import { useDispatch } from 'react-redux';

interface Charts {
    tracks: {
        idTrack: string,
        nameSong: string,
        url: string,
        mainImg: string,
        duration: number,
        numberListen: number,
        like: number,
        artists: {
            idArtists: string,
            nameArtists: string,
        }[],
        country: string,
        type: string[],
        weeklyViews: number,
        likeOfWeek: number,
    }[];
}

function Charts({
    tracks
}: Charts) {

    const dispatch = useDispatch();

    const playMusic = (track: any, index: number) => {
        window.localStorage.setItem('music', JSON.stringify(track));
        window.localStorage.setItem('playlist', JSON.stringify(tracks));
        window.localStorage.setItem('indexSong', index.toString());
        dispatch(listen('listen', track));
        dispatch(album('playAlbum', tracks));
    }
    return (
        <div className="charts">
            <ul className="charts__main_list">
                {tracks.map((tracks, index) => {
                    return (
                        <li className="charts__track_item">
                            <span className="charts__track_number">{index + 1}</span>
                            <span className="charts__track_rate">
                                <span className="charts__icon">
                                    <ArrowDropUpIcon />
                                </span>
                                <span>{index + 1}</span>
                            </span>
                            <div 
                                className="charts__track_img"
                                onClick={() => playMusic(tracks,index)}
                            >
                                <img src={tracks.mainImg} alt={tracks.nameSong} />
                                <PlayArrowOutlinedIcon />
                            </div>
                            <div className="charts__track_title">
                                <h4>{tracks.nameSong}</h4>
                                <div className="charts__track_artist">
                                    {
                                        tracks.artists.map((artist, index) => {
                                            return (
                                                <>
                                                    {
                                                        index === 0 ?
                                                            <span>
                                                                <Link to={'/artists/' + artist.idArtists}>
                                                                    {artist.nameArtists}
                                                                </Link>
                                                            </span>
                                                            :
                                                            <span>
                                                                <span> & </span>
                                                                <Link to={'/artists/' + artist.idArtists}>
                                                                    {artist.nameArtists}
                                                                </Link>
                                                            </span>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <span className="charts__track_duration">{formatTimer(tracks.duration)}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Charts;