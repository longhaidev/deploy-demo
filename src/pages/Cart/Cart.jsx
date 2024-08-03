import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// components
import CheckOutButton from "components/Button/CheckOutButton";
import emptyCart from "assets/Pictures/empty-cart.png";
// UI & icon
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  clearCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
// main
export default function Cart() {
  const cartItem = useSelector((state) => state.cart.cart);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleIncreaseQuantity = (product) => {
    if (product && product.quantity < product.stock) {
      dispatch(increaseProductQuantity(product));
    }
  };
  const handleDecreaseQuantity = (product) => {
    if (product) {
      if (product.quantity === 1) {
        handleRemoveFromCart(product);
      } else {
        dispatch(decreaseProductQuantity(product));
      }
    }
  };
  const handleClearCart = () => {
    dispatch(clearCart(cartItem));
  };
  return (
    <div className="mb-[5%] mt-3 flex flex-col items-center">
      <div className="mx-7 w-[81%] md:w-[93%] md:mx-0 lg:mx-0">
        <h2 className="text-[30px] font-semibold text-left">Shopping cart</h2>
        <div className="w-full text-left pl-[5px] pr-[5px] pb-[10px] ">
          <span
            className="text-color-high-light uppercase font-semibold cursor-pointer md:text-[20px]"
            onClick={() => {
              handleClearCart();
            }}
          >
            Clear cart
          </span>
        </div>
        <div className="md:flex md:flex-row md:gap-7">
          <div className="md:w-full md:pr-[28px] md:border-r md:border-r-gray-300">
            {cartItem && cartItem.length > 0 && cartPrice != 0 ? (
              <>
                {/* cart product */}
                <div className="mt-[2%] mb-[20px]">
                  <div className="mt-[10px] ">
                    <div>
                      {cartItem.map((productItem) => {
                        return (
                          <div
                            key={productItem.id}
                            className="relative mb-[45px] flex flex-col items-center border-b border-gray-300 md:flex-row "
                          >
                            <div className="flex flex-row justify-between w-full gap-[10px]">
                              <div className="w-[110px] h-[110px] mb-[15px] flex flex-col justify-center ">
                                <img
                                  className="object-cover w-full h-full rounded-md"
                                  draggable={false}
                                  src={productItem.img}
                                  alt="Product Image"
                                ></img>
                              </div>
                              {/* product detail */}
                              <div
                                id="product_detail"
                                className="flex flex-row justify-between items-center w-full "
                              >
                                <div className="flex flex-col w-full h-full">
                                  <h3 className="text-[16px] text-wrap m-0 font-semibold lg:text-[18px]">
                                    {productItem.name}
                                  </h3>
                                  <p className="text-[16px] mt-[8px] mb-0 text-color-high-light lg:text-[18px]">
                                    {(
                                      productItem.price * 1000
                                    ).toLocaleString()}
                                    ₫
                                  </p>
                                  <p className="text-[16px] mt-[8px] mb-0 ">
                                    Quantity: {productItem.quantity}
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between w-full h-full text-right">
                                  <span className="flex flex-row gap-2 text-right items-center justify-end  md:gap-6 md:text-[18px]">
                                    <FiMinus
                                      className="cursor-pointer"
                                      onClick={() =>
                                        handleDecreaseQuantity(productItem)
                                      }
                                    ></FiMinus>
                                    <p className="m-0">
                                      {productItem.quantity}{" "}
                                    </p>
                                    <GoPlus
                                      className="cursor-pointer"
                                      onClick={() => {
                                        handleIncreaseQuantity(productItem);
                                      }}
                                    ></GoPlus>
                                  </span>
                                  <p
                                    className="text-[16px] text-color-high-light capitalize italic cursor-pointer"
                                    onClick={() =>
                                      handleRemoveFromCart(productItem)
                                    }
                                  >
                                    remove
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center mt-[6%] mb-[20px]">
                <div>
                  <h5 className="text-color-sub italic text-[16px]">
                    Oops, Your cart is empty !
                  </h5>
                </div>
                <div className="w-[250px] h-[250px]">
                  <img
                    className="w-full h-full object-cover"
                    draggable={false}
                    src={emptyCart}
                  ></img>
                </div>
              </div>
            )}
          </div>
          <div
            id="order_summary"
            className="md:w-[70%] md:h-full md:sticky md:top-[90px] lg:w-[40%]"
          >
            <h3 className="text-[20px] font-semibold">Order summary</h3>
            <div className="flex flex-col w-full text-[18px]">
              <span className="flex flex-row justify-between border-b border-b-gray-300 mt-[1rem]">
                <p className="text-color-sub">Subtotal</p>
                <p className="text-color-high-light font-semibold">
                  {(cartPrice * 1000).toLocaleString()}₫
                </p>
              </span>
              <span className="flex flex-row justify-between border-b border-b-gray-300 mt-[1rem]">
                <p className="text-color-sub">Shipping estimate</p>
                <p className="text-color-high-light font-semibold">
                  {(cartPrice * 0.008 * 1000).toLocaleString()}₫
                </p>
              </span>
              <span className="flex flex-row justify-between border-b border-b-gray-300 mt-[1rem]">
                <p className="text-color-sub">Tax estimate</p>
                <p className="text-color-high-light font-semibold">
                  {(cartPrice * 0.05 * 1000).toLocaleString()}₫
                </p>
              </span>
            </div>
            <h3 className="text-[20px]  w-full  font-semibold mt-[1rem]">
              <span className="flex flex-row justify-between">
                <p>Order total</p>
                <p className="text-color-high-light">
                  {(
                    (cartPrice + cartPrice * 0.05 + cartPrice * 0.1) *
                    1000
                  ).toLocaleString()}
                  ₫
                </p>
              </span>
            </h3>
            <CheckOutButton
              styles={{
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "70px",
                fontSize: "18px",
                textTransform: "none",
              }}
            ></CheckOutButton>
            <div className="text-center w-full mt-2">
              <NavLink
                className="italic text-[14px] navlink-hover md:!text-[16px]"
                to="/menus/all"
                style={{ "--line-hover": "var(--line-hover-primary)" }}
              >
                Continue Browsing
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
