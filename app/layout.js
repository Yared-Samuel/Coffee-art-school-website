import { Inter, Teko, Lato, Allura } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const allura = Allura({ subsets: ["latin"], weight: ["400"], variable: "--font-allura" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "300","700","900"], variable: "--font-lato" });
const teko = Teko({ subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko" });

export const metadata = {
  title: "BZN",
  description: "School Of Barista And Baking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={teko.variable + " " + lato.variable + " " + allura.variable}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
