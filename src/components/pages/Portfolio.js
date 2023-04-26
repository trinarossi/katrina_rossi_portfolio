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
      <section
        ref={portfolioRef}
        id="portfolioPage"
        className={styles.container}
      >
        <h1 className={styles.title}>Portfolio</h1>
        <div className={styles.top}>
          <div className={styles.webDev}>
            <div className={styles.galleryHouse}>
              <img
                className={styles.projectImg1}
                src="/images/gallery-house.png"
              />
              <div className={styles.projectText}>
                <h2>Gallery House</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at venenatis lacus. Etiam aliquam id odio sed suscipit. Proin imperdiet scelerisque orci eget ornare. In hendrerit sapien sit amet quam lobortis egestas. Suspendisse efficitur pellentesque risus, quis aliquet odio mollis ac. Mauris tincidunt nunc ex, at consectetur arcu interdum ullamcorper.</p>
              </div>
            </div>
            <div className={styles.studyBuddies}>
              <div className={styles.projectText}>
                <h2>Study Buddies</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at venenatis lacus. Etiam aliquam id odio sed suscipit. Proin imperdiet scelerisque orci eget ornare. In hendrerit sapien sit amet quam lobortis egestas. Suspendisse efficitur pellentesque risus, quis aliquet odio mollis ac. Mauris tincidunt nunc ex, at consectetur arcu interdum ullamcorper.</p>
              </div>
              <img
                className={styles.projectImg2}
                src="/images/studybuddies.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.slideshows}>
          <div className={styles.graphicDesign}>
            <SlidingGallery imgArr={gdImgs} />
            <h2 className={styles.slideshowTitle}>Graphic Design</h2>
          </div>
          <div className={styles.illustrations}>
            <SlidingGallery imgArr={gdImgs} />
            <h2 className={styles.slideshowTitle}>Illustrations</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
