import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    carts:[]
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart:(state, action)=>{

            const ItemIndex = state.carts.findIndex((item)=>item.id === action.payload.id);
            if(ItemIndex >= 0){
                state.carts[ItemIndex].qnty += 1;
            }
            else{
                const temp = {...action.payload, qnty:1};
                state.carts = [...state.carts, temp];
            }
            
        },
        removeFromCart:(state, action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts = data;
        },
        removeItem:(state, action)=>{
            const ItemIndex_dec = state.carts.findIndex((item)=>item.id === action.payload.id);

            if(state.carts[ItemIndex_dec].qnty >=1){
                state.carts[ItemIndex_dec].qnty -= 1;
            }
        },
        clearCart:(state, action)=>{
            state.carts = [];
        }

    }
});

export const {addToCart, removeFromCart, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;