import react, { useState, useEffect } from 'react';
import '../../asset/css/Artists.css';
import '../../asset/css/Home.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useHistory } from "react-router-dom";
import { Endpoints } from '../../api/Endpoints';
import { io } from 'socket.io-client';

interface TypeArtistComponent {
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
        type: string[]
    }[]
}

function ArtistComponent({
    allArtists
}: TypeArtistComponent) {
    const user = useSelector((state: RootState) => state.user);
    let history = useHistory();
    const socket = io('http://localhost:3001');
    const [allArtistsComponent, setAllArtistsComponent] = useState<{
        idArtists: string,
        name: string,
        stageName: string,
        birthday: string,
        nation: string,
        prize: string[],
        description: string,
        image: string,
        like: number,
        type: string[]
    }[]>(allArtists)
    const [like, setLike] = useState<number>(0);

    const likeArtist = async (artist: any) => {
        if (Object.keys(user).length === 0) {
            history.push("/sign-in");
        } else {
            socket.emit("like-artist", allArtistsComponent, artist.idArtists)
            await axios.put(`${Endpoints}/api/artist/like-artist`, artist, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("accessToken")
                }
            })
                .then(res => { console.log(res.data.message) })
                .catch(err=>{ console.log(err)})
        }
    }

    console.log(allArtistsComponent)

    useEffect(() => {
        socket.once("resend-like-artist", (artists) => {
            setAllArtistsComponent(artists);
            // setLike(artists);
        })
    }, [allArtistsComponent])
    return (
        <div className="a__margin_top_16">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        allArtistsComponent.map((artist, index) => {
                            return (
                                <Grid item xs={6} sm={4} md={3} lg={2}>
                                    <div className="tac__cover_artist">
                                        <div className="tac__artist">
                                            <img src={artist.image} alt={artist.stageName} />
                                            <div
                                                className="nrc__play_album"
                                                onClick={() => likeArtist(artist)}
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
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default ArtistComponent;