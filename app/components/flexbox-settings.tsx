import React from "react";
import { SegmentedControl, TextField, Flex, Box } from "@radix-ui/themes";
import styles from "./flexbox-settings.module.css";

interface FlexboxSettingsProps {
  /**
   * The flex direction value
   * @important
   * @enum row,column,row-reverse,column-reverse
   */
  direction: string;
  /**
   * The align items value
   * @important
   * @enum flex-start,center,flex-end,stretch,baseline
   */
  alignItems: string;
  /**
   * The justify content value
   * @important
   * @enum flex-start,center,flex-end,space-between,space-around,space-evenly
   */
  justifyContent: string;
  /**
   * The row gap value in pixels
   * @important
   * @format integer
   * @min 0
   */
  rowGap: number;
  /**
   * The column gap value in pixels
   * @important
   * @format integer
   * @min 0
   */
  columnGap: number;
  /**
   * Callback for direction changes
   * @important
   */
  onDirectionChange: (value: string) => void;
  /**
   * Callback for align items changes
   * @important
   */
  onAlignItemsChange: (value: string) => void;
  /**
   * Callback for justify content changes
   * @important
   */
  onJustifyContentChange: (value: string) => void;
  /**
   * Callback for row gap changes
   * @important
   */
  onRowGapChange: (value: number) => void;
  /**
   * Callback for column gap changes
   * @important
   */
  onColumnGapChange: (value: number) => void;
}

const DIRECTION_OPTIONS = [
  { label: "Row", value: "row" },
  { label: "Column", value: "column" },
  { label: "Row Reverse", value: "row-reverse" },
  { label: "Column Reverse", value: "column-reverse" },
];

const ALIGN_ITEMS_OPTIONS = [
  { label: "Start", value: "flex-start" },
  { label: "Center", value: "center" },
  { label: "End", value: "flex-end" },
  { label: "Stretch", value: "stretch" },
  { label: "Baseline", value: "baseline" },
];

const JUSTIFY_CONTENT_OPTIONS = [
  { label: "Start", value: "flex-start" },
  { label: "Center", value: "center" },
  { label: "End", value: "flex-end" },
  { label: "Space Between", value: "space-between" },
  { label: "Space Around", value: "space-around" },
  { label: "Space Evenly", value: "space-evenly" },
];

export default function FlexboxSettings({
  direction,
  alignItems,
  justifyContent,
  rowGap,
  columnGap,
  onDirectionChange,
  onAlignItemsChange,
  onJustifyContentChange,
  onRowGapChange,
  onColumnGapChange,
}: FlexboxSettingsProps) {
  const handleRowGapChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    onRowGapChange(value);
  };

  const handleColumnGapChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    onColumnGapChange(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.setting}>
        <label className={styles.label}>Direction</label>
        <SegmentedControl.Root
          className={styles.segmentedControl}
          value={direction}
          onValueChange={onDirectionChange}
          size="1"
        >
          {DIRECTION_OPTIONS.map((option) => (
            <SegmentedControl.Item key={option.value} value={option.value}>
              {option.label}
            </SegmentedControl.Item>
          ))}
        </SegmentedControl.Root>
      </div>

      <div className={styles.setting}>
        <label className={styles.label}>Align Items</label>
        <SegmentedControl.Root
          className={styles.segmentedControl}
          value={alignItems}
          onValueChange={onAlignItemsChange}
          size="1"
        >
          {ALIGN_ITEMS_OPTIONS.map((option) => (
            <SegmentedControl.Item key={option.value} value={option.value}>
              {option.label}
            </SegmentedControl.Item>
          ))}
        </SegmentedControl.Root>
      </div>

      <div className={styles.setting}>
        <label className={styles.label}>Justify Content</label>
        <SegmentedControl.Root
          className={styles.segmentedControl}
          value={justifyContent}
          onValueChange={onJustifyContentChange}
          size="1"
        >
          {JUSTIFY_CONTENT_OPTIONS.map((option) => (
            <SegmentedControl.Item key={option.value} value={option.value}>
              {option.label}
            </SegmentedControl.Item>
          ))}
        </SegmentedControl.Root>
      </div>

      <div className={styles.setting}>
        <label className={styles.label}>Gaps</label>
        <div className={styles.gapInputs}>
          <div className={styles.gapInput}>
            <label className={styles.gapLabel}>Row</label>
            <TextField.Root>
              <TextField.Input type="number" placeholder="0" value={rowGap} onChange={handleRowGapChange} min="0" />
            </TextField.Root>
          </div>
          <div className={styles.gapInput}>
            <label className={styles.gapLabel}>Column</label>
            <TextField.Root>
              <TextField.Input
                type="number"
                placeholder="0"
                value={columnGap}
                onChange={handleColumnGapChange}
                min="0"
              />
            </TextField.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
