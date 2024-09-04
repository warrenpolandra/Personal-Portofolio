import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Section"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
            src={getImageUrl("about/cursorIcon.png")}
            alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Developer</h3>
              <p>I have 1.5 year of experience in web development. I&apos;m familiar with some web frameworks such as React and Next JS.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
            src={getImageUrl("about/uiIcon.png")}
            alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-End Developer</h3>
              <p>I have a few basic experience in Back End Development. Some of the projects that I have developed were built using Node JS, Express JS, GoLang, and Spring Boot.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
            src={getImageUrl("about/serverIcon.png")}
            alt="Mobile Icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer</h3>
              <p>I have 2.5 years of experience in Android development with Jetpack Compose. I&apos;m also familiar with both Java and Kotlin in Android development. In addition, I have some basic experience with Flutter framework.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};