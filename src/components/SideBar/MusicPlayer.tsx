import React, {useState} from 'react';
import Action from './Action';
// import {Line} from 'rc-progress';
import Slider from '@mui/material/Slider';
import {formatTimer} from '../../util/timmer';

const musicPlayer: {
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
} = {
    idSong: 'dsfjsdfj',
    nameSong: 'Love story',
    url: 'https://res.cloudinary.com/khoild11/video/upload/v1640681080/song/lovestory_gqaj6v.mp3',
    mainImg: 'https://i.ytimg.com/vi/6RssL81oWOI/maxresdefault.jpg',
    time: 275,
    numberListen: 0,
    singer:{
        idSinger: 'sdfsd11',
        nameSinger: 'Taylor Swift'
    },
    playing: false
}

const player = new Audio()

function MusicPlayer(){
    const [currentTime,setCurrentTime] = useState("00:00");
    const [percent, setPercent] = useState<number>(0);

    // listenWhenPlay();

    const handleChange = (event: Event, newValue: number | number[]) => {
        setPercent(newValue as number);
        player.currentTime = ((newValue as number)*musicPlayer.time)/100;
        setCurrentTime(formatTimer(player.currentTime));
    };

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
        // player.onended = () =>{
        //   Next();
        // }
    }

    const playSong = ()=>{
        if(musicPlayer.playing === false){
            player.src = musicPlayer.url;
            musicPlayer.playing = true;
        }
      
        player.play();
        listenWhenPlay();
    }

    const pauseSong = ()=>{
        player.pause();
    }
    return(
        <div className="sb__music__player">
            <div className="sb__music__main__image sb__margin__auto">
                <img src={musicPlayer.mainImg} alt={musicPlayer.nameSong}/>
            </div>
            <div className="sb__music__content">
                <div className="sb__music__track">
                    <div className="sb__display_flex">
                        <p className="sb__name_song sb__margin_none">{musicPlayer.nameSong}</p>
                        <p className="sb__margin_none">-</p>
                        <p className="sb__margin_none">{musicPlayer.singer.nameSinger}</p>
                    </div>
                </div>
                <div className="sb__music__control">
                    <Action playSong={playSong} pauseSong={pauseSong}/>
                    <Slider
                        size="small"
                        value={percent}
                        aria-label="Small"
                        color="secondary"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer;