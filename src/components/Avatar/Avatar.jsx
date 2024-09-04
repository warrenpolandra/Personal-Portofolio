import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Avatar.module.css";

export const Avatar = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Warren</h1>
          <p className={styles.description}>I&apos;m a Software Engineer with Bachelor of Computer Science having experiences in Android Mobile Development, Web Development, and Back End Development. Nice to meet you!</p>
        <a className={styles.contactBtn} href="#contact">Contact Me</a>
      </div>
      <img
        className={styles.avatarImg}
        src={getImageUrl("hero/pasfoto.jpeg")}
        alt="Avatar"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};