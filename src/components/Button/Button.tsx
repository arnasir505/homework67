import React from 'react';
import { useDispatch } from 'react-redux';
import { typeToScreen } from '../Keyboard/keyboardSlice';

interface Props {
  value: string;
}

const Button: React.FC<Props> = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div className='col'>
      <button
        className='btn btn-light btn-lg w-100 border-1 border-secondary fs-4'
        onClick={() => dispatch(typeToScreen(value))}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
