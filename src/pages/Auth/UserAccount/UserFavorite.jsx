import React from "react";
import ProductCard from "components/Product/ProductCard";
export default function UserFavorite() {
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
  return (
    <div className="w-full p-[14px] pb-[40px] border border-gray-300 rounded-md md:pb-[14px]">
      <div>
        <h3 className="font-section-sub-heading">My Favorite</h3>
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
            <ProductCard productItem={fakeData}></ProductCard>
            <ProductCard productItem={fakeData}></ProductCard>
            <ProductCard productItem={fakeData}></ProductCard>
            <ProductCard productItem={fakeData}></ProductCard>
            <ProductCard productItem={fakeData}></ProductCard>
            <ProductCard productItem={fakeData}></ProductCard>
            <ProductCard productItem={fakeData}></ProductCard>
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
