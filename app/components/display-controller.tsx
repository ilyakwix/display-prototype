import React, { useState, useEffect } from "react";
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
  // Track the sticky fourth option - only changes when selecting from dropdown
  const [stickyFourthOption, setStickyFourthOption] = useState(() => {
    // Initialize based on current value
    const isPrimaryValue = PRIMARY_OPTIONS.some((option) => option.value === value);
    const isNoneValue = value === "none";

    if (isPrimaryValue || isNoneValue) {
      return DEFAULT_FOURTH_OPTION;
    } else {
      return { label: VALUE_TO_LABEL_MAP[value] || value, value };
    }
  });

  // Update sticky fourth option only when value changes from dropdown selection
  useEffect(() => {
    const isPrimaryValue = PRIMARY_OPTIONS.some((option) => option.value === value);
    const isNoneValue = value === "none";

    // Only update sticky option if the new value is not a primary option
    // This means it was selected from the dropdown
    if (!isPrimaryValue && !isNoneValue) {
      setStickyFourthOption({ label: VALUE_TO_LABEL_MAP[value] || value, value });
    }
  }, [value]);

  // Calculate segmented control options - prioritize current value if it's non-primary
  const isPrimaryValue = PRIMARY_OPTIONS.some((option) => option.value === value);
  let fourthOption;

  if (!isPrimaryValue) {
    // If current value is not a primary option, it should be the 4th option
    fourthOption = { label: VALUE_TO_LABEL_MAP[value] || value, value };
  } else {
    // Otherwise use the sticky fourth option
    fourthOption = stickyFourthOption;
  }

  const segmentedOptions = [...PRIMARY_OPTIONS, fourthOption];

  // Filter dropdown options to exclude the current fourth option
  const filteredDropdownOptions = DROPDOWN_OPTIONS.filter((option) => {
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
            <SegmentedControl.Item className={styles.displayItem} key={option.value} value={option.value}>
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
    </div>
  );
}
