import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header({ isDetailPage }) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {isDetailPage && (
        <button className={styles.btnToList} onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
      )}
      <Link to="/">
        <h1>Marvel Characters</h1>
      </Link>
    </header>
  );
}
