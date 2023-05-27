const DavisLoggingBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="172.64 73.864 105.332 112.325"
      preserveAspectRatio="none"
      className={props.className}
      style={props.style}
    >
      <path
        fill={props.fill || "rgba(250, 172, 82, 50%)"}
        stroke={props.stroke || "#fa8a0a"}
        strokeWidth={props.strokeWidth || "5"}
        d="M 172.64 126.311 L 204.545 140.734 L 212.85 186.189 L 256.119 184.003 L 277.972 152.098 L 250.874 91.783 L 192.308 73.864 L 172.64 126.311 Z"
      ></path>
    </svg>
  );
};

export default DavisLoggingBorder;
