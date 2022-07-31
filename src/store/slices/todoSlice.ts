import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

export interface TodoState {
  value: number;
  list: Array<any>,
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TodoState = {
  value: 0,
  list: [],
  status: 'idle',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.list = [...state.list, action.payload];
    },
    decrement: (state) => {
      state.value -= 1;
    }
  },
});

export const { addTodo, decrement } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const todoList = (state: RootState) => state.todo.list;


export default todoSlice.reducer;
