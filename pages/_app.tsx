import type { AppProps } from 'next/app';
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';
import Layout from '../components/layout';

ConfigProvider.config({
  theme: {
    primaryColor: '#e0ca02',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
