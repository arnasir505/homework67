import React from 'react';
import './Keyboard.css';
import { BUTTONS } from '../../constants';
import Button from '../Button/Button';

const Keyboard = () => {
  return (
    <div className='keyboard'>
      <div className='screen d-flex justify-content-center gap-2'>
        <span className='star'>*</span>
        <span className='star'>*</span>
        <span className='star'>*</span>
        <span className='star'>*</span>
      </div>
      <div className='row row-cols-3 m-0 g-2'>
        {BUTTONS.map((btn) => (
          <Button value={btn.value} key={btn.value} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
