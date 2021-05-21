import './App.css';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Redirect, Route } from 'react-router';

import { Layout, Menu } from 'antd';

import ListItemContainer from './containers/ListItemContainer';
import Navbar from './containers/Navbar';
import ProductContainer from './containers/Product/ProductContainer';

const { Header, Content, Footer } = Layout;

const HeaderStyled = styled(Header)`
position: fixed;
 z-index: 10;
  width: 100%;
`;
const ContentStyled = styled(Content)`
padding: 0 50px; 
margin-top: 64px;
`;
const WrapperContent = styled.div`
padding: 24px;
min-height:calc(100vh - 135px);
`;
const FooterStyled = styled(Footer)`
text-align: center;
`;
function App() {
  return (
    <Layout>
      <HeaderStyled >
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Navbar />
        </Menu>
      </HeaderStyled>
      <ContentStyled className="site-layout" >
        <WrapperContent className="site-layout-background" >
          <Route exact path="/"
            render={() => <Redirect to={'/profile'} />} />
          <Route path='/profile' render={() => <ListItemContainer />} />
          <Route path='/product/:productId?' render={() => <ProductContainer />} />
        </WrapperContent>
      </ContentStyled>
      <FooterStyled >Ant Design ©2018 Created by Ant UED</FooterStyled>
    </Layout>
  );
}

export default App;
