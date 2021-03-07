import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import GlobalStyles from 'utils/globalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  </>
);

export default MyApp;
