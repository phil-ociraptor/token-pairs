import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import coingeckoList from "../data/coingecko.json";
import { processInputPair, processInputAddresses } from "../utils/pairs";

export default function Home() {
  const [pairsInput, setPairsInput] = useState("");
  const [addressesInput, setAddressesInput] = useState("");
  const [tokenList, setTokenList] = useState(coingeckoList.tokens); //coingecko as fallback

  // Enable this code to restrict token set to only 0x API approved stuff
  // useEffect(async () => {
  //   const res = await fetch("https://api.0x.org/swap/v1/tokens").then((res) =>
  //     res.json()
  //   );
  //   // 0x api response has a "records" field. Tokenlists uses a "tokens" field
  //   setTokenList(res.records);
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Token Pairs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Token Pairs</h1>

        <p className={styles.description}>
          Exhibit A: Convert a list of token pairs into JSON i.e.{" "}
          <code className={styles.code}>DAI-WETH,USDC/MATIC</code>
        </p>
        {/ETH/.test(pairsInput) && (
          <p className={styles.warning}>
            Make sure you are using WETH instead of ETH for ERC-20s
          </p>
        )}

        <input onChange={(e) => setPairsInput(e.target.value)}></input>
        <div>
          {pairsInput &&
            JSON.stringify(processInputPair(pairsInput, tokenList))}
        </div>

        <p className={styles.description}>
          Exhibit B: Check a list of addresses to see if valid i.e.{" "}
          <code className={styles.code}>
            [["0x6b175474e89094c44da98b954eedeac495271d0f","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"]]
          </code>
        </p>

        <input onChange={(e) => setAddressesInput(e.target.value)}></input>
        <div>
          {addressesInput &&
            JSON.stringify(processInputAddresses(addressesInput, tokenList))}
        </div>
      </main>
    </div>
  );
}
