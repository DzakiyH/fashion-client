import React from 'react';

const SectionThree = () => {
  const initialState = [
    {
      title: 'gallery',
      subtitle: 'subtitle',
    },
    {
      title: 'actuivities',
      subtitle: 'subtitle',
    },
    {
      title: 'keynotes',
      subtitle: 'subtitle',
    },
  ];

  return (
    <div className='section-three'>
      <div className='pages'>
        {initialState.map((item) => {
          return (
            <div className='page'>
              <div className='text'>
                <div className='title'>{item.title}</div>
                <div className='subtitle'>{item.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionThree;
