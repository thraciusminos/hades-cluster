const DavisAquacologyBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="179.893 90.232 159.647 200.488"
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
        d="M 182.893 120.443 L 208.056 94.232 L 246.848 94.756 L 276.729 167.099 L 329.676 215.328 L 337.54 250.976 L 282.496 288.72 L 212.249 228.958 L 182.893 120.443 Z"
      ></path>
    </svg>
  );
};

export default DavisAquacologyBorder;
