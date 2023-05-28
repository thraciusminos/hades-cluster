const DavisEstateBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="147.245 96.328 156.744 197.634"
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
        d="M 212.249 97.901 L 261.527 96.328 L 303.989 159.236 L 297.699 255.17 L 243.179 293.962 L 171.36 289.769 L 147.245 230.531 L 186.562 168.148 L 212.249 97.901 Z"
      ></path>
    </svg>
  );
};

export default DavisEstateBorder;
