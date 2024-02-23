import React from 'react';

interface Props {
  value: string;
}

const Button: React.FC<Props> = ({ value }) => {
  return (
    <div className='col'>
      <button className='btn btn-light btn-lg w-100 border-1 border-secondary fs-4'>
        {value}
      </button>
    </div>
  );
};

export default Button;
