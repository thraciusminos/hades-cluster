import { Box, styled } from "@mui/material";
import { Image } from "@app/components/common/Image";
import { Celestial, Location, Sector, Site } from "@resources/locationUtils";
import { MapMarker } from "../../common/MapMarker";

interface StyledProps {
  align: "left" | "right";
}

const StyledExpandWrapper = styled(Box)<StyledProps>`
  ${(props) => `
    position: absolute;
    top: 9%;
    ${props.align}: 34%;
    width: 64%;
    min-height: 90%;
    background-color: rgba(104, 161, 24, 93%);
    clip-path: polygon(
      5% 0,
      95% 0,
      100% 5%,
      100% 95%,
      95% 100%,
      5% 100%,
      0 95%,
      0 5%
    );
    z-index: 4;

    .locationPanel {
      position: absolute;
      top: ${props.theme.spacing(0.5)};
      left: ${props.theme.spacing(0.5)};
      right: ${props.theme.spacing(0.5)};
      bottom: ${props.theme.spacing(0.5)};

      padding: ${props.theme.spacing(3)};
      background-color: rgba(34, 38, 35, 93%);
      clip-path: polygon(
        5% 0,
        95% 0,
        100% 5%,
        100% 95%,
        95% 100%,
        5% 100%,
        0 95%,
        0 5%
      );
    }

    .bannersContainer {
      position: absolute;
      top: ${props.theme.spacing(5)};
      left: ${props.theme.spacing(3)};
      right: ${props.theme.spacing(3)};
      height: 140px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .bannerImage {
      width: 31%;
      height: 140px;
      background-color: rgba(95, 97, 93, 93%);
    }

    .expandBody {
      position: absolute;
      top: 200px;
      left: ${props.theme.spacing(3)};
      right: ${props.theme.spacing(3)};
      bottom: ${props.theme.spacing(5)};
    }

    .mapContainer {
      width: 100%;
      height: 100%;
    }

    .mapImage {
      width: 100%;
      height: 100%;
  }`}
`;

const getExpandImages = (location: Location) => {
  var map;
  var banner1;
  var banner2;
  var banner3;

  switch (location.name) {
    case "Ghoulshead":
      map = <Image src="ghoulsheadMap" className="mapImage" />;
      banner1 = <Image src="ghoulsheadFavela" className="bannerImage" />;
      banner2 = <Image src="ghoulsheadWetland1" className="bannerImage" />;
      banner3 = <Image src="ghoulsheadWetland2" className="bannerImage" />;
      break;
    case "Garrote":
      map = <Image src="ghoulsheadMap" className="mapImage" />;
      banner1 = <Image src="garrote1" className="bannerImage" />;
      banner2 = <Image src="garrote2" className="bannerImage" />;
      banner3 = <Image src="garroteTrucks" className="bannerImage" />;
      break;
    default:
      map = <div className="mapImage" />;
      banner1 = <div className="bannerImage" />;
      banner2 = <div className="bannerImage" />;
      banner3 = <div className="bannerImage" />;
  }

  return { map: map, banners: [banner1, banner2, banner3] };
};

interface Props {
  activeSite: Sector | Site | null;
  activeLocation: Celestial | Sector | Site | Location;
  setActiveSite: (site: Sector | Site | null) => void;
  previewAlignment: "left" | "right";
}

export const Expand: React.FC<Props> = ({
  activeSite,
  activeLocation,
  setActiveSite,
  previewAlignment,
}) => {
  const expandImages = getExpandImages(activeLocation);
  return (
    <StyledExpandWrapper align={previewAlignment}>
      <Box className="locationPanel">
        <Box className="bannersContainer">{expandImages?.banners}</Box>

        <Box className="expandBody">
          <Box className="mapContainer">
            {expandImages.map}
            {"sites" in activeLocation &&
              activeLocation?.sites?.map((location) => {
                return (
                  <MapMarker
                    key={location.name}
                    location={location}
                    isSelected={location.name === activeSite?.name}
                    setSelectedLoc={setActiveSite}
                  />
                );
              })}
          </Box>
        </Box>
      </Box>
    </StyledExpandWrapper>
  );
};
