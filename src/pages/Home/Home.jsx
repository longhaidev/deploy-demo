import { useEffect, useState } from "react";
import _ from "lodash";
// cpn
import Banner from "../../components/Banner/Banner";
import FoodSection from "../../components/FoodSection/FoodSection";
import OurStory from "../../components/OurStory/OurStory";

// fake data
import categories from "../../assets/FakeData/categories.json";
const Home = () => {
  const [bakeryGroup, setBakeryGroup] = useState([]);
  const [beverageGroup, setBeverageGroup] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const separateCategoryGroup = () => {
    let bakeryGroup = [];
    let beverageGroup = [];
    let raw = _.chain(categories)
      .groupBy("group")
      .map((item) => {
        item.forEach((product) => {
          if (product.group === "bakery") {
            bakeryGroup.push(product);
          } else {
            beverageGroup.push(product);
          }
        });
        setBakeryGroup(bakeryGroup);
        setBeverageGroup(beverageGroup);
      })
      .value();
  };
  useEffect(() => {
    separateCategoryGroup();
  }, []);
  return (
    <>
      <Banner></Banner>
      <FoodSection
        data={bakeryGroup}
        title={"Bakery"}
        subtitle={
          "We’ve got you covered for any holiday, special occasion, or cause for celebration."
        }
        bgColor={""}
      ></FoodSection>
      <FoodSection
        data={beverageGroup}
        title={"Beverages"}
        subtitle={
          "We’ve got you covered for any holiday, special occasion, or cause for celebration."
        }
        bgColor={"var(--bg-color-secondary)"}
      ></FoodSection>
      <OurStory
        storyImg={
          "https://breadtalkvietnam.com/wp-content/uploads/2023/06/BreadTalk-Studio_14-min-min.jpg"
        }
      ></OurStory>
    </>
  );
};

export default Home;
