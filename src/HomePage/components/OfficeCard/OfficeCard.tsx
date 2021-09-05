import { Card } from 'antd';
import Item from 'antd/lib/list/Item';
import { FC } from 'react';
import { Tag, Divider } from 'antd';
import { Link } from 'react-router-dom';


const { Meta } = Card;


const OfficeCard : FC = () => {
    return (
      <Link to="/customer"><Card
      hoverable
      style={{margin:10, top: 80, width: 240, height: "fit-content"}}
      cover={<img alt="example" src="http://vl-stroit.ru/thumb/2/lbd3sDKg0pdyJtCWHf4A_w/640r480/d/IMG__4054__vl__k.jpg" />}
    >
      <Meta title="Помещение за 1 eth в год!" description="24 уютных квадратных метра" />

      <Divider orientation="left">Категории</Divider>
  <div>

    <Tag color="orange">Простор</Tag>
    <Tag color="gold">Недорого</Tag>
    <Tag color="lime">Удобно</Tag>
    <Tag color="green">Светло</Tag>
    <Tag color="cyan">Метро</Tag>
    <Tag color="blue">Оффис</Tag>

  </div>
    </Card></Link>
    );
};

export default OfficeCard;