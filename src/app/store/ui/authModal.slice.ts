import {createSlice} from '@reduxjs/toolkit';

export interface InitialState {
    open : boolean
}

const initialState : InitialState = {
    open : false
}

const authModalSlice = createSlice({
    name: 'authModal',
    initialState,
    reducers : {
        setOpen : state => {
            state.open = true
        },
        setClose : state => {
            state.open = false;
        }
    }
})

export const {setClose, setOpen} = authModalSlice.actions;
export default authModalSlice.reducer;