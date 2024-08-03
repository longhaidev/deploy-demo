import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
// icon & UI
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
// cpns
import Ingredient from "../../components/ProductIngredients/Ingredient";
import Nutrition from "../../components/ProductNutrition/Nutrition";
// fake data
import raw from "../../assets/FakeData/products.json";
import AddToCartButton from "../../components/Button/AddToCartButton";
// redux
import { useSelector } from "react-redux";
import { FaBookmark } from "react-icons/fa6";
import ProductStorage from "../../components/ProductStorage/ProductStorage";
import Related from "../../components/RelatedProducts/Related";
// main
export default function ProductDetail() {
  const cartItem = useSelector((state) => state.cart.cart);
  // state
  const { productId, category } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const [relatedProduct, setRelatedProduct] = useState([]);
  // get product
  useEffect(() => {
    getProductDetail();
    switch (category) {
      case "bread":
        getRelatedProduct("coffee");
        break;
      case "pastry":
        getRelatedProduct("blended");
        break;
      case "sandwich":
        getRelatedProduct("coffee");
        break;
      case "cake":
        getRelatedProduct("tea");
        break;
      case "tea":
        getRelatedProduct("pastry");
        break;
      case "coffee":
        getRelatedProduct("bread");
        break;
      case "blended":
        getRelatedProduct("sandwich");
        break;
      default:
        getRelatedProduct("coffee");
        break;
    }
    window.scrollTo(0, 0);
  }, [productId]);

  const getProductDetail = () => {
    raw.map((categoryItem) => {
      if (categoryItem.category === category) {
        categoryItem.products.map((product) => {
          if (product.id === productId) {
            setProductDetail(product);
          }
        });
      }
    });
  };

  const getRelatedProduct = (category) => {
    raw.map((productItem) => {
      if (productItem.category === category) {
        setRelatedProduct(productItem.products);
      }
    });
  };

  const resetQuantity = () => {
    setProductQuantity(1);
  };

  const handleIncreaseQuantity = () => {
    if (productQuantity < productDetail.stock) {
      setProductQuantity(productQuantity + 1);
    } else return;
  };

  const handleDecreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    } else return;
  };
  console.log(">>> check render from product detail");

  return (
    <div className="capitalize mb-6">
      {/* direct */}
      <div className="sticky sticky-element-from-header z-[1] backdrop-blur-md pt-[10px] pb-[10px] text-left lg:mx-5">
        <span className="text-[18px] pl-[20px] ">
          <NavLink className="capitalize font-bold" to={`/menus/${category}`}>
            {category}{" "}
          </NavLink>
          &gt; {productDetail.name}
        </span>
      </div>
      {/* mx-7 md:mx-10 lg:mx-40 */}
      {/* product detail */}
      <div className="w-full flex flex-col items-center">
        <div className="w-[81%] md:w-[93%]">
          <div className="md:mb-[50px]">
            <div className="md:flex md:flex-row md:gap-[50px]">
              <div className="w-full h-[250px] mt-[10px] mb-[10%] relative md:mt-0 md:mb-0 lg:h-[400px]">
                <img
                  draggable={false}
                  className="rounded-lg w-[100%] h-[100%] object-cover"
                  src={productDetail.img}
                ></img>
                {/* isAdd? */}
                {cartItem.find((item) => item.id === productDetail.id) && (
                  <span className="absolute right-[-5px] top-0 flex flex-col items-center justify-center">
                    <FaBookmark color="red" size={40} className="relative" />
                    <p className="absolute top-[10px] m-0 text-white text-[11px] italic">
                      Added
                    </p>
                  </span>
                )}
              </div>
              <div className="w-full">
                <div className="mb-[6%] h-full flex flex-col">
                  <div>
                    <h4 className="font-bold text-[32px] uppercase w-full md:text-[22px]">
                      {productDetail.name}
                    </h4>
                    <h3 className="text-[20px] text-gray-400 italic capitalize md:text-[24px]">
                      #{category}
                    </h3>
                    <h4 className="mt-1 text-red-600 text-[20px] md:text-[40px]">
                      {(productDetail.price * 1000).toLocaleString()}₫
                    </h4>
                  </div>
                  <div className="md:flex md:flex-row gap-3 lg:gap-0">
                    <div className="flex flex-row w-fit gap-3 items-center mt-3 justify-between md:w-full lg:w-[50%]">
                      <div className="flex flex-row gap-4  items-center justify-between w-full border-gray-300 border pt-[6px] pb-[6px] pl-[15px] pr-[15px]">
                        <FiMinus
                          className="cursor-pointer"
                          onClick={() => handleDecreaseQuantity()}
                        />
                        <p className="m-0 select-none text-[20px]">
                          {productQuantity}
                        </p>
                        <GoPlus
                          className="cursor-pointer"
                          onClick={() => handleIncreaseQuantity()}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <div className="flex flex-row gap-2 items-center mt-3 w-full ">
                        <AddToCartButton
                          product={productDetail}
                          productQuantity={productQuantity}
                          resetQuantity={resetQuantity}
                          styles={{ paddingTop: "10px", paddingBottom: "10px" }}
                        ></AddToCartButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full text-center">
                  <NavLink
                    to={`/menus/${category}`}
                    className="navlink-hover  text-[14px] italic md:text-[16px]"
                    style={{ "--line-hover": "#ff6d00" }}
                  >
                    Continue browsing?
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[20px]">
            <hr className="md:hidden"></hr>
            <h3 className=" font-semibold text-[22px] ">Product Detail </h3>
            <div className="">
              <Ingredient ingredients={productDetail.ingredients}></Ingredient>

              <Nutrition nutrition={productDetail.nutrition}></Nutrition>
            </div>
          </div>
          {category &&
            category !== "tea" &&
            category !== "coffee" &&
            category !== "blended" && <ProductStorage></ProductStorage>}
          <Related relatedProduct={relatedProduct}></Related>
        </div>
      </div>
    </div>
  );
}
