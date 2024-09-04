import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source }
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {
          skills.map((skill, id) => {
            return(
              <li className={styles.skill} key={id}>{skill}</li>
            );
          })
        }
      </ul>
      <div className={styles.links}>
        {demo && (
          <a className={styles.link} href={demo} target='_blank' rel='noreferrer'>
            Demo
          </a>
        )}
        <a className={styles.link} href={source} target='_blank' rel='noreferrer'>Source</a>
      </div>
    </div>
  );
};