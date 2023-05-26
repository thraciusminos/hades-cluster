declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        light: string;
        main: string;
      };
      background: {
        paper: string;
        default: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: {
      primary?: {
        light?: string;
        main?: string;
      };
      background?: {
        paper?: string;
        default?: string;
      };
    };
  }
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpg";
declare module "*.jpeg";
