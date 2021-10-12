import React from 'react';
import SectionOne from '../../Components/home/SectionOne';
import SectionTwo from '../../Components/home/SectionTwo';
import SectionThree from '../../Components/home/SectionThree';
// import { useSelector } from 'react-redux';
import './index.css';

const Home = () => {
  return (
    <div className='container-home'>
      <div className='main-page'>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
};

export default Home;
