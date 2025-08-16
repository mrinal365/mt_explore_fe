import React from 'react';
import './Loader.css'; // Import the CSS file

const Loader = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-white'>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;