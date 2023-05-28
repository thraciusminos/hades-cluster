const DavisHabsEastBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="114.219 87.941 217.03 196.061"
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
        d="M 138.333 87.941 L 285.117 99.998 L 331.249 131.976 L 324.434 173.914 L 240.558 187.02 L 222.21 262.508 L 177.125 284.002 L 140.954 261.984 L 147.245 180.205 L 114.219 144.557 L 138.333 87.941 Z"
      ></path>
    </svg>
  );
};

export default DavisHabsEastBorder;
