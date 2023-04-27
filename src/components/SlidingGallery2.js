import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/SlidingGallery2.module.css"

const SlidingGallery2 = ({ imgArr }) => {
  const delay = 6000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
  <div className={styles.slideshow}>
    <div className={styles.slideshowSlider}
    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
    {imgArr.map((img, index) => {
      return (
        <img src={`${img}`} className={styles.slide} key={index} />
      )
    })}
    </div>

    <div className={styles.slideShowDots}>
        {imgArr.map((_, idx) => (
          <div key={idx} className={`${styles.slideshowDot} ${index === idx ? styles.active : ""}`} onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
      </div>
  </div>
  )
};

export default SlidingGallery2;