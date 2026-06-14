import FaqPage from "@/componets/Pages/Contact/FaqPage";
import React from "react";

export const metadata = {
  title: "FAQ | ToyShop",
  description:
    "Find answers to frequently asked questions about ToyShop, including orders, delivery, payments, returns, and product information.",

  keywords: [
    "toyshop faq",
    "frequently asked questions",
    "toy store help",
    "order help toyshop",
    "delivery information",
    "return policy toyshop",
    "toyshop support",
  ],

  openGraph: {
    title: "FAQ | ToyShop",
    description:
      "Get quick answers to common questions about ToyShop products, orders, and support.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FAQ | ToyShop",
    description:
      "Find answers to common ToyShop questions about orders, delivery, and returns.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const FAQ = () => {
  return (
    <div>
      <FaqPage />
    </div>
  );
};

export default FAQ;
