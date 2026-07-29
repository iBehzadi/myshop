// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/components/StoreProvider";
import { Inter } from "next/font/google"; 

const inter = Inter({
  subsets: ["latin"], 
  display: "swap",   
  weight: ["400", "700"], 
});

export const metadata = {
  title: "Khanoumi Store",
  description: "a next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}> 
      <body className="min-h-full flex flex-col">
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}