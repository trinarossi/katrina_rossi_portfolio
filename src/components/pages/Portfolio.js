import React from "react";
import { useNav } from "../../hooks/useNav";
import SlidingGallery1 from "../SlidingGallery1";
import SlidingGallery2 from "../SlidingGallery2";
import styles from "../../styles/Portfolio.module.css";

const gdLogoImgs = [
  "/images/gd/tools-tavern.png",
  "/images/gd/sa-photography.png",
  "/images/gd/club-fit.png",
  "/images/gd/re-imagine.png",
];

const gdBFImgs = [
  "/images/gd/invited.png",
  "/images/gd/cdl1.jpg",
  "/images/gd/cdl2.jpg",
  "/images/gd/babyshower.jpg",
  "/images/gd/distracted_scholar.jpg",
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
                <div className={styles.textHeader}>
                  <h2>Gallery House</h2>
                  <p>(In Progress)</p>
                </div>
                <p>
                  Beauty is in the eye of the beholder, but composition is a
                  science. Let us help you build the perfect gallery wall for
                  your home, informed by color theory and principles of shape.
                  Gallery House is an eye-catching application that makes
                  curating the art on your wall not just easy, but fun! Powered
                  by Etsy’s open API (v3), upload an image of your art to your
                  gallery wall, and Gallery House shows you pieces that
                  compliment it based color, sourced from one of our twelve
                  featured Etsy sellers. Click on a piece of art and navigate to
                  its Etsy listing, or save your gallery wall and come back to
                  view it later.
                </p>
                <a
                  href="https://github.com/gamk-capstone/gallery-house"
                  target="_blank"
                >
                  <button>View Github Repo</button>
                </a>
              </div>
            </div>
            <div className={styles.studyBuddies}>
              <img
                className={styles.projectImg2}
                src="/images/studybuddies.png"
              />
              <div className={styles.projectText}>
              <div className={styles.textHeader}>
                  <h2>Study Buddies</h2>
                  <p>(In Progress)</p>
                </div>
                <p>
                Study Buddies is the app developed to make learning fun for your elementary schooler! With Study Buddies a student can make an account with their parent or teacher, create their own pet, and earn points by correctly answering questions on flashcards curated for each grade level and subject. With these points your student can take care of their pet, customize its outfits, and furnish their pet’s home with fun decorations. Students’ pets can also visit their friends’ and classmates’ pets to leave messages and take in-game customized screenshots to share with each other. Put the fun back into your child’s learning with Study Buddies!
                </p>
                <a
                  href="https://github.com/trinarossi/Study-Buddies"
                  target="_blank"
                >
                  <button>View Github Repo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.graphicDesign}>
          <h2 className={styles.header}>Graphic Design</h2>
          <div className={styles.slideshows}>
            <div className={styles.bf}>
              <h2 className={styles.slideshowTitle}>Invitations & Brochures</h2>
              <SlidingGallery1 imgArr={gdBFImgs} />
            </div>
            <div className={styles.logos}>
              <h2 className={styles.slideshowTitle}>Logos</h2>
              <SlidingGallery2 imgArr={gdLogoImgs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
