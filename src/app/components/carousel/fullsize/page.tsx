"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import img1 from "@/app/assets/carousel/img1.jpg";
import img2 from "@/app/assets/carousel/img2.jpg";
import img3 from "@/app/assets/carousel/img3.jpg";
import img4 from "@/app/assets/carousel/img4.jpg";

interface ItemProps {
  image: StaticImageData;
}

function Item({ image }: ItemProps) {
  return (
    <Paper style={{ textAlign: "center", height: "350px", cursor:'pointer'}}>
      <Image
        src={image}
        alt={'error'}
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />
    </Paper>
  );
}

const CarouselComponent: React.FC = () => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: img1,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: img2,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: img3,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: img4,
    },
  ];

  return (
    <Carousel sx={{maxWidth:'100%', width:'100%'}}>
      {items.map((item, i) => (
        <Item
          key={i}
          image={item.img}
        />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
