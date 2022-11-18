import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Battleground</title>
        <meta name="description" content="nextjs battleground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.hello}>Hello</div>
      </main>
    </div>
  )
}
