import { IConfig } from "react-awesome-styled-grid";

export interface ITheme {
  awesomegrid: Partial<IConfig>;
  colors: {
    primary: string;
    secondary: string;
    title: string;
    text: string;
  };
  constants: {
    header: {
      desktop: number;
      mobile: number;
    }
  }
  fonts: {
    gilroy: string;
    gilroyMedium: string;
    gilroyBold: string;
    gilroyHeavy: string;
    built: string;
    builtBold: string;
    builtEl: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
