import { Button } from "~/components/ui/button/button";
import { RotateCcw, Check } from "lucide-react";
import styles from "./action-buttons.module.css";

interface ActionButtonsProps {
  hasChanges: boolean;
  onApply: () => void;
  onReset: () => void;
}

export function ActionButtons({ hasChanges, onApply, onReset }: ActionButtonsProps) {
  return (
    <div className={styles.container}>
      <Button variant="outline" onClick={onReset} disabled={!hasChanges} className={styles.resetButton}>
        <RotateCcw size={16} />
        Reset to Default
      </Button>

      <Button onClick={onApply} disabled={!hasChanges} className={styles.applyButton}>
        <Check size={16} />
        Apply Changes
        {hasChanges && <div className={styles.changeIndicator} />}
      </Button>
    </div>
  );
}
