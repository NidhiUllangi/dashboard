import React from 'react'
import LeftPart from './leftPart/LeftPart'
import RightPart from './rightPart/RightPart'

const Home = () => {
  return (
    <>
        <div className='flex flex-row'>
        <div>
        <LeftPart />
        </div>
        <div>
        <RightPart />
        </div>
        </div>

    </>
  );
}

export default Home