
import { Button } from 'antd';
import { FC } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import OfficeCard from '../HomePage/components/OfficeCard';
import Comp from '../Comp';

const { Header, Content, Footer } = Layout;


const CustomerPage : FC = () => (
    <div className="App">
        <Layout className="flexStyle">
                  <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Svo</Breadcrumb.Item>
        <Breadcrumb.Item>For customers</Breadcrumb.Item>
        <Breadcrumb.Item>Contract</Breadcrumb.Item>
      </Breadcrumb>
            <OfficeCard/>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Подписать договор об аренде помещения: 
          <br>
          </br>
          <a href = "https://docs.google.com/document/d/1dBu6K_PmkKdY_XB9RglxVGDQ364JbX-UQ6vd_jF5xXI/edit?usp=sharing">Прочитать договор</a>
          <br>
          </br>
        Самая главная кнопка заплоти
        <Button onClick = {Comp} type="primary">pay money for svo </Button>

      </div>
    </Content>
  </Layout>
    </div>
  );


  export default CustomerPage;