import React, {useState, useEffect} from 'react';
import Action from './Action';
// import {Line} from 'rc-progress';
import Slider from '@mui/material/Slider';
import {formatTimer} from '../../util/timmer';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Stack from '@mui/material/Stack';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { RootState } from '../../redux/reducers';

const player = new Audio();
let playingMusicCurrent = false;

function MusicPlayer(){
    const [currentTime,setCurrentTime] = useState("00:00");
    const [volume,setVolume] = useState<number>(50);
    const [mute, setMute] = useState<boolean>(false)
    const [percent, setPercent] = useState<number>(0);
    player.volume = mute === true ? 0 : volume/100;
    const [playPause, setPlayPause] = useState<boolean>(true);
    const musicRedux = useSelector((state: RootState) => state.music);
    const [musicPlayer,setMusicPlayer] = useState<{
        idSong: string,
        nameSong: string,
        url: string,
        mainImg: string,
        time: number
        numberListen: number,
        singer:{
            idSinger: string,
            nameSinger: string,
        },
        playing: boolean
    }>(JSON.parse(localStorage.getItem('music') || '{}'));
    // listenWhenPlay();

    const handleChange = (event: Event, newValue: number | number[]) => {
        setPercent(newValue as number);
        player.currentTime = ((newValue as number)*musicPlayer.time)/100;
        setCurrentTime(formatTimer(player.currentTime));
        playSong();
    }

    const handleVolume = (event: Event, newValue: number | number[]) => {
        const volumeTmp = newValue as number;
        setVolume(volumeTmp);
        setMute(volumeTmp === 0 ? true : false);
    }

    function listenWhenPlay(){
        player.addEventListener("timeupdate",()=>{
          setCurrentTime(formatTimer(player.currentTime));
          setPercent((player.currentTime*100)/musicPlayer.time);
        })
        player.onpause = () =>{
          player.pause();
        }
        player.onplay = () =>{
          player.play();
        }
        player.onended = () =>{
            playingMusicCurrent = false;
            playSong();
        }
    }

    const playSong = () =>{
        if(playingMusicCurrent === false){
            player.src = musicPlayer.url || musicRedux.url;
            playingMusicCurrent = true;
        }
        setPlayPause(false);
        player.play();
        listenWhenPlay();
    }

    const pauseSong = ()=>{
        setPlayPause(true);
        player.pause();
    }

    useEffect(() => {
        listenWhenPlay();
    }, []);
    useEffect(()=>{
        window.addEventListener('storage', () => {
            setMusicPlayer(JSON.parse(localStorage.getItem('music') || '{}'));
        })
    },[])
    useEffect(()=>{
        if (Object.keys(musicRedux).length !== 0){
            playingMusicCurrent = false;
            setMusicPlayer(musicRedux);
            playSong();
        }else{
            setMusicPlayer(JSON.parse(localStorage.getItem('music') || '{}'));
        }
    },[musicRedux])
    return(
        <>
            {Object.keys(musicPlayer).length === 0 ?
                <div></div>
                :
                (
                    <div className="sb__music__player">
                        <div className="sb__music__main__image sb__margin__auto">
                            <img src={musicPlayer.mainImg} alt={musicPlayer.nameSong}/>
                        </div>
                        <div className="sb__music__content">
                            <div className="sb__music__track">
                                <div>
                                    <p className="sb__name_song sb__margin_none">{musicPlayer.nameSong}</p>
                                    <p className="sb__margin_none">{musicPlayer.singer.nameSinger}</p>
                                </div>
                            </div>
                            <div className="sb__music__control">
                                <Action playPause={playPause} playSong={playSong} pauseSong={pauseSong}/>
                                <Slider
                                    size="small"
                                    value={percent}
                                    aria-label="Small"
                                    color="secondary"
                                    className="sb__color_green"
                                    onChange={handleChange}
                                />
                                <div className="sb__music__time">
                                    <div className="sb__flex_space_bewten">
                                        <p className="sb__margin_none">{currentTime}</p>
                                        <p className="sb__margin_none">{formatTimer(musicPlayer.time)}</p>
                                    </div>
                                </div>
                                <div className="sb__action__display_flex">
                                    <Stack className="sb__volume_min_width sb__margin_action" direction="row" sx={{ mb: 1 }} alignItems="center">
                                        {
                                            mute === false ?
                                            <VolumeUpIcon className="sb__cursor_pointer sb__volume_hover" onClick={()=>{setMute(true)}}/>
                                            :
                                            <VolumeOffIcon className="sb__cursor_pointer sb__volume_hover" onClick={()=>{setMute(false)}}/> 
                                        }
                                        <Slider
                                            size="small"
                                            value={mute === true ? 0 : volume}
                                            aria-label="Volumne"
                                            className="sb__margin_left sb__color_green"
                                            color="secondary"
                                            onChange={handleVolume}
                                        />
                                    </Stack>
                                    <div className="sb__playlist">
                                        <Link to="/music/current-playlist">
                                            <QueueMusicIcon/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MusicPlayer;