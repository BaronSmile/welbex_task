import React from "react";
import MainTable from "./components/tableData";
import {Layout} from "antd";

const {Header, Content} = Layout;

function App() {
  return (
    <Layout style={{height: '100vh'}}>
      <Header>
        <p style={{color: '#fff'}}>WELBEX</p>
      </Header>
      <Content>
        <MainTable/>
      </Content>
    </Layout>
  );
}

export default App;
