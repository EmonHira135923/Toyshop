import Allproductpage from '@/componets/Pages/Products/Allproductpage';
import React from 'react';

export const metadata = {
  title: "All Products | ToyShop",
  description:
    "Browse our complete collection of toys, educational games, action figures, puzzles, dolls, and more at ToyShop.",
  keywords: [
    "toy shop products",
    "kids toys",
    "educational toys",
    "action figures",
    "dolls",
    "puzzles",
    "board games",
    "toy store",
    "online toy shop",
  ],
  openGraph: {
    title: "All Products | ToyShop",
    description:
      "Explore all available toys and games for kids at ToyShop.",
    type: "website",
  },
};

const AllProducts = () => {
  return (
    <div>
      <Allproductpage />
    </div>
  );
};

export default AllProducts;