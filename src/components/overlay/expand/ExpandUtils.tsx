import { Image } from "@app/components/common/Image";
import { Location } from "@resources/locationUtils";

export const getExpandImages = (location: Location) => {
  var map;
  var banner1;
  var banner2;
  var banner3;

  switch (location.name) {
    case "Ghoulshead":
      map = <Image src="ghoulsheadMap" className="mapImage" />;
      banner1 = (
        <Image src="ghoulsheadFavela" className="bannerImage" key="1" />
      );
      banner2 = (
        <Image src="ghoulsheadWetland1" className="bannerImage" key="2" />
      );
      banner3 = (
        <Image src="ghoulsheadWetland2" className="bannerImage" key="3" />
      );
      break;
    case "Garrote":
      map = <Image src="ghoulsheadMap" className="mapImage" />;
      banner1 = <Image src="garrote1" className="bannerImage" key="1" />;
      banner2 = <Image src="garrote2" className="bannerImage" key="2" />;
      banner3 = <Image src="garroteTrucks" className="bannerImage" key="3"/>;
      break;
    default:
      map = <div className="mapImage" />;
      banner1 = <div className="bannerImage" key="1"/>;
      banner2 = <div className="bannerImage" key="2"/>;
      banner3 = <div className="bannerImage" key="3"/>;
  }

  return { map: map, banners: [banner1, banner2, banner3] };
};
