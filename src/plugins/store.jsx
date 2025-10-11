import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from '../slice/ShoppingCartSlice'

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer
    },
})

export default store