import React from "react";
import { NavLink } from "react-router-dom";
// styles
import "./Related.scss";
// components

import ProductCard from "../Product/ProductCard";
export default function Related(props) {
  const { relatedProduct } = props;
  return (
    <div className=" mt-[20px] md:mb-[0px]">
      {relatedProduct && (
        <div>
          <h3 className="text-center text-[22px] font-semibold mb-6">
            Related Food
          </h3>
          <div className="">
            <div className="mx-2">
              <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] w-full gap-[45px]">
                  {relatedProduct.length > 0 &&
                    relatedProduct.map((item) => {
                      return (
                        <ProductCard
                          key={item.id}
                          productItem={item}
                        ></ProductCard>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
