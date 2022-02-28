import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Mnemonic.module.css'
import useSwr from 'swr'
import API from '../lib/api'
import { useRouter } from 'next/router'

export default function Mnemonic() {
  const router = useRouter()
  const { seed, path } = router.query

  const { data, error } = useSwr(`/api/segwit?seed=${seed}&path=${path}`, API.fetcher)

  if (error) return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>Failed to load bitcoin address.</div>
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

  const { segwit_address } = data

  if (!segwit_address) return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>
          Invalid Seed and path
        </h2>
      </main>
    </div>
  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bitcoin Address:
        </h1>

        <h2>{ segwit_address }</h2>
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
