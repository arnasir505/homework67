import './Keyboard.css';
import { BUTTONS } from '../../constants';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {
  checkCode,
  deleteCharacter,
  setToNull,
  typeToScreen,
} from './keyboardSlice';

const Keyboard = () => {
  const dispatch = useDispatch();
  const screenValue = useSelector((state: RootState) => state.keyboard.value);
  const isCodeRight = useSelector((state: RootState) => state.keyboard.isRight);

  const toggleMsg = () => {
    setTimeout(() => {
      dispatch(setToNull());
    }, 1500);
  };

  return (
    <div className='keyboard'>
      <div
        className={`screen d-flex justify-content-center align-items-center gap-2 
      ${
        isCodeRight === true
          ? 'text-bg-success'
          : isCodeRight === false
          ? 'text-bg-danger'
          : ''
      }`}
      >
        {isCodeRight === true ? (
          <h1>Access Granted</h1>
        ) : isCodeRight === false ? (
          <h1>Access Denied</h1>
        ) : (
          <span className='star'>
            {screenValue.split('').map((_num) => '*')}
          </span>
        )}
      </div>
      <div className='row row-cols-3 m-0 g-2'>
        {BUTTONS.map((btn) => (
          <Button value={btn.value} key={btn.value} />
        ))}
        <div className='col'>
          <button
            className='btn btn-light btn-lg w-100 border-1 border-secondary fs-4'
            onClick={() => dispatch(deleteCharacter())}
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
            onClick={() => (dispatch(checkCode()), toggleMsg())}
          >
            E
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
