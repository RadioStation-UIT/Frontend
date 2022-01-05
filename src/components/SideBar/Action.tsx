import React, {useState} from 'react';
import '../../asset/css/SideBar.css';
import prev from '../../asset/image/player/prev.png';
import prevHover from '../../asset/image/player/prevHover.png';
import play from '../../asset/image/player/play.png';
import playHover from '../../asset/image/player/playHover.png';
import pause from '../../asset/image/player/pause.png';
import pauseHover from '../../asset/image/player/pauseHover.png';
import next from '../../asset/image/player/next.png';
import nextHover from '../../asset/image/player/nextHover.png';

interface ActionType{
    playSong: ()=> void;
    pauseSong: ()=>void;
    playPause: boolean;
}

function PlayerAction({
    playSong,
    pauseSong,
    playPause
}: ActionType){
    const [hoverAction, setHoverAction] = useState(-1);

    const playMusic = () =>{
        setHoverAction(3);
        playSong();
    }
    const pauseMusic = () =>{
        setHoverAction(2);
        pauseSong();
    }
    return(
        <div className="sb__action">
            <div className="sb__action__prev"
                onMouseOver={()=>{setHoverAction(1)}} 
                onMouseOut={()=>{setHoverAction(-1)}}
            >
                <img src={hoverAction === 1 ? prevHover:prev} alt="prev"/>
            </div>
            {
                playPause ?
                <div className="sb__action__play" 
                    onClick={playMusic}
                    onMouseOver={()=>{setHoverAction(2)}} 
                    onMouseOut={()=>{setHoverAction(-1)}}
                >
                    <img src={hoverAction === 2 ? playHover:play} alt="play"/>
                </div>
                :
                <div className="sb__action__pause" 
                    onClick={pauseMusic}
                    onMouseOver={()=>{setHoverAction(3)}} 
                    onMouseOut={()=>{setHoverAction(-1)}}
                >
                    <img src={hoverAction === 3 ? pauseHover:pause} alt="pause"/>
                </div>
            }
            <div className="sb__action__next"
                onMouseOver={()=>{setHoverAction(4)}} 
                onMouseOut={()=>{setHoverAction(-1)}}
            >
                <img src={hoverAction === 4 ? nextHover:next} alt="next"/>
            </div>
        </div>
    )
}

export default PlayerAction