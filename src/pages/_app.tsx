import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />;
  </ThemeProvider>
);

export default MyApp;
