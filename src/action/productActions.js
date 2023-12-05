import { PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS 
,PRODUCT_DETAILS_FAIL,
PRODUCT_DETAILS_REQUEST,
PRODUCT_DETAILS_SUCCESS} from '../constants/ProductConstants'
import axios from 'axios'

export const listProducts = (keyword = '') => async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST })
    
            const { data } = await axios.get(`http://127.0.0.1:8000/api/products/`)
    
            dispatch({
                type: PRODUCT_LIST_SUCCESS,
                payload: {
                  products: data, // Ensure 'data' contains the array of products
                  // ...other properties if needed
                },
              });
    
        } catch (error) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
        }
    }


    export const listProductsDetails = (id) => async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_DETAILS_REQUEST });
    
            const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`);
    
            dispatch({
                type: PRODUCT_DETAILS_SUCCESS,
                payload: {
                    product: data, // Ensure 'data' contains the product object
                    // ...other properties if needed
                },
            });
    
        } catch (error) {
            dispatch({
                type: PRODUCT_DETAILS_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            });
        }
    }
    