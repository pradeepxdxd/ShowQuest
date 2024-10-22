import {createSlice} from '@reduxjs/toolkit';

export interface InitialState {
    totalSeats : number
}

const initialState : InitialState = {
    totalSeats : 0
}

const seatSlice = createSlice({
    name: 'seat',
    initialState,
    reducers : {
        addSeat : (state, action) => {
            state.totalSeats = state.totalSeats + action.payload
        },
        clearSeats: state => {
            state.totalSeats = 0
        }
    }
})

export const {addSeat, clearSeats} = seatSlice.actions;
export default seatSlice.reducer;