import celestials from "@assets/artwork/celestials";
import garrote from "@assets/artwork/garrote";
import ghoulshead from "@assets/artwork/ghoulshead";
import primarisHive from "@assets/artwork/primaris-hive-1.jpeg";
import davisSite from "@assets/sites/davis-plantation/davis-plantation.jpeg";

const images: { [x: string]: string } = {
  ...celestials,
  ...garrote,
  ...ghoulshead,
  davisSite,
  primarisHive,
};

const getImgSrc = (target: string | undefined) => {
  return target ? images[target] : "";
};

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<Props> = ({ src, alt, ...props }) => {
  return <img src={getImgSrc(src)} alt={alt} {...props} />;
};
