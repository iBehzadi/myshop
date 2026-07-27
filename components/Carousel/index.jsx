"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Carousel({ products }) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const currentProduct = products[current];
  const price = currentProduct.effectivePrice ?? currentProduct.basePrice;
  const hasDiscount =
    currentProduct.effectivePrice &&
    currentProduct.effectivePrice < currentProduct.basePrice;
  const router = useRouter();
  const slug = currentProduct.slug;
  const handleClick = () => {
    router.push(`/products/${slug}`);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % products.length);
        setFade(true); 
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <Card className="w-full max-w-6xl mx-auto overflow-hidden shadow-xl rounded-2xl border-0 transition-all duration-300 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white via-indigo-50/30 to-white order-2 md:order-1 relative">
          {hasDiscount && (
            <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              SALE
            </span>
          )}
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-100/80 px-3 py-1 rounded-full w-fit mb-4 backdrop-blur-sm">
            Featured Product
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
            {currentProduct.nameEn}
          </h3>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-2xl font-semibold text-indigo-700">
              ${(price / 195000).toFixed(2)}
            </p>
            {hasDiscount && (
              <p className="text-sm text-gray-400 line-through">
                ${(currentProduct.basePrice / 195000).toFixed(2)}
              </p>
            )}
          </div>
          <button
            onClick={handleClick}
            className="inline-flex items-center justify-center w-fit bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 text-sm group"
          >
            View Details
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 bg-gradient-to-br from-indigo-50 to-indigo-100/50 flex items-center justify-center p-6 md:p-8 order-1 md:order-2">
          <div className="relative w-full max-w-sm aspect-square transition-opacity duration-300 ease-in-out">
            {currentProduct.imageUrl && (
              <Image
                src={currentProduct.imageUrl}
                alt={currentProduct.nameEn || "Product"}
                fill
                className={`object-contain drop-shadow-lg transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
            )}
          </div>
        </div>
      </div>

      
    </Card>
  );
}
