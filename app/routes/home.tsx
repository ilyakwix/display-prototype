import { Button } from "~/components/ui/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu/dropdown-menu";
import styles from "./home.module.css";

const neutralColors = [
  { name: "Neutral 1", variable: "var(--gray-1)" },
  { name: "Neutral 2", variable: "var(--gray-2)" },
  { name: "Neutral 3", variable: "var(--gray-3)" },
  { name: "Neutral 4", variable: "var(--gray-4)" },
  { name: "Neutral 5", variable: "var(--gray-5)" },
  { name: "Neutral 6", variable: "var(--gray-6)" },
  { name: "Neutral 7", variable: "var(--gray-7)" },
  { name: "Neutral 8", variable: "var(--gray-8)" },
  { name: "Neutral 9", variable: "var(--gray-9)" },
  { name: "Neutral 10", variable: "var(--gray-10)" },
  { name: "Neutral 11", variable: "var(--gray-11)" },
  { name: "Neutral 12", variable: "var(--gray-12)" },
];

const accentColors = [
  { name: "Accent 1", variable: "var(--iris-1)" },
  { name: "Accent 2", variable: "var(--iris-2)" },
  { name: "Accent 3", variable: "var(--iris-3)" },
  { name: "Accent 4", variable: "var(--iris-4)" },
  { name: "Accent 5", variable: "var(--iris-5)" },
  { name: "Accent 6", variable: "var(--iris-6)" },
  { name: "Accent 7", variable: "var(--iris-7)" },
  { name: "Accent 8", variable: "var(--iris-8)" },
  { name: "Accent 9", variable: "var(--iris-9)" },
  { name: "Accent 10", variable: "var(--iris-10)" },
  { name: "Accent 11", variable: "var(--iris-11)" },
  { name: "Accent 12", variable: "var(--iris-12)" },
];

const focusColors = [
  { name: "Focus 1", variable: "var(--yellow-1)" },
  { name: "Focus 2", variable: "var(--yellow-2)" },
  { name: "Focus 3", variable: "var(--yellow-3)" },
  { name: "Focus 4", variable: "var(--yellow-4)" },
  { name: "Focus 5", variable: "var(--yellow-5)" },
  { name: "Focus 6", variable: "var(--yellow-6)" },
  { name: "Focus 7", variable: "var(--yellow-7)" },
  { name: "Focus 8", variable: "var(--yellow-8)" },
  { name: "Focus 9", variable: "var(--yellow-9)" },
  { name: "Focus 10", variable: "var(--yellow-10)" },
  { name: "Focus 11", variable: "var(--yellow-11)" },
  { name: "Focus 12", variable: "var(--yellow-12)" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Radix Colors Dropdown Menu</h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className={styles.dropdownTrigger}>Select Color</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel className={styles.groupLabel}>Neutral</DropdownMenuLabel>
            {neutralColors.map((color) => (
              <DropdownMenuItem key={color.name}>
                <div className={styles.colorItem}>
                  <div className={styles.colorSwatch} style={{ backgroundColor: color.variable }} />
                  <span className={styles.colorName}>{color.name}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuGroup>
            <DropdownMenuLabel className={styles.groupLabel}>Accent</DropdownMenuLabel>
            {accentColors.map((color) => (
              <DropdownMenuItem key={color.name}>
                <div className={styles.colorItem}>
                  <div className={styles.colorSwatch} style={{ backgroundColor: color.variable }} />
                  <span className={styles.colorName}>{color.name}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuGroup>
            <DropdownMenuLabel className={styles.groupLabel}>Focus</DropdownMenuLabel>
            {focusColors.map((color) => (
              <DropdownMenuItem key={color.name}>
                <div className={styles.colorItem}>
                  <div className={styles.colorSwatch} style={{ backgroundColor: color.variable }} />
                  <span className={styles.colorName}>{color.name}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
