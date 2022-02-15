import react, {useState} from 'react';
import '../../asset/css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
import {notification} from '../../api/notification';
import {musics} from '../../api/music';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {listen} from '../../redux/actions/listen';
import { useDispatch } from 'react-redux';


function BannerComponent(){
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const playMusic = (id: string) => {
    const music = musics.filter((song)=>{
      return song.idSong === id;
    })

    window.localStorage.setItem('music',JSON.stringify(music[0]));
    dispatch(listen('listen',music[0]));
  }

  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
        notification.map((notifi,index) => {
          return(
            <Carousel.Item key={index} className="banner">
              <div
                className="d-block w-100 banner__background_image"
                style={{ backgroundImage: `url(${notifi.image})`}}
              ></div>
              <Carousel.Caption className="banner__display_flex banner__width_height">
                <div className="banner__conent">
                  <h1>{notifi.title}</h1>
                  <p>{notifi.content}</p>
                  <div className="banner__btn">
                    {
                      notifi.type === "Song" ?
                        <div className="play__song_btn" onClick={()=>playMusic(notifi.idSNEA)}>
                          <span className="banner__icon">
                            <PlayCircleOutlineIcon/>
                          </span>
                          <span>Listen To Music</span>
                        </div>
                      :null
                    }
                  </div>
                </div>
              </Carousel.Caption>
          </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default BannerComponent;