import AddToCartPage from '@/componets/Pages/Cart/AddToCartPage';
import React from 'react';

export const metadata = {
  title: "Shopping Cart | ToyShop",
  description:
    "View and manage items in your ToyShop shopping cart. Review selected toys, update quantities, and proceed to checkout easily.",

  keywords: [
    "toyshop cart",
    "shopping cart",
    "add to cart toyshop",
    "toy store cart",
    "checkout toys",
    "online toy shop cart",
  ],

  openGraph: {
    title: "Shopping Cart | ToyShop",
    description:
      "Check your selected toys in the ToyShop cart and proceed to checkout.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shopping Cart | ToyShop",
    description:
      "View and manage your ToyShop cart items before checkout.",
  },

  robots: {
    index: false,
    follow: true,
  },
};

const AddToCart = () => {
  return (
    <div>
      <AddToCartPage />
    </div>
  );
};

export default AddToCart;