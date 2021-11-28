import React from 'react';
import SectionOne from '../../Components/home/SectionOne';
import SectionTwo from '../../Components/home/SectionTwo';
import SectionThree from '../../Components/home/SectionThree';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import './index.css';

const Home = () => {
  return (
    <NavbarLayout>
      <div className='container-home'>
        <div className='main-page'>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Home;
