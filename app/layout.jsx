import React from "react";
import '@/assets/styles/globals.css';
import '@fontsource/inter/400.css'; // Regular weight
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pakistan Textile News",
  description: "Keep Up to Date With The Latest Textile News",
  keywords:
    "textile, news, pakistan, Pakistan textile industry news, Textile news Pakistan, Pakistan textile sector updates, Textile market trends 2024, Global textile trade updates, Pakistan garment industry news, Pakistan textile exports, Textile manufacturing in Pakistan, Sustainable textiles Pakistan, Textile regulations Pakistan, Texpo Karachi 2024, Heimtextil Frankfurt 2025, Pakistan textile exhibitions, International textile fairs 2024, Pakistani textile companies at global expos, Sustainable textiles Pakistan, Circular economy in textiles, Textile plastic pollution solutions, Eco-friendly textile practices, Textile waste management Pakistan, Textile exports growth FY24, Pakistan textile market trends, Textile industry economic impact, Global textile trade relations, Pakistan textile sector statistics, Textile plastic waste reduction, Textile product regulations Punjab, Textile policy news, New technology in textile production",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
