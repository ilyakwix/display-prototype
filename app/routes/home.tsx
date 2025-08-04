import React, { useState } from "react";
import { Popover, Button, Tabs, Inset, Grid, Flex, Reset } from "@radix-ui/themes";
import styles from "./home.module.css";
import DisplayController from "../components/display-controller";
import FlexboxSettings from "../components/flexbox-settings";
import { Columns2Icon, EyeOffIcon, Grid2X2Icon, Grid3X3Icon, Rows2Icon, SquareIcon } from "lucide-react";

const layoutPresets = [
  { label: "Box", value: "block", icon: <SquareIcon size={24} strokeWidth={1.5} /> },
  { label: "Horizontal Stack", value: "flex", icon: <Columns2Icon size={24} strokeWidth={1.5} /> },
  { label: "Vertical Stack", value: "flex", icon: <Rows2Icon size={24} strokeWidth={1.5} /> },
  { label: "2x2 Grid", value: "grid", icon: <Grid2X2Icon size={24} strokeWidth={1.5} /> },
  { label: "3x3 Grid", value: "grid", icon: <Grid3X3Icon size={24} strokeWidth={1.5} /> },
  { label: "None", value: "none", icon: <EyeOffIcon size={24} strokeWidth={1.5} /> },
];

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
            <Tabs.Root defaultValue="presets">
              <Tabs.List size="1">
                <Tabs.Trigger value="presets">Presets</Tabs.Trigger>
                <Tabs.Trigger value="custom">Custom</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="presets" className={styles.tabsContent}>
                <Grid columns="1fr 1fr 1fr" gapX="4" gapY="8" py="4">
                  {layoutPresets.map((preset) => (
                    <Reset key={preset.value}>
                      <button>
                        <Flex direction="column" gapX="1" align="center">
                          {preset.icon}
                          {preset.label}
                        </Flex>
                      </button>
                    </Reset>
                  ))}
                </Grid>
              </Tabs.Content>

              <Tabs.Content value="custom" className={styles.tabsContent}>
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
