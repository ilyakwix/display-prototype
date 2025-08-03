import React, { useState } from "react";
import { SegmentedControl } from "@radix-ui/themes";
import styles from "./flexbox-settings.module.css";
import {
  ArrowDownIcon,
  ArrowLeft,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  XIcon,
  CornerDownLeftIcon,
  CornerUpRightIcon,
} from "lucide-react";

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

const DIRECTION_OPTIONS: { label: React.ReactNode; value: string }[] = [
  { label: <ArrowRightIcon size={16} strokeWidth={1.5} />, value: "row" },
  { label: <ArrowDownIcon size={16} strokeWidth={1.5} />, value: "column" },
  { label: <ArrowLeftIcon size={16} strokeWidth={1.5} />, value: "row-reverse" },
  { label: <ArrowUpIcon size={16} strokeWidth={1.5} />, value: "column-reverse" },
];

const WRAP_OPTIONS: { label: React.ReactNode; value: string }[] = [
  { label: <XIcon size={16} strokeWidth={1.5} />, value: "nowrap" },
  { label: <CornerDownLeftIcon size={16} strokeWidth={1.5} />, value: "wrap" },
  { label: <CornerUpRightIcon size={16} strokeWidth={1.5} />, value: "wrap-reverse" },
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

export const FlexboxSettings = ({
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
}: FlexboxSettingsProps) => {
  const [flexWrap, setFlexWrap] = useState("nowrap");

  const handleRowGapChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    onRowGapChange(value);
  };

  const handleColumnGapChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    onColumnGapChange(value);
  };

  const handleWrapChange = (value: string) => {
    setFlexWrap(value);
    console.log(`Flex wrap changed to: ${value}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.directionWrapContainer}>
        <div className={styles.directionWrapSetting}>
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

        <div className={styles.directionWrapSetting}>
          <label className={styles.label}>Wrap</label>
          <SegmentedControl.Root
            className={styles.segmentedControl}
            value={flexWrap}
            onValueChange={handleWrapChange}
            size="1"
          >
            {WRAP_OPTIONS.map((option) => (
              <SegmentedControl.Item key={option.value} value={option.value}>
                {option.label}
              </SegmentedControl.Item>
            ))}
          </SegmentedControl.Root>
        </div>
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
            <input
              type="number"
              placeholder="0"
              value={rowGap}
              onChange={handleRowGapChange}
              min="0"
              className={styles.numberInput}
            />
          </div>
          <div className={styles.gapInput}>
            <label className={styles.gapLabel}>Column</label>
            <input
              type="number"
              placeholder="0"
              value={columnGap}
              onChange={handleColumnGapChange}
              min="0"
              className={styles.numberInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexboxSettings;
