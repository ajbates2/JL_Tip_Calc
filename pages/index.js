import Head from 'next/head'
import { useState } from 'react';
import MainForm from '../components/MainForm'
import styles from '../styles/Home.module.css'
import TipAlgo from '../utils/TipAlgo';

export default function Home() {

	const [beerTips, setBeerTips] = useState(0)
  const [cookTips, setCookTips] = useState(0)
  
  const handleSubmit = (event) => {
		event.preventDefault();
		const { totalCharged, beerCash, togoCharged, togoCash, beertenders, cooks } = event.target;
        const data = {
            totalCharged: parseFloat(totalCharged.value),
            beerCash: parseFloat(beerCash.value),
            togoCharged: parseFloat(togoCharged.value),
            togoCash: parseFloat(togoCash.value),
            beertenders: parseFloat(beertenders.value),
            cooks: parseFloat(cooks.value)
        }
		const tips = TipAlgo(data)
    setBeerTips(tips.beertender)
    setCookTips(tips.cook)
	};

  return (
    <div className={styles.container}>
      <Head>
        <title>JL Beers Tip Caclculator</title>
        <meta name="description" content="Created By AJ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Tip Calculator</h1>
        <MainForm handleSubmit={handleSubmit} />
        <div className={styles.responseContainer}>
          <div className={styles.beertender}>
            <h2>${beerTips}</h2>
            <p>per beertender</p>
          </div>
          <div className={styles.cook}>
            <h2>${cookTips}</h2>
            <p>per cook</p>
          </div>
        </div>
      </main>
    </div>
  )
}
