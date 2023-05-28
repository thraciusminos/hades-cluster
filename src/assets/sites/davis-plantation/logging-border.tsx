const DavisLoggingBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="172.64 73.864 105.332 112.325"
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
        stroke={props.stroke || "rgba(255, 145, 15)"}
        strokeWidth={props.strokeWidth || "5"}
        d="M 172.64 126.311 L 204.545 140.734 L 212.85 186.189 L 256.119 184.003 L 277.972 152.098 L 250.874 91.783 L 192.308 73.864 L 172.64 126.311 Z"
      ></path>
    </svg>
  );
};

export default DavisLoggingBorder;
