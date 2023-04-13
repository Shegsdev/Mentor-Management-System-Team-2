import Head from "next/head";
import AppLayout from "components/Layout/Layout";

import "antd/dist/reset.css";
import "styles/globals.css";
import "components/Layout/Layout.css";
import "components/NavHeader/NavHeader.css";
import "components/Layout/NavBar/NavBar.css";
import "components/Layout/SideBar/SideBar.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>MMS - Mentor&apos;s Managers System</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default App;
