import React, { useState, useEffect } from 'react';
import styles from './FlippingCard.module.scss';
import Bought from '../../itemsToUse/inCart.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RootState } from '../../Redux/store';

import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../../Redux/colorSlice/color';

const defaultColorData = {
  color: "Yellow",
  imageFront: "/img/yellowFront.png",
  imageBack: "/img/yellowBack.png",
  category: "long",
  id: "3",
  desc: "very cool"
};

interface ColorData {
  color: string;
  imageFront: string;
  imageBack: string;
  category: string;
  id: string;
  desc: string;
}

const Flipper: React.FC = () => {
  const dispatch = useDispatch();
  const activeColor = useSelector((state: RootState) => state.color);
  const [showBought, setShowBought] = useState(false);
  const [colorChosen, setColorChosen] = useState<ColorData | null>(defaultColorData);

  useEffect(() => {
    const url = new URL(`https://64c10995fa35860bae9fd16b.mockapi.io/Colors`);
    url.searchParams.append('color', activeColor.color);
    axios
      .get(url.toString())
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setColorChosen(response.data[0]);
        } else {
          setColorChosen(defaultColorData);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setColorChosen(defaultColorData);
      });
  }, [activeColor]);

  const handleChooseColor = (color: string) => {
    dispatch(setColor({ color: color }));
    setShowBought(false);
  };

  const buyColoredBag = async () => {
    if (colorChosen) {
      await axios.post('https://64c10995fa35860bae9fd16b.mockapi.io/Cart', colorChosen);
      setShowBought(true);
      console.log(colorChosen)
    }
  };


  return (
    <div className={`${styles.background} ${styles.page_container}`}>
      <BlogCard colorChosen={colorChosen}/>
      <div className={styles.text_area1}>
        <p>Vova is a freakin' legend and we can watch him surf all day cause it's pure fun</p>
      </div>
      <div className={styles.text_area2}>
        <p>Choose the color of bag you want:</p>
      </div>
      <div className={styles.colorsToChoose}>
      <ul className={styles.twoColumns}>
          <li
            className={activeColor.color === 'Sand' ? styles.activeColor : ''}
            onClick={() => handleChooseColor('Sand')}
          >
            Sand
          </li>
          <li
            className={activeColor.color === 'Purple' ? styles.activeColor : ''}
            onClick={() => handleChooseColor('Purple')}
          >
            Purple
          </li>
          <li
            className={activeColor.color === 'Yellow' ? styles.activeColor : ''}
            onClick={() => handleChooseColor('Yellow')}
          >
            Yellow
          </li>
          <li
            className={activeColor.color === 'Navy' ? styles.activeColor : ''}
            onClick={() => handleChooseColor('Navy')}
          >
            Navy
          </li>
        </ul>
      </div>
      <Link to="/cart">
      {showBought && <img className={styles.bought_image} src={Bought} alt="Bought" />}
      </Link>
      <button className={styles.button_area} onClick={buyColoredBag}>
        {showBought ? 'You made these guys happy, click!' : 'Купить'}
      </button>
    </div>
  );
};

const BlogCard: React.FC<{ colorChosen: ColorData | null }> = ({ colorChosen }) => {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div onMouseEnter={flip} onClick={flip} className={`${styles.card_container} ${flipped ? `${styles.flipped}` : ''}`}>
      <Front colorChosen={colorChosen} />
      <Back colorChosen={colorChosen} />
    </div>
  );
};

const Front: React.FC<{ colorChosen: ColorData | null }> = ({colorChosen}) => {
  return (
    <div className={styles.front}>
    {colorChosen ? (
      <ImageArea imageSrc={colorChosen.imageFront} />
    ) : (
      <div>Loading</div>
    )}
    <MainArea colorChosen={colorChosen} />
  </div>
  );
};

const Back: React.FC<{ colorChosen: ColorData | null }> = ({colorChosen}) => {
  return (
    <div className={styles.back}>
      {colorChosen ? (
        <div className={styles.image_container}>
          <img className={styles.card_image} src={colorChosen.imageBack} alt="Blog Post" />
          <p className={styles.blog_content}>
            {colorChosen.desc}
          </p>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

const ImageArea: React.FC<{ imageSrc?: string }> = ({ imageSrc }) => {
  if (!imageSrc) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.image_container}>
      <img className={styles.card_image} src={imageSrc} alt="Blog Post" />
    </div>
  );
};

const MainArea: React.FC<{ colorChosen: ColorData | null }> = ({ colorChosen }) => {
  return (
    <div className={styles.main_area}>
      <div className={styles.blog_post}>
        <p className={styles.blog_content}>
          {colorChosen?.desc || 'Loading'}
        </p>
      </div>
    </div>
  );
};

export default Flipper;
