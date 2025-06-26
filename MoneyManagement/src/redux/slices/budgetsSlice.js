import { createSlice } from '@reduxjs/toolkit';

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: [
    { id: 1, name: 'Groceries', budget: 8000, used: 6200 },
    { id: 2, name: 'Food', budget: 7000, used: 6390 },
    { id: 3, name: 'Rent', budget: 10000, used: 4500 },
  ],
  reducers: {
    addBudget: (state, action) => { state.push(action.payload); },
    updateBudget: (state, action) => {
      const index = state.findIndex(b => b.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
  },
});

export const { addBudget, updateBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;