import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Character({ id, name, description, thumbnail }) {
  return (
    <div id={id} className={styles.item}>
      <Link to={`/character/${id}`}>
        <div className={styles.img}>
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </div>
  );
}
