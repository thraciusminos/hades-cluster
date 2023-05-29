const DavisProcessingBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="98.71 73.671 201.929 373.51"
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
        strokeWidth={props.strokeWidth || "10"}
        d="M 125.437 90.909 L 192.745 78.671 L 259.615 116.258 L 297.639 223.776 L 296.329 326.923 L 256.118 400.35 L 175.699 443.181 L 106.206 368.443 L 102.71 192.307 L 125.437 90.909 Z"
      ></path>
    </svg>
  );
};

export default DavisProcessingBorder;
