import React from "react";

interface RowGapIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const RowGapIcon: React.FC<RowGapIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <g className="row-gap">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 4H4m16 16H4M14 7h-4m4 10h-4m2 0V7"
          className="Vector"
        />
      </g>
    </svg>
  );
};

export default RowGapIcon;
