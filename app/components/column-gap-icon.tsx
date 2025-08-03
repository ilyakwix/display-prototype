import React from "react";

interface ColumnGapIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ColumnGapIcon: React.FC<ColumnGapIconProps> = ({ size = 24, width = size, height = size, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 4v16M20 4v16M7 10v4m10-4v4m0-2H7" className="Vector" />
    </svg>
  );
};

export default ColumnGapIcon;
