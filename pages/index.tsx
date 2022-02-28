import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import CustomPopup from "../components/popup";
import { useRouter } from 'next/router'
import Link from 'next/link'

const Home: NextPage = () => {
  const router = useRouter()
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e: any) => {
    setVisibility(e);
  }

  const handleSubmit = () => {
    let seed:any={}, path:any={}
    seed = document.querySelector('#seedInput')
    const seedValue = seed.value
    path = document.querySelector('#pathInput')
    const pathValue = path.value
    const href = `/segwit?seed=${seedValue}&path=${pathValue}`
    router.replace(href)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Playground!
        </h1>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <Link href="/mnemonic" passHref>
            <div className={styles.card}>
              <h2>Mnemonic &rarr;</h2>
              <p>Generate random mnemonic words.</p>
            </div>
          </Link>

          <div className={styles.card} onClick={(e) => setVisibility(!visibility)}>
            <h2>SegWit &rarr;</h2>
            <p>Generate a bitcoin address from a given seed and path.</p>
          </div>
        </div>

        <CustomPopup
          title="Generate bitcoin address"
          onClose={popupCloseHandler}
          show={visibility}>
          <div className={styles.popupContent}>
            <div className={styles.popupName}>
              Seed:
            </div>
            <input
              type="text"
              name="seed"
              id="seedInput" />
          </div>

          <div className={styles.popupContent}>
            <div className={styles.popupName}>
              Path:
            </div>
            <input
              type="text"
              name="path"
              id="pathInput" />
          </div>

          <input type="submit" value="Submit" onClick={handleSubmit} />
        </CustomPopup>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
