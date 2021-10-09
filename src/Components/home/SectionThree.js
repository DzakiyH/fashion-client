import React from 'react';

const SectionThree = () => {
  const initialState = [
    {
      id: 1,
      title: 'gallery',
      subtitle: 'subtitle',
    },
    {
      id: 2,
      title: 'actuivities',
      subtitle: 'subtitle',
    },
    {
      id: 3,
      title: 'keynotes',
      subtitle: 'subtitle',
    },
  ];

  return (
    <div className='section-three'>
      <div className='pages'>
        {initialState.map((item) => {
          return (
            <div className='page' key={item.id}>
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
