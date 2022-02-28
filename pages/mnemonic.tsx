import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Mnemonic.module.css'
import useSwr from 'swr'
import API from '../lib/api'

export default function Mnemonic() {
  const { data, error } = useSwr('/api/mnemonic', API.fetcher)

  if (error) return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>Failed to load mnemonic words.</div>
      </main>
    </div>
  )
  if (!data) return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>loading</div>
      </main>
    </div>
  )

  const { mnemonic } = data

  return (
    <div className={styles.container}>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mnemonic words:
        </h1>

        <div className={styles.grid}>
          {mnemonic.map((word: string) => (
            <a className={styles.card} key={word}>
              <p>{word}</p>
            </a>
          ))}
        </div>
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
