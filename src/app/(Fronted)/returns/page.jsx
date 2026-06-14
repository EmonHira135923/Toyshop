import ReturnPolicyPage from "@/componets/Pages/Contact/ReturnPolicyPage";
import React from "react";

export const metadata = {
  title: "Return Policy | ToyShop",
  description:
    "Learn about ToyShop's return and refund policy, including eligibility, conditions, and how to request a return or exchange.",

  keywords: [
    "toyshop return policy",
    "refund policy toyshop",
    "toyshop returns",
    "toy store refund",
    "exchange policy",
    "toyshop customer policy",
  ],

  openGraph: {
    title: "Return Policy | ToyShop",
    description:
      "Understand ToyShop's return and refund rules for a smooth shopping experience.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Return Policy | ToyShop",
    description: "Read ToyShop return and refund policy details easily.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Return = () => {
  return (
    <div>
      <ReturnPolicyPage />
    </div>
  );
};

export default Return;
