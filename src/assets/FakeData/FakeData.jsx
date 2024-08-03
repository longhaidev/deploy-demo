import breadImg from "../Pictures/bread-img2.jpg";
import cakeImg from "../Pictures/cakes1.jpeg";
import pastryImg from "../Pictures/pastry1.jpg";
import coffeeImg from "../Pictures/coffee1.jpg";
import teaImg from "../Pictures/tea1.jpg";
import blended from "../Pictures/blended1.jpg";
import sandwichImg from "../Pictures/sandwich1.jpg";
import breadIcon from "../../assets/Pictures/bread-icon1.png";
import sandwitchIcon from "../../assets/Pictures/sandwich-icon1.png";
import teaIcon from "../../assets/Pictures/tea-icon1.png";
import cakeIcon from "../../assets/Pictures/cake-icon1.png";
import blendedIcon from "../../assets/Pictures/blended-icon1.png";
import pastryIcon from "../../assets/Pictures/pastry-icon1.png";
import coffeeIcon from "../../assets/Pictures/coffee-icon1.png";
// lib
import { v4 } from "uuid";

export const category = [
  {
    id: 1,
    category_name: "bakery",
    items: [
      {
        id: 1,
        item_name: "bread",
        item_img: breadImg,
        item_icon: breadIcon,
        item_link: "/menus/bread",
      },
      {
        id: 2,
        item_name: "cake",
        item_img: cakeImg,
        item_icon: cakeIcon,
        item_link: "/menus/cake",
      },
      {
        id: 3,
        item_name: "pastry",
        item_img: pastryImg,
        item_icon: pastryIcon,
        item_link: "/menus/pastry",
      },
      {
        id: 4,
        item_name: "sandwich",
        item_img: sandwichImg,
        item_icon: sandwitchIcon,
        item_link: "/menus/sandwich",
      },
    ],
  },
  {
    id: 2,
    category_name: "beverages",

    items: [
      {
        id: 1,
        item_name: "coffee & expresso",
        item_img: coffeeImg,
        item_icon: coffeeIcon,
        item_link: "/menus/coffee",
      },
      {
        id: 2,
        item_name: "tea",
        item_img: teaImg,
        item_icon: teaIcon,
        item_link: "/menus/tea",
      },
      {
        id: 3,
        item_name: "blended",
        item_img: blended,
        item_icon: blendedIcon,
        item_link: "/menus/blended",
      },
    ],
  },
];

export const products = [
  {
    id: v4(),
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
  {
    id: v4(),
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
  {
    id: v4(),
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
  {
    id: v4(),
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
  {
    id: v4(),
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
  {
    id: v4(),
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
  {
    id: v4(),
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
  {
    id: v4(),
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
  {
    id: v4(),
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
  {
    id: v4(),
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
  {
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
    category: "Bread",
    name: "Multi-Grain Pan Bread",
    nutrition: [
      {
        calories: 290,
        total_fat: 9,
        saturated_fat: 2,
        trans_fat: 0,
        total_carb: 43,
        total_sugar: 5,
        protein: 10,
      },
    ],
    allergens: ["egg", "milk", "soy", "wheat"],
    ingredients:
      "Bread dough(wheat flour, water, sunflower seed, pumpkin seed, multi grain mix(sesame), liquid egg, sugar, yeast, margarine, butter, dough improver, skimmed milk powder, sea salt), Egg wash(egg, water)",
    price: 420,
    stock: 20,
    img: "https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/65eba35e870c693d70e06744_Strawberry%20Croissant%201.png",
    quantity: 0,
  },
];
