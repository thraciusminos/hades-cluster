import respiteSystem from "../../assets/respite-system-background.jpg";

interface Props {}

export const MinosSystem: React.FC<Props> = () => {
  return (
    <img
      src={respiteSystem}
      alt="respite"
      height="100%"
      width="100%"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "inherit",
        width: "inherit",
      }}
    />
  );
};
