import Login from '@/componets/Pages/Auth/Login';
import React from 'react';

export const metadata = {
  title: "Login | ToyShop",
  description:
    "Login to your ToyShop account to access your orders, wishlist, and personalized shopping experience.",

  keywords: [
    "toyshop login",
    "login toyshop",
    "customer login",
    "toy store login",
    "online toy shop account",
    "sign in toyshop",
  ],

  openGraph: {
    title: "Login | ToyShop",
    description:
      "Sign in to ToyShop to continue shopping and manage your account easily.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Login | ToyShop",
    description:
      "Login to ToyShop and access your account, orders, and wishlist.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Loginpage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Loginpage;