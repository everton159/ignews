import styles from './styles.module.scss';
import Head from 'next/head';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts |ig.news</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Posts</strong>
            <p>Paragrafo top do texto pra validar o que acontecer aqui</p>
          </a>
          <a>
          <time>12 de março de 2021</time>
            <strong>Posts</strong>
            <p>Paragrafo top do texto pra validar o que acontecer aqui</p>
          </a>
          <a>
          <time>12 de março de 2021</time>
            <strong>Posts</strong>
            <p>Paragrafo top do texto pra validar o que acontecer aqui</p>
          </a>
        </div>

      </main>

    </>
  );
}