import { Breadcrumb, Button, Layout, Image } from "antd";
import { Comment, Tooltip, List , Avatar, Form, Input} from 'antd';
import moment from "moment";
import { FC } from "react";

const { TextArea } = Input;
const img  =  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png';


const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'svo-support',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        Вы просрочили свой платеж, расскажите о причинах.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'customer',
    avatar: 'https://avatars.githubusercontent.com/u/86954938?s=60&v=4',
    content: (
      <p>
        Здравствуйте, потерял доступ к жесткому диску с паролем от метамаска, не смогу заплатить вовремя.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];


const AnalyticsPageCompany : FC = () => (
    <div className="App">
        <Layout className="flexStyle">
                  <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Svo</Breadcrumb.Item>
        <Breadcrumb.Item>For customers</Breadcrumb.Item>
        <Breadcrumb.Item>Contract</Breadcrumb.Item>
      </Breadcrumb>
            

  
      <div>
        
      <List
    className="comment-list"
    header={`${data.length} replies`}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <li>
        <Comment
          actions={item.actions}
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
    )}
  />
  <Form.Item>
      <TextArea rows={2}  />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" type="primary">
        Send message
      </Button>
    </Form.Item>

      </div>
    

  </Layout>
    </div>
  );


  export default AnalyticsPageCompany;