import TermsOfService from "@/componets/Pages/Contact/TermsOfService";
import React from "react";

export const metadata = {
  title: "Terms of Service | ToyShop",
  description:
    "Read ToyShop's Terms of Service to understand the rules, conditions, and responsibilities for using our website and purchasing products.",

  keywords: [
    "toyshop terms of service",
    "terms and conditions",
    "toyshop policies",
    "website terms",
    "online toy store terms",
    "customer agreement",
    "toyshop legal terms",
  ],

  openGraph: {
    title: "Terms of Service | ToyShop",
    description:
      "Review the terms and conditions governing the use of ToyShop and its services.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | ToyShop",
    description:
      "Understand the terms, conditions, and policies for using ToyShop.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Terms = () => {
  return (
    <div>
      <TermsOfService />
    </div>
  );
};

export default Terms;
