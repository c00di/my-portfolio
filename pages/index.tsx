import Head from 'next/head'
import Navbar from '@components/Navbar.comp'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontname Lastname | My Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Tervetuloa</h1>

        <p className={styles.description}>Hei maailma!</p>
      </main>
    </div>
  )
}
