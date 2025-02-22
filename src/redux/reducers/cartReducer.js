import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions'

const initialState = {
  cartItems: [],
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        // Increase quantity if item already in cart
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      } else {
        // Add new item with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        }
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      }
    }
    default:
      return state
  }
}
