import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from '../pages/shopping-cart/ShoppingCartSlice'

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer
    },
})

export default store