import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import './css/carousel.css';

import HomeCarousel_1 from '../resources/HomeCarousel_1.jpg';
import HomeCarousel_2 from '../resources/HomeCarousel_2.jpg';
import HomeCarousel_3 from '../resources/HomeCarousel_3.jpg';
import Background_img from '../resources/Background_img.jpg';

function HomeCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image src={HomeCarousel_1} alt="" height={850}/>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image src={HomeCarousel_2} alt="" height={850}/>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image src={HomeCarousel_3} alt="" height={850}/>
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;