import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Character from '../components/Character';
import styles from '../styles/Home.module.css';
import Loading from '../components/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch(
      'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023'
    );
    const json = await response.json();
    setCharacters(json.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <Header isDetailPage={false} />
      <main className={styles.home}>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.list}>
            {characters.map((c) => (
              <Character
                key={c.id}
                id={c.id}
                name={c.name}
                description={c.description}
                thumbnail={c.thumbnail}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
