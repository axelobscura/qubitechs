import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Qubit() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WHAT IS A QUBIT</title>
        <link rel="icon" type="image/png" href="https://qubitechs.com/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <img src="logo_white.svg" className={styles.elLogo} alt="QUBIT a quantum internet" />
        </Link>
      </main>

      <footer className={styles.footer}>
        <b>@ 2020 - 2021. QUBITECHS - All Rights Reserved.</b>
      </footer>
    </div>
  )
}
