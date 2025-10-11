import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shoppingCart: []
}

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
    },
    selectors: {
        allShoppingCart: (state) => state.shoppingCart
    },
})

export const { } = shoppingCartSlice.actions
export const { allShoppingCart } = shoppingCartSlice.selectors
export default shoppingCartSlice.reducer