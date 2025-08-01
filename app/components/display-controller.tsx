import React from "react";
import { SegmentedControl, DropdownMenu, Button, Text } from "@radix-ui/themes";
import { ChevronDown } from "lucide-react";
import styles from "./display-controller.module.css";

interface DisplayControllerProps {
  /**
   * The currently selected display value
   * @important
   * @enum flex,grid,block,inline-block,none,inline,inline-flex,inline-grid
   */
  value: string;
  /**
   * Callback function called when the display value changes
   * @important
   */
  onValueChange: (value: string) => void;
}

const SEGMENTED_OPTIONS = [
  { label: "Flex", value: "flex" },
  { label: "Grid", value: "grid" },
  { label: "Block", value: "block" },
  { label: "None", value: "none" },
];

const DROPDOWN_OPTIONS = [
  { label: "Inline", value: "inline" },
  { label: "Inline Block", value: "inline-block" },
  { label: "Inline Flex", value: "inline-flex" },
  { label: "Inline Grid", value: "inline-grid" },
];

export default function DisplayController({ value, onValueChange }: DisplayControllerProps) {
  // Determine if the current value should be shown in the segmented control
  const segmentedValue = SEGMENTED_OPTIONS.some((option) => option.value === value) ? value : undefined;

  const handleSegmentedChange = (newValue: string) => {
    onValueChange(newValue);
  };

  const handleDropdownSelect = (newValue: string) => {
    onValueChange(newValue);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Display Property</label>

      <div className={styles.controls}>
        <SegmentedControl.Root
          className={styles.segmentedControl}
          value={segmentedValue}
          onValueChange={handleSegmentedChange}
          size="1"
        >
          {SEGMENTED_OPTIONS.map((option) => (
            <SegmentedControl.Item key={option.value} value={option.value}>
              {option.label}
            </SegmentedControl.Item>
          ))}
        </SegmentedControl.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="outline" size="1" className={styles.moreButton}>
              <ChevronDown size={14} />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {DROPDOWN_OPTIONS.map((option) => (
              <DropdownMenu.Item key={option.value} onSelect={() => handleDropdownSelect(option.value)}>
                {option.label}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <Text size="2" className={styles.currentValue}>
        Current: <strong>{value}</strong>
      </Text>
    </div>
  );
}
