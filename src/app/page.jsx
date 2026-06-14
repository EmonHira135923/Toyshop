import Homepage from "@/componets/Pages/HomeLayout/Homepage";
import LatestProduct from "@/componets/Pages/HomeLayout/LatestProduct";

export const metadata = {
  title: "ToyShop - Best Online Toy Store for Kids",
  description:
    "Shop premium quality toys, educational games, action figures, dolls, puzzles, and more at ToyShop. Safe, fun, and affordable toys for kids of all ages.",

  keywords: [
    "toyshop",
    "online toy store",
    "kids toys",
    "educational toys",
    "toy ecommerce",
    "buy toys online",
    "best toy shop",
    "children toys",
  ],

  openGraph: {
    title: "ToyShop - Best Online Toy Store for Kids",
    description:
      "Discover fun and educational toys for kids at ToyShop. Shop now for the best deals on toys and games.",
    type: "website",
    url: "https://your-domain.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ToyShop Home",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ToyShop - Best Online Toy Store for Kids",
    description:
      "Shop toys, games, and educational products for kids at ToyShop.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <div>
      <Homepage />
      <LatestProduct/>
    </div>
  );
}