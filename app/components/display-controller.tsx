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

const PRIMARY_OPTIONS = [
  { label: "Flex", value: "flex" },
  { label: "Grid", value: "grid" },
  { label: "Block", value: "block" },
];

const DEFAULT_FOURTH_OPTION = { label: "None", value: "none" };

const DROPDOWN_OPTIONS = [
  { label: "Inline", value: "inline" },
  { label: "Inline Block", value: "inline-block" },
  { label: "Inline Flex", value: "inline-flex" },
  { label: "Inline Grid", value: "inline-grid" },
  { label: "None", value: "none" },
];

// Map display values to their display labels
const VALUE_TO_LABEL_MAP: Record<string, string> = {
  flex: "Flex",
  grid: "Grid",
  block: "Block",
  none: "None",
  inline: "Inline",
  "inline-block": "Inline Block",
  "inline-flex": "Inline Flex",
  "inline-grid": "Inline Grid",
};

export default function DisplayController({ value, onValueChange }: DisplayControllerProps) {
  // Determine the fourth option based on the current value
  const isPrimaryValue = PRIMARY_OPTIONS.some((option) => option.value === value);
  const isNoneValue = value === "none";

  const fourthOption =
    isPrimaryValue || isNoneValue ? DEFAULT_FOURTH_OPTION : { label: VALUE_TO_LABEL_MAP[value] || value, value };

  const segmentedOptions = [...PRIMARY_OPTIONS, fourthOption];

  // Filter dropdown options to exclude the current value shown in segmented control
  const filteredDropdownOptions = DROPDOWN_OPTIONS.filter((option) => {
    // Exclude the current value if it's displayed in the segmented control
    return option.value !== fourthOption.value;
  });

  // Sort dropdown options to ensure "None" appears last if present
  const sortedDropdownOptions = filteredDropdownOptions.sort((a, b) => {
    if (a.value === "none") return 1;
    if (b.value === "none") return -1;
    return 0;
  });

  const handleSegmentedChange = (newValue: string) => {
    onValueChange(newValue);
  };

  const handleDropdownSelect = (newValue: string) => {
    onValueChange(newValue);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Display</label>

      <div className={styles.controls}>
        <SegmentedControl.Root
          className={styles.segmentedControl}
          value={value}
          onValueChange={handleSegmentedChange}
          size="1"
        >
          {segmentedOptions.map((option) => (
            <SegmentedControl.Item key={option.value} value={option.value}>
              {option.label}
            </SegmentedControl.Item>
          ))}
        </SegmentedControl.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft" size="1" color="gray" className={styles.moreButton}>
              <ChevronDown size={14} />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {sortedDropdownOptions.map((option) => (
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
