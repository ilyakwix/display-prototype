import React from "react";
import styles from "./home.module.css";
import DisplayController from "../components/display-controller";

export default function Home() {
  const handleDisplayChange = (displayValue: string) => {
    console.log(`Display property changed to: ${displayValue}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Layout Controller</h1>

      <DisplayController onDisplayChange={handleDisplayChange} />
      <div>Container</div>
    </div>
  );
}
