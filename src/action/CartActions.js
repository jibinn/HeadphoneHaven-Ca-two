import axios from 'axios'; // Import the axios library to make HTTP requests
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/Cartconstants'; // Import constants representing cart operations

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // Retrieves product details from the API using axios
  const productData = await axios.get(`http://127.0.0.1:8000/api/products/${id}`); // Sends an HTTP GET request to retrieve product details based on the provided ID

  // Extracts product details from the response
  const product = productData.data; // Extracts the product object from the response data

  // Adds the product to the cart using the dispatch method
  dispatch({
    type: CART_ADD_ITEM, // Sets the action type to indicate adding an item to the cart
    payload: { // Sets the product details and quantity in the action payload
      productId: product._id, // Sets the product ID from the response data
      productName: product.name, // Sets the product name from the response data
      productImage: product.image, // Sets the product image URL from the response data
      productPrice: product.price, // Sets the product price from the response data
      productQuantity: qty // Sets the specified quantity for the product
    },
  });

  // Logs the updated cart items after adding the new product
  console.log(`Cart Items after adding:`, getState().cart.cartItems); // Fetches the current cart items from the store state and logs them to the console

  // Saves the updated cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); // Serializes the updated cart item list to JSON format and stores it in localStorage for persistent storage
};

export const removeFromCart = (id) => (dispatch, getState) => {
  // Removes the specified product from the cart using the dispatch method
  dispatch({
    type: CART_REMOVE_ITEM, // Sets the action type to indicate removing an item from the cart
    payload: id, // Sets the product ID to be removed
  });

  // Updates the cart items in localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); // Updates the stored cart item list with the removed product
