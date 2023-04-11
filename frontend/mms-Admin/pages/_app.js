import Head from "next/head";
import AppLayout from "../lib/components/Layout/Layout";

import "../styles/globals.css";
import "antd/dist/reset.css";
import "../lib/components/Layout/Header/Header.css";
import "../lib/components/Layout/SideBar/SideBar.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default App;
