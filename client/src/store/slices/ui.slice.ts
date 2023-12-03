import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialSatetUiType {
  isAsideOpen: boolean;
  isAnswering: boolean;
}

const initialState: InitialSatetUiType = {
  isAsideOpen: false,
  isAnswering: false,
};

const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setAsideIsOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isAsideOpen = payload;
    },
    setAnswering: (state, { payload }: PayloadAction<boolean>) => {
      state.isAnswering = payload;
    },
  },
});

export const { setAsideIsOpen, setAnswering } = ui.actions;

export default ui.reducer;
