import react, {useState} from 'react';
import '../../asset/css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
import { url } from 'inspector';

function BannerComponent(){
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div
          className="d-block w-100 banner__background_image"
          style={{ backgroundImage: "url('https://camhung.net/wp-content/uploads/2021/08/Taylor-Swift-VMA-2019-billboard-1548-1607693369-compressed.jpg')"}}
        ></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100 banner__background_image"
          style={{ backgroundImage: "url('https://camhung.net/wp-content/uploads/2021/08/Taylor-Swift-VMA-2019-billboard-1548-1607693369-compressed.jpg')"}}
        ></div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100 banner__background_image"
          style={{ backgroundImage: "url('https://camhung.net/wp-content/uploads/2021/08/Taylor-Swift-VMA-2019-billboard-1548-1607693369-compressed.jpg')"}}
        ></div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerComponent;