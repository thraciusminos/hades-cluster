import celestials from "@assets/artwork/celestials";
import respiteImages from "@app/assets/artwork";
import garrote from "@assets/artwork/garrote";
import ghoulshead from "@assets/artwork/ghoulshead";

import davisSite from "@assets/sites/davis-plantation/davis-plantation.jpeg";

const images: { [x: string]: string } = {
  ...respiteImages,
  ...celestials,
  ...garrote,
  ...ghoulshead,
  davisSite,
};

const getImgSrc = (target: string | undefined) => {
  return target ? images[target] : "";
};

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<Props> = ({ src, alt, ...props }) => {
  return <img src={getImgSrc(src)} alt={alt} {...props} />;
};
