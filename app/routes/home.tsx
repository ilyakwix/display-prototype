import React, { useState } from "react";
import { Popover, Button } from "@radix-ui/themes";
import styles from "./home.module.css";
import DisplayController from "../components/display-controller";

export default function Home() {
  const [displayValue, setDisplayValue] = useState("flex");

  const handleDisplayChange = (value: string) => {
    setDisplayValue(value);
    console.log(`Display property changed to: ${value}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Layout Controller</h1>

      <Popover.Root>
        <Popover.Trigger>
          <Button>Open Display Controls</Button>
        </Popover.Trigger>
        <Popover.Content>
          <DisplayController value={displayValue} onValueChange={handleDisplayChange} />
        </Popover.Content>
      </Popover.Root>

      <div>Container</div>
    </div>
  );
}
