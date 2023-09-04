import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isOverlayHidden: true
  },
  reducers: {
    toggleOverlay: (state) => {
      state.isOverlayHidden = !state.isOverlayHidden;
    },
    removeOverlay: (state) => {
        state.isOverlayHidden = true;
    }
  }
});

export const { toggleOverlay, removeOverlay } = uiSlice.actions;
export const selectIsOverlayHidden = (state:RootState) => state.ui.isOverlayHidden;

export default uiSlice.reducer;

