import Navvar from "@/componets/Shared/Navvar";
import React from "react";

export const metadata = {
  title: "Authentication | ToyShop",
  description:
    "Access your ToyShop account to shop toys, manage orders, save favorites, and enjoy a personalized shopping experience.",

  keywords: [
    "toyshop login",
    "toyshop signup",
    "authentication",
    "user account",
    "toyshop account",
    "sign in",
    "create account",
  ],

  openGraph: {
    title: "Authentication | ToyShop",
    description:
      "Login or create a ToyShop account to access exclusive features and manage your orders.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Authentication | ToyShop",
    description: "Sign in or create a ToyShop account to continue shopping.",
  },

  robots: {
    index: false,
    follow: true,
  },
};

const AuthLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navvar />
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
