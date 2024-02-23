import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface KeyboardState {
  value: string;
}

const initialState: KeyboardState = {
  value: '',
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    typeToScreen: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    deleteCharacter: (state) => {
      const newCode = state.value.slice(0, -1);
      state.value = newCode;
    },
  },
});

export const keyboardReducer = keyboardSlice.reducer;
export const {typeToScreen, deleteCharacter} = keyboardSlice.actions;
