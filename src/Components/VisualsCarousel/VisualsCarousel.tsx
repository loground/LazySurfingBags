import { Carousel } from 'react-carousel-minimal';
import styles from './VisualsCarousel.module.scss';
import img1 from '../../itemsToUse/img1.png';
import img2 from '../../itemsToUse/img2.png';
import img3 from '../../itemsToUse/img3.png';
import img4 from '../../itemsToUse/img4.png';
import img5 from '../../itemsToUse/img5.png';
import img6 from '../../itemsToUse/img6.jpg';
import img7 from '../../itemsToUse/img7.jpg';
import img8 from '../../itemsToUse/img8.jpg';


const items = [
  {
    image: img1,
    caption: "Surf is cool"
  },
  {
    image: img2,
    caption: "Surf is nice"
  },
  {
    image: img3,
    caption: "Surf is great"
  },
  {
    image: img4,
    caption: "Surf is amazing"
  },
  {
    image: img5,
    caption: "Surf sucks"
  },
  {
    image: img6,
    caption: "Surf is legendary"
  },
  {
    image: img7,
    caption: "Surf is ass"
  },
  {
    image: img8,
    caption: "Surf is Vova"
  },
];

const VisualsCarousel = () => {
  const captionStyle = {
    fontFamily: 'Handjet',
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontFamily: 'Handjet',
    fontSize: '2em',
    fontWeight: 'bold',
  }
  return (
    <div className={styles.App}>
      <div style={{ textAlign: "center" }}>
        <div style={{
        }}>
          <Carousel
            data={items}
            time={5000}
            width="900px"
            height="550px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "900px",
              maxHeight: "500px",
              margin: "20px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default VisualsCarousel;
