import { Breadcrumb, Layout, Image } from "antd";
import { Statistic, Row, Col, Button, Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import './AnalyticsPage.css';

import { Content } from "antd/lib/layout/layout";
import { FC } from "react";
import OfficeCard from "../HomePage/components/OfficeCard";
const img  =  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png';

const AnalyticsPage : FC = () => (
    <div className="App">
        <Layout className="flexStyle">
                  <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Svo</Breadcrumb.Item>
        <Breadcrumb.Item>For customers</Breadcrumb.Item>
        <Breadcrumb.Item>Contract</Breadcrumb.Item>
      </Breadcrumb>

    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active contracts" value={112} />
    </Col>
    <Col span={12}>
      <Statistic title="Total overall revenu (rub)" value={1128} precision={2} />

    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} loading />
    </Col>
  </Row>


  <div className="site-statistic-demo-card">
    <Row gutter={50}>
      <Col span={12}>
        <Card className="stat">
          <Statistic
            title="New contracts for last month"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
      <Card className="stat">
          <Statistic
            title="debtors for last month"
            value={7}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>
    </Content>
  </Layout>
    </div>
  );


  export default AnalyticsPage;