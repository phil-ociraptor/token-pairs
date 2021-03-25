import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Token(props) {
  return (
    <div>
      <div>{props.symbol}</div>
      <div>{props.name}</div>
      <div>{props.address}</div>
      <img src={props.logoURI}></img>
    </div>
  );
}
