import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Agency - Landing Page",
  description: "Building digital products, brands & experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
