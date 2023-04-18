import React from "react";
import { useNav } from "../../hooks/useNav";
import SlidingGallery from "../SlidingGallery";
import styles from "../../styles/Portfolio.module.css";

const gdImgs = [
  "/images/gd/invited.png",
  "/images/gd/tools_tavern_logo.jpg",
  "/images/gd/babyshower.jpg",
];

const Portfolio = () => {
  const portfolioRef = useNav("Portfolio");

  return (
    <div>
      <section ref={portfolioRef} id="portfolioPage" className={styles.container}>
        <h1 className={styles.title}>Portfolio</h1>
        <div className={styles.webDev}>
          <div className={styles.galleryHouse}>
            <img className={styles.projectImg} src="/images/galleryhouse.png" />
            <h2>Gallery House</h2>
          </div>
          <div className={styles.studyBuddies}>
            <img className={styles.projectImg} src="/images/studybuddies.gif" />
            <h2>Study Buddies</h2>
          </div>
          <div className={styles.puzzleShop}>
            <img className={styles.projectImg} src="/images/puzzles.png" />
            <h2>Puzzle Shop</h2>
          </div>
        </div>
        <div className={styles.slideshows}>
          <div className={styles.graphicDesign}>
            <SlidingGallery imgArr={gdImgs} />
            <h2>Graphic Design</h2>
          </div>
          <div className={styles.illustrations}>
            <SlidingGallery imgArr={gdImgs} />
            <h2>Illustrations</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
