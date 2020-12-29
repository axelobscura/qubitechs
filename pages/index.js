import Head from 'next/head'
import Link from 'next/link'
import Particles from 'react-particles-js';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QUBIT a quantum internet</title>
        <link rel="icon" type="image/png" href="https://qubitechs.com/favicon.png" />
      </Head>
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
            },
            color: {
              value: '#fff'
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 3
              }
            },
            line_linked: {
              enable: true
            },
            move: {
              speed: 2.2
            }
          }
        }}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          left: 0,
          zIndex: 1
        }}
      />
      <main className={styles.main}>

        <Link href="/qubit">
          <img src="logo_white.svg" className={styles.elLogo} alt="QUBIT a quantum internet" />
        </Link>

        <h1 className={styles.title}>
          Welcome to <a href="https://qubitechs.com">QubiTechs</a>
        </h1>

        <h2 className={styles.titletwo}>QUANTUM INTERNET</h2>

        <p className={styles.description}>
          <small><b>Quantum computing differs from ordinary computing in many ways</b><br />First, ordinary computers are built around the concept of the bit, which is effectively a switch that can be flipped on or off -- what computer professionals call a 1 or 0.<br /><b>In contrast, QUANTUM COMPUTERS use the QUBIT, short for "quantum bit"</b><br/><br/><b>Qubits</b> are somewhat like ordinary bits<br/>in that they are measured as 0s and 1s, but in between measurements, they are an indeterminate mix of 0s and 1s.</small>
        </p>

      </main>

      <footer className={styles.footer}>
        <b>@ 2020 - 2021. QUBITECHS - All Rights Reserved.</b>
      </footer>
    </div>
  )
}
