import Head from 'next/head';
import Header from '../components/Header/Header';

const Layout = ({ children, title }) => {
  return (
    <div className="layout">
      <Head>
        <title>{`${title ? title : 'Richest games store'}  | Gamestore`}</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
