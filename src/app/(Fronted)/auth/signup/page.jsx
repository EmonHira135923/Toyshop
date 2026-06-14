import Registraion from '@/componets/Pages/Auth/Registraion';
import React from 'react';

export const metadata = {
  title: "Create Account | ToyShop",
  description:
    "Create your ToyShop account to start shopping for premium toys, track orders, and enjoy a personalized shopping experience.",

  keywords: [
    "toyshop signup",
    "create account toyshop",
    "register toyshop",
    "toy shop login",
    "online toy store account",
    "toyshop registration",
    "kids toys shopping account",
  ],

  openGraph: {
    title: "Create Account | ToyShop",
    description:
      "Sign up at ToyShop and explore a wide range of toys for kids with a personalized experience.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Create Account | ToyShop",
    description:
      "Register at ToyShop to start shopping toys and managing your orders easily.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const CreateAccount = () => {
  return (
    <div>
      <Registraion />
    </div>
  );
};

export default CreateAccount;