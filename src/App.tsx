import { Layout, Menu } from "antd";
import "antd/dist/antd.min.css";
import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';

import GlobalStyles from "./components/Styles/Global.styled";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainMenu from "./components/Menu/Menu";


const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <MainMenu />

        <Layout>
          <Header />

          <Layout.Content style={{ padding: "20px" }}>
            <Outlet />
          </Layout.Content>
          <Footer />

        </Layout>
      </Layout>
    </div>
  );
}

export default App;