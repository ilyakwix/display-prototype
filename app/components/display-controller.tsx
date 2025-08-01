import React from "react";
import { SegmentedControl } from "@radix-ui/themes";
import styles from "./display-controller.module.css";

interface DisplayControllerProps {
  /**
   * The currently selected display value
   * @important
   * @enum flex,grid,block,inline-block,none
   */
  value: string;
  /**
   * Callback function called when the display value changes
   * @important
   */
  onValueChange: (value: string) => void;
}

const DISPLAY_OPTIONS = [
  { label: "Flex", value: "flex" },
  { label: "Grid", value: "grid" },
  { label: "Block", value: "block" },
  { label: "None", value: "none" },
];

export default function DisplayController({ value, onValueChange }: DisplayControllerProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Display Property</label>
      <SegmentedControl.Root className={styles.segmentedControl} value={value} onValueChange={onValueChange} size="1">
        {DISPLAY_OPTIONS.map((option) => (
          <SegmentedControl.Item key={option.value} value={option.value}>
            {option.label}
          </SegmentedControl.Item>
        ))}
      </SegmentedControl.Root>
    </div>
  );
}
