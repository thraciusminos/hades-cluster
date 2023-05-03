const GhoulsheadBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="39.43 68.8 76.42 56.18"
      preserveAspectRatio="none"
      className={props.className}
      style={props.style}
    >
      <path
        fill="none"
        stroke="#29e51a"
        d="M49.886 82.139L94.422 70.57l19.665 8.965-.29 39.62-36.437 4.048-36.15-7.23 9.544-11.568z"
      ></path>
    </svg>
  );
};

export default GhoulsheadBorder;
