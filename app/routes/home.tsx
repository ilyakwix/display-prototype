import React, { useState } from "react";
import { Popover, Button } from "@radix-ui/themes";
import styles from "./home.module.css";
import DisplayController from "../components/display-controller";
import FlexboxSettings from "../components/flexbox-settings";

export default function Home() {
  const [displayValue, setDisplayValue] = useState("flex");

  // Flexbox settings state
  const [flexDirection, setFlexDirection] = useState("row");
  const [alignItems, setAlignItems] = useState("stretch");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [rowGap, setRowGap] = useState(0);
  const [columnGap, setColumnGap] = useState(0);

  const handleDisplayChange = (value: string) => {
    setDisplayValue(value);
    console.log(`Display property changed to: ${value}`);
  };

  // Check if current display value is flex or inline-flex
  const isFlexDisplay = displayValue === "flex" || displayValue === "inline-flex";

  const handleFlexSettingsChange = (property: string, value: string | number) => {
    console.log(`Flex ${property} changed to: ${value}`);
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

          {isFlexDisplay && (
            <FlexboxSettings
              direction={flexDirection}
              alignItems={alignItems}
              justifyContent={justifyContent}
              rowGap={rowGap}
              columnGap={columnGap}
              onDirectionChange={(value) => {
                setFlexDirection(value);
                handleFlexSettingsChange("direction", value);
              }}
              onAlignItemsChange={(value) => {
                setAlignItems(value);
                handleFlexSettingsChange("alignItems", value);
              }}
              onJustifyContentChange={(value) => {
                setJustifyContent(value);
                handleFlexSettingsChange("justifyContent", value);
              }}
              onRowGapChange={(value) => {
                setRowGap(value);
                handleFlexSettingsChange("rowGap", value);
              }}
              onColumnGapChange={(value) => {
                setColumnGap(value);
                handleFlexSettingsChange("columnGap", value);
              }}
            />
          )}
        </Popover.Content>
      </Popover.Root>

      <div>Container</div>
    </div>
  );
}
