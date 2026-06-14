import PrivacyPolicy from "@/componets/Pages/Contact/PrivacyPolicy";
import React from "react";

export const metadata = {
  title: "Privacy Policy | ToyShop",
  description:
    "Read ToyShop's Privacy Policy to learn how we collect, use, store, and protect your personal information while using our platform.",

  keywords: [
    "toyshop privacy policy",
    "privacy policy",
    "data protection",
    "customer privacy",
    "toyshop security",
    "personal information policy",
    "online toy store privacy",
  ],

  openGraph: {
    title: "Privacy Policy | ToyShop",
    description:
      "Learn how ToyShop protects your personal data and ensures a safe shopping experience.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | ToyShop",
    description:
      "Understand how ToyShop collects, uses, and protects your information.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Privacy = () => {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
};

export default Privacy;
