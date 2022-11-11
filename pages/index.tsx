import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Battleground</title>
        <meta name="description" content="nextjs battleground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.hello}>hello</div>
      </main>
    </div>
  )
}
