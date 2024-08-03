import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const INITIAL_STATE = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      // check exist product -> increase product's quantity
      if (existingProduct) {
        // quantity > product's stock -> quantity = stock
        if (
          existingProduct.quantity + product.quantity <
          existingProduct.stock
        ) {
          existingProduct.quantity += product.quantity;
          toast.success(
            `Increased ${product.quantity} ${product.name} in cart`
          );
        } else {
          existingProduct.quantity = product.stock;
          toast.warning(`Reached max ${product.name} quantity !`);
        }
      } else {
        // update cart
        state.cart.push({ ...product, quantity: product.quantity ?? 1 });
        // toast.success(`Add ${product.name} to cart successfully`);
      }
      // calculate total price
      let totalPrice = 0;
      let totalQuantity = 0;
      state.cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
        totalQuantity += item.quantity;
      });
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },

    removeFromCart: (state, action) => {
      const product = action.payload;
      // calculate total price
      const productDelete = state.cart.find(
        (deleteProduct) => deleteProduct.id === product.id
      );
      if (productDelete) {
        state.totalPrice -= productDelete.price * productDelete.quantity;
        state.totalQuantity -= productDelete.quantity;
        // update cart
        state.cart = state.cart.filter((item) => item.id !== product.id);
        toast.success(`Remove ${product.name} from cart successfully`);
      }
    },

    increaseProductQuantity: (state, action) => {
      const product = action.payload;
      const productIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      // find product -> increase quantity + update price
      if (productIndex >= 0) {
        state.cart[productIndex].quantity += 1;
        state.totalPrice += state.cart[productIndex].price;
        state.totalQuantity += 1;
        // toast.success(`Increased 1 ${product.name} in cart`);
      }
    },
    decreaseProductQuantity: (state, action) => {
      const product = action.payload;
      const productIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      // find product -> decrease quantity + update price
      if (productIndex >= 0) {
        state.cart[productIndex].quantity -= 1;
        state.totalPrice -= state.cart[productIndex].price;
        state.totalQuantity -= 1;
        // toast.success(`Decreased 1 ${product.name} in cart`);
      }
    },
    clearCart: (state) => {
      toast.success("Clear cart successfully");
      return { ...INITIAL_STATE };
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
} = cartSlice.actions;
