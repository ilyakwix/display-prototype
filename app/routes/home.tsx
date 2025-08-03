import React, { useState } from "react";
import { Popover, Button, Tabs, Inset } from "@radix-ui/themes";
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
      <p>
        <p></p>
      </p>

      <Popover.Root>
        <Popover.Trigger>
          <Button>Open Display Controls</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Inset clip="padding-box">
            <Tabs.Root defaultValue="custom">
              <Tabs.List>
                <Tabs.Trigger value="presets">Presets</Tabs.Trigger>
                <Tabs.Trigger value="custom">Custom</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="presets">{/* Presets content will be added in future iterations */}</Tabs.Content>

              <Tabs.Content value="custom">
                <DisplayController value={displayValue} onValueChange={(value: string) => handleDisplayChange(value)} />

                {isFlexDisplay && (
                  <FlexboxSettings
                    direction={flexDirection}
                    alignItems={alignItems}
                    justifyContent={justifyContent}
                    rowGap={rowGap}
                    columnGap={columnGap}
                    onDirectionChange={(value: string) => {
                      setFlexDirection(value);
                      handleFlexSettingsChange("direction", value);
                    }}
                    onAlignItemsChange={(value: string) => {
                      setAlignItems(value);
                      handleFlexSettingsChange("alignItems", value);
                    }}
                    onJustifyContentChange={(value: string) => {
                      setJustifyContent(value);
                      handleFlexSettingsChange("justifyContent", value);
                    }}
                    onRowGapChange={(value: number) => {
                      setRowGap(value);
                      handleFlexSettingsChange("rowGap", value);
                    }}
                    onColumnGapChange={(value: number) => {
                      setColumnGap(value);
                      handleFlexSettingsChange("columnGap", value);
                    }}
                  />
                )}
              </Tabs.Content>
            </Tabs.Root>
          </Inset>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
