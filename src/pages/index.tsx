import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { example } from '../store/user/userSlice'
import {exampleSelector} from '../store/user/userSelectors'

const Home: NextPage = () => {

  const { valueExample } = useSelector(exampleSelector);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <a onClick={() => dispatch(example())} className={styles.card}>
            <h2>REDUX TEST {valueExample}</h2>
          </a>
      </main>
    </div>
  )
}

export default Home