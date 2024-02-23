import './Keyboard.css';
import { BUTTONS } from '../../constants';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { typeToScreen } from './keyboardSlice';

const Keyboard = () => {
  const screenValue = useSelector((state: RootState) => state.keyboard.value);
  const dispatch = useDispatch();

  return (
    <div className='keyboard'>
      <div className='screen d-flex justify-content-center gap-2'>
        <span className='star'>{screenValue}</span>
      </div>
      <div className='row row-cols-3 m-0 g-2'>
        {BUTTONS.map((btn) => (
          <Button value={btn.value} key={btn.value} />
        ))}
        <div className='col'>
          <button
            className='btn btn-light btn-lg w-100 border-1 border-secondary fs-4'
            onClick={() => console.log('<')}
          >
            &lt;
          </button>
        </div>
        <div className='col'>
          <button
            className='btn btn-light btn-lg w-100 border-1 border-secondary fs-4'
            onClick={() => dispatch(typeToScreen('0'))}
          >
            0
          </button>
        </div>
        <div className='col'>
          <button
            className='btn btn-light btn-lg w-100 border-1 border-secondary fs-4'
            onClick={() => console.log('E')}
          >
            E
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
