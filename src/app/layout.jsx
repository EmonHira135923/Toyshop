import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/componets/Shared/Header";
import ThemeProvider from "@/componets/Provider/ThemeProvider";

// Google Font
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// MetaData for SEO and Social Sharing
export const metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "ToyShop - Premium Toys for Kids",
    template: "%s | ToyShop",
  },

  description:
    "ToyShop is your trusted online toy store offering educational toys, action figures, dolls, puzzles, remote control cars, and more for children of all ages.",

  keywords: [
    "toy shop",
    "online toy store",
    "kids toys",
    "educational toys",
    "baby toys",
    "action figures",
    "remote control cars",
    "puzzles",
    "board games",
    "toy ecommerce",
  ],

  authors: [{ name: "ToyShop Team" }],

  creator: "ToyShop",
  publisher: "ToyShop",

  openGraph: {
    title: "ToyShop - Premium Toys for Kids",
    description:
      "Discover a wide range of fun, safe, and educational toys for kids at ToyShop.",
    url: "https://your-domain.com",
    siteName: "ToyShop",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ToyShop",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ToyShop - Premium Toys for Kids",
    description:
      "Shop educational toys, action figures, puzzles, dolls, and more.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}