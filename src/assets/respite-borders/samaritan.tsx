const SamaritanBorder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="11.15 0.32 81.03 88.83"
      preserveAspectRatio="none"
      className={props.className}
      style={props.style}
    >
      <path
        fill="none"
        stroke="#29e51a"
        d="M12.929 87.38l24.292-53.501 26.895-20.533 8.387-.578 10.989-10.7 6.94 37.016z"
      ></path>
    </svg>
  );
};

export default SamaritanBorder;
