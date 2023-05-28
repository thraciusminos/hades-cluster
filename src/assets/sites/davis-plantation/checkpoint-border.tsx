const DavisCheckpointBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="261.527 170.245 91.74 167.228"
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
        d="M 289.835 193.835 L 331.773 181.778 L 342.782 205.892 L 323.386 286.623 L 326.007 316.504 L 302.416 330.658 L 280.399 316.504 L 289.835 270.373 L 268.866 250.452 L 289.835 193.835 Z"
      ></path>
    </svg>
  );
};

export default DavisCheckpointBorder;
