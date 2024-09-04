import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to contact me for project collaboration or anything else!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
          <a href="mailto:warren.polandra@gmail.com">warren.polandra@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin" />
          <a href="https://www.linkedin.com/in/warren-gerald-polandra-a21b07206/">Warren Gerald Polandra</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
          <a href="https://github.com/warrenpolandra">github.com/warrenpolandra</a>
        </li>
      </ul>
    </footer>
  )
}
