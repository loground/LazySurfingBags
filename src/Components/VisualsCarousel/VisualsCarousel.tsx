import  Slider from 'slider-moon';
import 'slider-moon/dist/style.css';
import img1 from '../../itemsToUse/img1.png';
import img2 from '../../itemsToUse/img2.png';
import img3 from '../../itemsToUse/img3.png';
import img4 from '../../itemsToUse/img4.png';
import img5 from '../../itemsToUse/img5.png';

const items = [
  { name: 'one', yourImage: img1 },
  { name: 'two', yourImage: img2 },
  { name: 'three', yourImage: img3 },
  { name: 'four', yourImage: img4 },
  { name: 'five', yourImage: img5 },
];

const VisualsCarousel = () => {
  return (
    <Slider
      slideClass={'my-slider'}
      infinite={true}
      bullets={true}
      arrowsNav={true}
      animation={'scale'}
      callback={() => {
        console.log('here');
      }}
    >
      <div className='slider my-slider'>
        <ul className='slider-wrapper'>
          {items.map((item) => (
            <li key={item.name}>
              <img src={item.yourImage} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </Slider>
  );
};

export default VisualsCarousel;
