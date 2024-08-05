import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
// styles
import "./Product.scss";
// components
import AddToCartButton from "../../components/Button/AddToCartButton";
import BuyNowButton from "../../components/Button/BuyNowButton";
// UI & Icon
import { FaBookmark } from "react-icons/fa6";
// fake data
import categoryData from "../../assets/FakeData/categories.json";
import raw from "../../assets/FakeData/products.json";
// redux
import { useSelector } from "react-redux";
import ProductCard from "../../components/Product/ProductCard";
import PageDirect from "components/PageDirect/PageDirect";
export default function Product() {
  const responsiveCarousel = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 1,
    },
  };

  const { category } = useParams();
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart?.cart);

  const [products, setProducts] = useState([]);
  const [bannerCategory, setBannerCategory] = useState("");

  useEffect(() => {
    getProductList();
    window.scrollTo(0, 0);
  }, [category]);

  // call api later
  const getProductList = () => {
    raw.map((productItem) => {
      if (productItem.category === category) {
        setProducts(productItem.products);
      }
    });
    categoryData.map((categoryItem) => {
      if (categoryItem.name === category) {
        setBannerCategory(categoryItem.img);
      }
    });
  };

  return (
    <div>
      <PageDirect bgImg={bannerCategory} pageName={category}></PageDirect>
      <div className="bg-color-secondary sticky sticky-element-from-header pt-2 pb-[6px] z-[1] ">
        <Carousel
          responsive={responsiveCarousel}
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {/* Category */}
          {categoryData &&
            categoryData.length > 0 &&
            categoryData.map((categoryItem) => {
              return (
                <NavLink
                  draggable={false}
                  key={categoryItem.id}
                  to={categoryItem.link}
                  className="flex flex-col items-center"
                >
                  <div className="w-[25px] flex flex-col items-center select-none capitalize md:w-[30px] lg:w-[35px]">
                    <img
                      className="w-full h-full object-cover"
                      src={categoryItem.icon}
                      draggable={false}
                    ></img>
                    <p className="font-text-secondary m-0">
                      {categoryItem.name}
                    </p>
                  </div>
                </NavLink>
              );
            })}
        </Carousel>
      </div>
      {/* Products */}
      <div
        id="product_wrapper"
        className="mt-8 mb-8 flex flex-col items-center relative z-[0] lg:mt-12"
      >
        <div id="product_container" className="w-[81%] md:w-[93%]">
          {/* Title */}
          <h2 className="text-left capitalize font-big-heading font-semibold">
            {category}
          </h2>
          {/* Product list */}
          <div id="product_list" className="mt-6">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-11 ">
              {products &&
                products.length > 0 &&
                products.map((productItem) => {
                  return (
                    <ProductCard
                      category={category}
                      productItem={productItem}
                    ></ProductCard>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
