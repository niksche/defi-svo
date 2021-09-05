import { Breadcrumb, Button, Layout, Image } from "antd";
import { Content } from "antd/lib/layout/layout";
import { FC } from "react";
import OfficeCard from "../HomePage/components/OfficeCard";
const img  =  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png';

const AboutPage : FC = () => (
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
      Ваш контракт

        <br></br>


        Статус: active 

        <br></br>

        <Image
      width={200}
      src={img}
    />

        Payment for last month: done

      </div>

    </Content>
  </Layout>
    </div>
  );


  export default AboutPage;