import { DefaultTheme } from "styled-components";
import { palette } from "./palette";

export const lightTheme: DefaultTheme = {
  contrast: "#000000",
  backgroundColor: "#ffffff",
  backgroundColor2: "#fafafc",
  backgroundColor3: "#fafafc",
  backgroundColor4: "ffffff",
  backgroundPointColor: "#f1edf4",
  borderColor: "#f0eff2",
  darkmodeButtonColor: "#efefef",
  navBarColor: palette.main,
};

export const darkTheme: DefaultTheme = {
  contrast: "#ffffff",
  backgroundColor: "#30343f",
  backgroundColor2: "#404452",
  backgroundColor3: "#30343f",
  backgroundColor4: "#404452",
  backgroundPointColor: "#30343f",
  borderColor: "#515663",
  darkmodeButtonColor: "#3d3d3d",
  navBarColor: "#404452",
};
