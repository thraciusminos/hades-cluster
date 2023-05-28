const DavisDigsiteBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="107.451 154.343 129.252 166.15"
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
        strokeWidth={props.strokeWidth || "4"}
        d="M 165.21 157.343 L 183.566 168.269 L 189.248 215.472 L 216.346 231.643 L 234.703 234.266 L 230.332 266.608 L 189.685 288.899 L 161.713 319.493 L 125.874 306.381 L 111.451 218.531 L 124.563 173.514 L 165.21 157.343 Z"
      ></path>
    </svg>
  );
};

export default DavisDigsiteBorder;
