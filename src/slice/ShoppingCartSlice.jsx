import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    shoppingCart: [],
}

export const shoppingCartLoad = createAsyncThunk(
    'shopping-cart/load',
    async () => {
        return localStorage.getItem('shopping-cart');
    }
);

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        add: {
            reducer: (state, action) => {

                const newItem = action.payload;
                const existingItem = state.shoppingCart.find(
                    (item) => item.id === newItem.id
                );
                if (existingItem) {
                    if (existingItem.quantity < existingItem.maxQuantity) {
                        existingItem.quantity++;
                    }
                    existingItem.totalPrice = existingItem.price * existingItem.quantity;
                } else {
                    state.shoppingCart.push({
                        name: action.payload.name,
                        price: action.payload.price,
                        totalPrice: action.payload.price,
                        id: action.payload.id,
                        quantity: 1,
                        maxQuantity: action.payload.quantity
                    });
                }

                //state.shoppingCart[action.payload.id] = action.payload;

                localStorage.setItem("shopping-cart", JSON.stringify(state.shoppingCart));
            },
            prepare: (product) => {
                return { payload: product }
            },
        },
        remove(state, action) {
            const findItem = state.shoppingCart.find(
                (item) => item.id === action.payload.id
            );

            if (findItem.quantity === 1) {
                state.shoppingCart = state.shoppingCart.filter(
                    (item) => item.id != action.payload.id
                );
            } else {
                findItem.quantity--;
                findItem.totalPrice -= findItem.price;
            }

            localStorage.setItem("shopping-cart", JSON.stringify(state.shoppingCart));
        },
        clear(state) {
            state.shoppingCart = [];
            localStorage.removeItem("shopping-cart");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(shoppingCartLoad.fulfilled, (state, action) => {
            state.shoppingCart = action.payload ? JSON.parse(action.payload) : state.shoppingCart;
        })
    },
    selectors: {
        allShoppingCart: (state) => state.shoppingCart,
        countProductsInShoppingCart: (state) => {
            var totalProducts = 0;

            state.shoppingCart.forEach(item => {
                totalProducts = totalProducts + item.quantity
            })
            return totalProducts;
        },
        countPriceProductsInShoppingCart: (state) => {
            var totalPrice = 0;

            state.shoppingCart.forEach(item => {
                totalPrice = totalPrice + item.quantity * item.price
            })
            return totalPrice;
        }
    },
})

export const { add, remove, clear } = shoppingCartSlice.actions
export const { allShoppingCart, countProductsInShoppingCart, countPriceProductsInShoppingCart } = shoppingCartSlice.selectors
export default shoppingCartSlice.reducer