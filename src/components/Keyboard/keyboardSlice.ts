import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { rightCode } from '../../constants';

interface KeyboardState {
  value: string;
  isRight: null | boolean;
}

const initialState: KeyboardState = {
  value: '',
  isRight: null,
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    typeToScreen: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
      }
    },
    deleteCharacter: (state) => {
      const newCode = state.value.slice(0, -1);
      state.value = newCode;
    },
    checkCode: (state) => {
      if (state.value === rightCode) {
        state.isRight = true;
      } else {
        state.isRight = false;
      }
    },
    setToNull: (state) => {
      state.isRight = null;
    },
  },
});

export const keyboardReducer = keyboardSlice.reducer;
export const { typeToScreen, deleteCharacter, checkCode, setToNull } =
  keyboardSlice.actions;
