import React, { useEffect, useState } from "react";
import _ from "lodash";
// img
import bannerImg from "assets/Pictures/Banner3.jpg";
//
import { NavLink } from "react-router-dom";
import "./AllProduct.scss";
// fake data
import { category } from "assets/FakeData/FakeData";
import PageDirect from "components/PageDirect/PageDirect";
import products from "assets/FakeData/products.json";
import ProductCard from "components/Product/ProductCard";
export default function AllProduct() {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProduct();
  }, []);
  const getAllProduct = () => {
    const productArray = [];
    products.map((product) => {
      productArray.push(product);
    });
    setAllProduct(productArray);
  };
  return (
    <>
      <div>
        {/* Page direction */}
        <PageDirect pageName="Our Menu" bgImg={bannerImg}></PageDirect>
        <div className="mt-8 mb-8 flex flex-col items-center  z-[0] lg:mt-12">
          {category &&
            category.length > 0 &&
            category.map((category) => {
              return (
                <div key={category.id} className="w-[81%] md:w-[93%] mb-4">
                  <h2 className="mx-1 mb-2 text-left capitalize font-big-heading font-semibold">
                    {category.category_name}
                  </h2>
                  <div className="flex flex-col items-center lg:mt-6">
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-11 w-full md:gap-x-[1rem] lg:gap-x-[8px]">
                      {category.items &&
                        category.items.length > 0 &&
                        category.items.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="w-full flex flex-col items-center gap-[5px] mt-[15px] category-item lg:items-baseline"
                            >
                              <NavLink
                                to={item.item_link}
                                className="no-underline text-center text-black capitalize text-xl"
                              >
                                <div className="w-[300px] h-[200px] mb-2 md:w-[270px]">
                                  <img
                                    className="object-cover rounded-md h-full w-full "
                                    src={item.item_img}
                                  ></img>
                                </div>
                                <div>
                                  <span className="font-text-primary">
                                    {item.item_name}
                                  </span>
                                </div>
                              </NavLink>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
          {/* All Product */}
          <div id="all_product_wrapper" className="w-[81%] md:w-[93%] mt-6">
            <h2 className="mx-1 mb-2 text-center capitalize font-big-heading font-semibold">
              All Product
            </h2>
            <div className="w-full">
              {allProduct.map((item, index) => {
                return (
                  <div key={index} className="mb-11">
                    <h2 className="mx-1 mb-2 text-left capitalize font-big-heading font-semibold">
                      {item.category}
                    </h2>
                    <div className="flex flex-col items-center justify-center gap-[45px] mt-6 ">
                      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[45px] w-full lg:w-full lg:gap-7 ">
                        {item.products.map((product) => {
                          return (
                            <ProductCard
                              category={item.category}
                              productItem={product}
                            ></ProductCard>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
