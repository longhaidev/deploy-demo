import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Yup from "yup";
// components
import ConfirmOrder from "components/Button/ConfirmOrder";
// UI & icon
import {
  FormControlLabel,
  MenuItem,
  RadioGroup,
  TextField,
  Radio,
  FormControl,
} from "@mui/material";
import { LuContact2 } from "react-icons/lu";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandLess } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
export default function Checkout() {
  // redux
  const cartItem = useSelector((state) => state.cart.cart);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const cartTotal = useSelector((state) => state.cart.totalQuantity);
  // state
  const [errorMsg, setErrorMsg] = useState({});
  const [formCheckout, setFormCheckout] = useState({
    name: "",
    email: "",
    city: "",
    address: "",
    note: "",
    shipMethod: "cod",
    payment: "cash",
    product: cartItem ?? [],
    totalPrice: cartPrice ?? 0,
  });
  // cityOptions
  const citySelect = [
    {
      value: "HCM",
      label: "Ho Chi Minh City",
    },
    {
      value: "HN",
      label: "Ha Noi City",
    },
    {
      value: "DN",
      label: "Da Nang City",
    },
  ];
  // form input style
  const formInputStyle = {
    marginBottom: "0px!important",
    boxShadow: "none",
    border: "0.5px gray",
    "&::before": {
      height: "0px",
    },
  };
  const handleOnChangeForm = async (event) => {
    const { name, value } = event.target;
    setFormCheckout({
      ...formCheckout,
      [name]: value,
    });
  };
  const validateSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email().required("Invalid Email"),
    address: Yup.string().required("Required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Required"),
  });
  const handlePlaceOrder = async () => {
    try {
      await validateSchema.validate(formCheckout, { abortEarly: false });
      console.log("Submit Order: ", formCheckout);
    } catch (err) {
      const newError = {};
      err.inner.forEach((error) => {
        newError[error.path] = error.message;
      });
      setErrorMsg(newError);
    }
  };
  return (
    <div id="checkout_wrapper" className="!mb-8 !mt-8">
      <div className="w-full flex flex-col items-center">
        <div className="w-[81%] md:w-[93%]">
          {/* Title */}
          <h2 className="font-section-heading font-semibold text-left md:mb-6">
            Check out
          </h2>
          {/* Content */}
          <div className="md:flex md:flex-row md:justify-between md:gap-7">
            <div className="w-full mb-4 md:pr-7 md:border-r md:border-r-gray-300">
              <div className="mb-2">
                {/* Contact info */}
                <Accordion defaultExpanded sx={formInputStyle}>
                  <AccordionSummary expandIcon={<MdExpandLess />}>
                    <h6 className="font-semibold mb-2 text-[18px] md:text-[20px]">
                      <span className="flex flex-row items-center gap-2">
                        <LuContact2 /> Contact Infomation
                      </span>
                    </h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TextField
                      error={errorMsg.name ? true : false}
                      size="small"
                      className="w-full mb-3"
                      label="Full name"
                      id="outlined-basic"
                      name="name"
                      helperText={`${errorMsg.name ? errorMsg.name : ""}`}
                      variant="outlined"
                      onChange={handleOnChangeForm}
                    />
                    <div className="flex flex-row items-center gap-2">
                      <TextField
                        sx={formInputStyle}
                        error={errorMsg.phone ? true : false}
                        size="small"
                        className="w-full mb-3"
                        id="outlined-basic"
                        label="Phone"
                        name="phone"
                        variant="outlined"
                        helperText={`${errorMsg.phone ? errorMsg.phone : ""}`}
                        onChange={handleOnChangeForm}
                      />
                      <TextField
                        sx={formInputStyle}
                        error={errorMsg.email ? true : false}
                        size="small"
                        className="w-full mb-3"
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        variant="outlined"
                        helperText={`${errorMsg.email ? errorMsg.email : ""}`}
                        onChange={handleOnChangeForm}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
                <hr></hr>
                {/* Shipping address */}
                <Accordion defaultExpanded sx={formInputStyle}>
                  <AccordionSummary expandIcon={<MdExpandLess />}>
                    <h6 className="font-semibold mb-2 text-[18px] md:text-[20px]">
                      <span className="flex flex-row items-center gap-2">
                        <MdOutlineLocalShipping /> Shipping Address
                      </span>
                    </h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="md:flex md:flex-row md:justify-center md:items-center md:gap-4">
                      <TextField
                        error={errorMsg.address ? true : false}
                        size="small"
                        className="w-full mb-3"
                        id="outlined-basic"
                        label="Full address"
                        name="address"
                        variant="outlined"
                        helperText={`${
                          errorMsg.address ? errorMsg.address : ""
                        }`}
                        onChange={handleOnChangeForm}
                      />
                      <TextField
                        size="small"
                        className="w-full mb-3"
                        select
                        id="outlined-basic"
                        label="City"
                        name="city"
                        variant="outlined"
                        defaultValue="HCM"
                        onChange={handleOnChangeForm}
                      >
                        {citySelect.map((item) => (
                          <MenuItem key={item.value} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div className="mt-1">
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="ship"
                          name="shipMethod"
                          onChange={handleOnChangeForm}
                        >
                          <FormControlLabel
                            value="ship"
                            control={<Radio size="small" />}
                            label="Ship"
                          />
                          <FormControlLabel
                            value="instore"
                            control={<Radio size="small" />}
                            label="Pickup in store"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
              <hr></hr>
              {/* Payment method */}
              <Accordion defaultExpanded sx={formInputStyle}>
                <AccordionSummary expandIcon={<MdExpandLess />}>
                  <span className="flex flex-row gap-2 justify-center items-center">
                    <MdOutlinePayment></MdOutlinePayment>
                    <h6 className="font-semibold text-[18px] m-0">
                      Payment Method
                    </h6>
                  </span>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="text-[16px] text-color-sub m-0 italic  ">
                    All transactions are secure and encrypted.
                  </p>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="cash"
                      name="payment"
                      onChange={handleOnChangeForm}
                    >
                      <FormControlLabel
                        value="cash"
                        control={<Radio size="small" />}
                        label="Cash on Delivery"
                      />
                      <FormControlLabel
                        disabled
                        value="online"
                        control={<Radio size="small" />}
                        label="MOMO"
                      />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>

              <div className="mt-[20px]">
                <TextField
                  size="small"
                  className="w-full"
                  id="outlined-multiline-static"
                  label="Note"
                  name="note"
                  multiline
                  rows={4}
                  onChange={handleOnChangeForm}
                />
              </div>
            </div>

            <div className="md:w-[60%]">
              <div>
                <div
                  className={` ${
                    cartItem.length <= 0
                      ? ""
                      : "p-[25px] rounded-sm mb-3 overflow-scroll h-full md:p-0 md:h-full"
                  }`}
                >
                  {cartItem && cartItem.length > 0 ? (
                    cartItem.map((productItem) => {
                      return (
                        <div
                          key={productItem.id}
                          className={`flex flex-row justify-between ${
                            cartItem.length > 1
                              ? " mb-3 border-b border-b-gray-200 md:pb-[10px]"
                              : ""
                          } `}
                        >
                          <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                            <img
                              className="w-full h-full object-cover rounded-md"
                              src={productItem.img}
                            ></img>
                          </div>
                          <div>
                            <span className="text-right">
                              <p className="md:text-[18px]">
                                {productItem.name}
                              </p>
                              <span className="flex flex-row gap-2 justify-end md:text-[18px]">
                                {productItem.quantity} x{" "}
                                <p className="text-color-high-light font-semibold">
                                  {(productItem.price * 1000).toLocaleString()}₫
                                </p>
                              </span>
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-color-sub font-text-secondary italic p-3 border border-gray-300 rounded-md md:hidden">
                      Empty Cart
                    </div>
                  )}
                </div>
              </div>
              <div>
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
              </div>
              <ConfirmOrder
                styles={{
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "70px",
                  fontSize: "18px",
                  textTransform: "none",
                }}
                handlePlaceOrder={handlePlaceOrder}
              ></ConfirmOrder>
              <div className="w-full text-center mt-[8px] mb-3">
                <NavLink
                  to="/cart"
                  className="navlink-hover  font-text-secondary italic"
                  style={{ "--line-hover": "#ff6d00" }}
                >
                  Back to cart ?
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
