import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
// UI
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// components
import ProductCard from "components/Product/ProductCard";
export default function UserOrders() {
  const fakeData = {
    id: "212a0315-e836-4bd3-aff4-017e0c1f6066",
    name: "Salt & Butter Roll",
    product_category: "bread",
    nutrition: {
      calories: 290,
      total_fat: 9,
      saturated_fat: 2,
      trans_fat: 0,
      total_carb: 43,
      total_sugar: 5,
      protein: 10,
    },
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://images.pexels.com/photos/792404/pexels-photo-792404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quantity: 0,
  };
  const params = useParams();
  const [orderStatus, setOrderStatus] = useState("");
  const [products, setProducts] = useState([]);
  const handleChange = (event) => {
    setOrderStatus(event.target.value);
  };
  console.log(params.status);
  useEffect(() => {
    setOrderStatus(params.status);
  }, [params]);
  // useEffect(() => {
  //   fetchingOrderByStatus(orderStatus);
  // }, [orderStatus]);
  const fetchingOrderByStatus = (orderStatus) => {
    // call api
    console.log(orderStatus);
  };
  const menuOptions = [
    {
      id: 1,
      value: "all",
      label: "All",
      link: "/user/order/all",
    },
    {
      id: 2,
      value: "pending",
      label: "Pending",
      link: "/user/order/pending",
    },
    {
      id: 3,
      value: "delivering",
      label: "Delivering",
      link: "/user/order/delivering",
    },
    {
      id: 4,
      value: "delivered",
      label: "Delivered",
      link: "/user/order/delivered",
    },
    {
      id: 5,
      value: "completed",
      label: "Completed",
      link: "/user/order/completed",
    },
    {
      id: 6,
      value: "canceled",
      label: "Canceled",
      link: "/user/order/canceled",
    },
  ];
  return (
    <div className="w-full border border-gray-300 rounded-md p-[14px] pb-[40px]">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-section-sub-heading">My Orders</h3>
        <div>
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={orderStatus}
              label="Age"
              onChange={handleChange}
            >
              {menuOptions &&
                menuOptions.length &&
                menuOptions.map((option) => {
                  return (
                    <MenuItem key={option.id} value={option.value}>
                      <NavLink to={option.link}>{option.label}</NavLink>
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </div>
      </div>
      <hr></hr>
      <div className="mx-2">
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[45px]  md:gap-x-4 md:gap-y-4 lg:w-full">
            <ProductCard productItem={fakeData}></ProductCard>
            <ProductCard productItem={fakeData}></ProductCard>
            <ProductCard productItem={fakeData}></ProductCard>
            <ProductCard productItem={fakeData}></ProductCard>
            <ProductCard productItem={fakeData}></ProductCard>
          </div>
        </div>
      </div>
    </div>
  );
}
