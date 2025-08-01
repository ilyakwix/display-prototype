import React, { useState } from "react";
import { SegmentedControl } from "@radix-ui/themes";
import styles from "./display-controller.module.css";

interface DisplayControllerProps {
  /**
   * Callback function called when the display value changes
   * @important
   */
  onDisplayChange?: (displayValue: string) => void;
  /**
   * The initial display value
   * @important
   * @enum flex,grid,block,inline-block,none
   */
  defaultValue?: string;
}

const DISPLAY_OPTIONS = [
  { label: "Flex", value: "flex" },
  { label: "Grid", value: "grid" },
  { label: "Block", value: "block" },
  { label: "Inline Block", value: "inline-block" },
  { label: "None", value: "none" },
];

export default function DisplayController({ onDisplayChange, defaultValue = "flex" }: DisplayControllerProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    onDisplayChange?.(value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Display Property</label>
      <SegmentedControl.Root
        className={styles.segmentedControl}
        value={selectedValue}
        onValueChange={handleValueChange}
        size=""1""
      >
        {DISPLAY_OPTIONS.map((option) => (
          <SegmentedControl.Item key={option.value} value={option.value}>
            {option.label}
          </SegmentedControl.Item>
        ))}
      </SegmentedControl.Root>
    </div>
  );
}
