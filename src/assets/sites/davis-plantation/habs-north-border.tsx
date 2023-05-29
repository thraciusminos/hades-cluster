const DavisHabsNorthBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="39.875 44.575 239.33 290.704"
      preserveAspectRatio="none"
      className={props.className}
      style={props.style}
    >
      <defs>
        <pattern
          id="diagonaldown"
          className="hatch"
          patternUnits="userSpaceOnUse"
          width="40"
          height="20"
        >
          <line x1="-10" y1="0" x2="10" y2="20" />
          <line x1="10" y1="0" x2="30" y2="20" />
          <line x1="30" y1="0" x2="50" y2="20" />
        </pattern>
      </defs>
      <path
        fill={props.fill || "url(#diagonaldown)"}
        stroke={props.stroke || "rgba(255, 145, 15, 90%)"}
        strokeWidth={props.strokeWidth || "5"}
        d="M 186.562 72.214 L 216.443 47.575 L 272.536 62.778 L 276.205 118.87 L 181.32 189.641 L 173.456 294.487 L 95.347 333.279 L 41.875 284.002 L 105.831 202.223 L 186.562 72.214 Z"
      ></path>
    </svg>
  );
};

export default DavisHabsNorthBorder;
