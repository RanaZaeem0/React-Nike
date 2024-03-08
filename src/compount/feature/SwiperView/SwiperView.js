import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    swiperview:[{view:3.2}]
}


export const veiwSlice = createSlice({
    name:"swiperVeiw",
    initialState,
    updatedVeiw:(state,action)=>{
        const view = {
            view:action.payload
        }
        state.swiperview.push(view)
    }
})

export const {updatedVeiw} = veiwSlice.actions

export default veiwSlice.reducer