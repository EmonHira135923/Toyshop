import Aboutpage from '@/componets/Pages/About/Aboutpage';
import StoriesPage from '@/componets/Pages/About/StoriesPage';
import React from 'react';

export const metadata = {
  title: "About Us | ToyShop",
  description:
    "Learn more about ToyShop, our mission, values, and commitment to providing high-quality, safe, and educational toys for children of all ages.",

  keywords: [
    "about toyshop",
    "toyshop company",
    "toy store",
    "kids toys",
    "educational toys",
    "toyshop mission",
    "online toy shop",
    "children toys",
  ],

  openGraph: {
    title: "About Us | ToyShop",
    description:
      "Discover the story behind ToyShop and our passion for bringing joy and learning through toys.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | ToyShop",
    description:
      "Learn about ToyShop's mission and dedication to quality toys for children.",
  },
};

const AboutUs = () => {
  return (
    <div>
      <Aboutpage />
      <StoriesPage/>
    </div>
  );
};

export default AboutUs;