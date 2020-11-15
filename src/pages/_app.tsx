import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'ress';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
