import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
      veryLight: string,
      gray : string,
      darkGray: string,
    };
    light: {
      white: string,
      black: string,
      whiteTransparent: string,
      backgroundGray: string,
      borderGray: string,
      lightGray: string,
      darkGray: string,
      formGray: string,
      linearGreen: string,
      linearRed: string,
      green: string,
      darkGreen: string,
      pink: string,
      red: string,
      lightBlue : string,
      darkBlue: string,
      ellipse1: string,
      ellipse2: string,
      link: string,
    };
  }
}