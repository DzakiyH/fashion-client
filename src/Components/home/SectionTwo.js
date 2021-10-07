import React from 'react';
import { Link } from 'react-router-dom';

const SectionTwo = () => {
  return (
    <div className='section-two'>
      <div className='left-side'>
        <Link to={{ pathname: '/shop' }}>
          <button className='shop-now'>Shop Now</button>
        </Link>
      </div>
      <div className='right-side'>
        <div className='jargon'>
          <span>New Concept</span> of online shopping
        </div>
        <div className='description'>
          lorem ipsum will go here. lorem ipsum will go here. lorem ipsum will
          go here. lorem ipsum will go here. lorem ipsum will go here. lorem
          ipsum will go here.
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
