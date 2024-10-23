import b1 from "@/app/assets/beverage/b1.jpg";
import b2 from "@/app/assets/beverage/b2.jpg";
import b3 from "@/app/assets/beverage/b3.jpg";
import b4 from "@/app/assets/beverage/b4.jpg";
import b5 from "@/app/assets/beverage/b5.jpg";
import b6 from "@/app/assets/beverage/b6.jpg";

export interface Beverage {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const beverageData: Beverage[] = [
  {
    id: 1,
    name: "Pizza Margherita",
    price: 260,
    description: "7.5 In | 739.60 Kcal",
    image: b1.src,
  },
  {
    id: 2,
    name: "Twisted Wedges",
    price: 270,
    description: "200g | 492.94 Kcal",
    image: b2.src,
  },
  {
    id: 3,
    name: "Maggi On The Steroid",
    price: 340,
    description: "200g | 412.22 Kcal",
    image: b3.src,
  },
  {
    id: 4,
    name: "Regular Tub Salted Popcorn",
    price: 380,
    description: "90g | 281 Kcal",
    image: b4.src,
  },
  {
    id: 5,
    name: "Regular Coke",
    price: 320,
    description: "540ml | 238 Kcal",
    image: b5.src,
  },
  {
    id: 6,
    name: "Large Coke",
    price: 450,
    description: "810ml | 356 Kcal",
    image: b5.src,
  },
  {
    id: 7,
    name: "Masala Masti Coke 330ml",
    price: 250,
    description: "330ml | 211 kcal",
    image: b5.src,
  },
  {
    id: 8,
    name: "Medium Tub Salted Popcorn",
    price: 480,
    description: "135g | 422 Kcal",
    image: b6.src,
  },
];
