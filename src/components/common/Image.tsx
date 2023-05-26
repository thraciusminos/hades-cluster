import garrote from "@assets/artwork/garrote";
import ghoulshead from "@assets/artwork/ghoulshead";

const images: { [x: string]: string } = { ...garrote, ...ghoulshead };

const getImgSrc = (target: string | undefined) => {
  return target ? images[target] : "";
};

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<Props> = ({ src, alt, ...props }) => {
  return <img src={getImgSrc(src)} alt={alt} {...props} />;
};
