import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/header";
import { CartContextProvider } from "@/contexts/Cart";
import "swiper/css";
import "swiper/css/navigation";

const inter = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakers E-commerce",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " px-24 py-10"}>
        <CartContextProvider>
          <Header />
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
