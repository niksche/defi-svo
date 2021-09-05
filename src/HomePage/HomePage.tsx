import { Card } from 'antd';
import { FC } from 'react';
import OfficeCard from './components/OfficeCard';
import './HomePage.css';

const { Meta } = Card;


const HomePage : FC = () => {
    return (
    <div className="flexStyle">
    
    <OfficeCard  />
    <OfficeCard  />
     <OfficeCard  />
     <OfficeCard  />
    <OfficeCard  />
     <OfficeCard  />
     <OfficeCard  />
    <OfficeCard  />
     <OfficeCard  />
    </div>);
};

export default HomePage;