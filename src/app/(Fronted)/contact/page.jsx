import CareersPage from '@/componets/Pages/Contact/CareersPage';
import Contactpage from '@/componets/Pages/Contact/Contactpage';
import PartnersPage from '@/componets/Pages/Contact/PartnersPage';
import React from 'react';

export const metadata = {
  title: "Contact Us | ToyShop",
  description:
    "Get in touch with ToyShop for product inquiries, customer support, orders, feedback, and partnership opportunities.",

  keywords: [
    "contact toyshop",
    "toyshop support",
    "customer service",
    "toy store contact",
    "online toy shop support",
    "toyshop help",
    "contact us",
    "toyshop customer care",
  ],

  openGraph: {
    title: "Contact Us | ToyShop",
    description:
      "Need help? Contact ToyShop for assistance with products, orders, and customer support.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | ToyShop",
    description:
      "Reach out to ToyShop for support, inquiries, and feedback.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Contact = () => {
  return (
    <div>
      <CareersPage/>
      <PartnersPage/>
      <Contactpage />
    </div>
  );
};

export default Contact;