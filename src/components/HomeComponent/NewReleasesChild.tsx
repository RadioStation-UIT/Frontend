import React from 'react';
import '../../asset/css/Home.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Grid from '@mui/material/Grid';
import {tracks} from '../../api/listTracks';
import {Link} from 'react-router-dom';
import {album} from '../../redux/actions/playAlbum';
import {listen} from '../../redux/actions/listen';
import {musics} from '../../api/music';
import { useDispatch } from 'react-redux';

function NewReleasesChild(){
    const dispatch = useDispatch();

    const playAlbum = (id: string) =>{
        const indexAlbum = tracks.findIndex(track => track.id === id);
        const listTrack = musics.filter((track)=>{
            return tracks[indexAlbum].idTrack.includes(track.idSong);
        })
        window.localStorage.setItem('music',JSON.stringify(listTrack[0]));
        window.localStorage.setItem('playlist',JSON.stringify(listTrack));
        window.localStorage.setItem('indexSong','0'.toString());
        dispatch(listen('listen',listTrack[0]));
        dispatch(album('playAlbum',listTrack));
    }
    return(
        <div className="nrc">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        tracks.map((album, index) =>{
                            return(
                                <Grid className="nrc__album" item xl={2} xs={6} md={8}>
                                    <div className="nrc__album_cover">
                                        <img src={album.image} alt={album.name}/>
                                        <div 
                                            className="nrc__play_album"
                                        >
                                            <PlayArrowOutlinedIcon onClick={()=>playAlbum(album.id)}/>
                                        </div>
                                        <div className="nrc__album_stat">
                                            <span className="nrc__album_stat_number_song">
                                                <FormatListBulletedOutlinedIcon/>
                                                <span>{album.idTrack.length}</span>
                                            </span>
                                            <span className="nrc__album_stat_listner">
                                                <HeadphonesIcon/>
                                                <span>{album.listener}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="nrc__album_title">
                                        <Link to={'/album/' + album.id}>
                                            <h3>{album.name}</h3>
                                        </Link>
                                        <div className="nrc__album_name_singer">
                                            {
                                                album.singer.map((singer,index)=>{
                                                    return(
                                                        <>
                                                            {
                                                                index === 0 ?
                                                                <span>
                                                                    <Link to={'/singer/'+ singer}>
                                                                        {singer}
                                                                    </Link>
                                                                </span>
                                                                : 
                                                                <span>
                                                                    <span> & </span>
                                                                    <Link to={'/singer/'+ singer}>
                                                                        {singer}
                                                                    </Link>
                                                                </span>
                                                            }
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default NewReleasesChild;