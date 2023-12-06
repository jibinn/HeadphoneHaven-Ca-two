import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer ,productDetailsReducer} from './reducers/ProductReducers'
import { cartReducer} from './reducers/Cartreducers'

const reducer = combineReducers({
    productList : productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,

})


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

    const initialstate = {
        cart: {
            cartItems: cartItemsFromStorage,
        },
    };
    
const middleware = [thunk]

const store = createStore(reducer,initialstate, composeWithDevTools(applyMiddleware(...middleware)))


export default store