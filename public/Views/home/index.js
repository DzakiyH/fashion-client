import React from 'react';

const Home = () => {
  return (
    <div className='container'>
      <div className='section-one'>
        <div className='navigation'>
          <div className='top'>Latest</div>
          <div className='bottom'>All</div>
        </div>
        <div className='title'>
          Choose <span className='bold'>as you want</span>
          Choose <span className='bold'>as you want</span>
        </div>
      </div>
      <div className='section-two'>
        <div className='left-side'>
          <a href='#'>
            <button className='shop-now'>Shop Now</button>
          </a>
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
      <div className='section-three'>
        <div className='pages'>
          <div className='page'>
            <div className='text'>
              <div className='title'>gallery</div>
              <div className='subtitle'>subtitle</div>
            </div>
          </div>
          <div className='page'>
            <div className='text'>
              <div className='title'>activities</div>
              <div className='subtitle'>subtitle</div>
            </div>
          </div>
          <div className='page'>
            <div className='text'>
              <div className='title'>keynotes</div>
              <div className='subtitle'>subtitle</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
