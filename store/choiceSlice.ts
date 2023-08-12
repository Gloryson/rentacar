import { cars } from '@/database/cars';
import { Car, Choice } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: Choice = {
  car: cars[0],
  pickCity: 'London',
  dropCity: 'London',
  pickDate: '',
  dropDate: ''
}


export const choiceSlice = createSlice({
  name: 'choice',
  initialState,
  reducers: {

    setCar (state, action: PayloadAction<Car>) {
      state.car = action.payload;
    },

    setPickCity (state, action: PayloadAction<string>) {
      state.pickCity = action.payload;
    },

    setDropCity (state, action: PayloadAction<string>) {
      state.dropCity = action.payload;
    },

    setPickDate (state, action: PayloadAction<string>) {
      state.pickDate = action.payload;
    },

    setDropDate (state, action: PayloadAction<string>) {
      state.dropDate = action.payload;
    }
    

  },
})


export const { setCar, setPickCity, setDropCity, setPickDate, setDropDate } = choiceSlice.actions;

export default choiceSlice.reducer;