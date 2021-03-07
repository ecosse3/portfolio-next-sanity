export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    title: string;
    text: string;
  },
  fonts: {
    gilroy: string;
    gilroyMedium: string;
    gilroyBold: string;
    gilroyHeavy: string;
    built: string;
    builtBold: string;
    builtEl: string;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
