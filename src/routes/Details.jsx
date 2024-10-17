import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import styles from '../styles/Details.module.css';

export default function Details() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState({});

  const getCharacter = async () => {
    const response = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    );
    const json = await response.json();
    setCharacter(json.data.results[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div>
      <Header isDetailPage={true} />
      <main className={styles.detail}>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.content}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={name}
            />
            <section>
              <p className={styles.name}>{character.name}</p>
              <ul className={styles.links}>
                {character.urls.map((u) => (
                  <li className={styles.link}>
                    <Link to={u.url}>{`${u.type}`}</Link>
                  </li>
                ))}
              </ul>
              {character.description && (
                <p className={styles.description}>{character.description}</p>
              )}
              <p className={styles.modified}>{character.modified}</p>
              <article className={styles.article}>
                <p>Comics</p>
                <ul>
                  {character.comics.items.map((c) => (
                    <li>
                      <Link to={c.resourceURI}>{c.name}</Link>
                    </li>
                  ))}
                </ul>
              </article>
              <article className={styles.article}>
                <p>Series</p>
                <ul>
                  {character.series.items.map((s) => (
                    <li>
                      <Link to={s.resourceURI}>{`${s.name}`}</Link>
                    </li>
                  ))}
                </ul>
              </article>
              <article className={styles.article}>
                <p>Stories</p>
                <ul>
                  {character.stories.items.map((s) => (
                    <li>
                      <Link to={s.resourceURI}>{`${s.name}(${s.type})`}</Link>
                    </li>
                  ))}
                </ul>
              </article>
              <article className={styles.article}>
                <p>Events</p>
                <ul>
                  {character.events.items.map((e) => (
                    <li>
                      <Link to={e.resourceURI}>{`${e.name}`}</Link>
                    </li>
                  ))}
                </ul>
              </article>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
