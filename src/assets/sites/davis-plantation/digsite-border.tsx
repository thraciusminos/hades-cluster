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
      <path
        fill={props.fill || "rgba(247, 154, 47, 50%)"}
        stroke={props.stroke || "rgba(247, 154, 47, 90%)"}
        strokeWidth={props.strokeWidth || "5"}
        d="M 165.21 157.343 L 183.566 168.269 L 189.248 215.472 L 216.346 231.643 L 234.703 234.266 L 230.332 266.608 L 189.685 288.899 L 161.713 319.493 L 125.874 306.381 L 111.451 218.531 L 124.563 173.514 L 165.21 157.343 Z"
      ></path>
    </svg>
  );
};

export default DavisDigsiteBorder;
