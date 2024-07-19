import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tired of wasting energy of website design ? - Boilerplate",
  description: "Tired of the hassle of spending hours on CSS and JS ? Use this as your project's base website design and customise away at your own will",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
