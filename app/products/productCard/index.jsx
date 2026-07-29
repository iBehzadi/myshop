"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }) => {
  const {
    nameFa,
    nameEn,
    hasStock,
    imageUrl,
    basePrice,
    brand,
    flags,
    discountPrice,
    discountPercent,
    effectivePrice,
    colorsCount,
    slug,
  } = product;
  const router = useRouter();
  const isDiscounted = discountPercent > 0 && discountPrice > 0;
  const toToman = (price) => price / 10;
  const formatPrice = (price) =>
    `${toToman(price).toLocaleString("fa-IR")} Toman`;
  const handleClick = () => {
    router.push(`/products/${slug}`);
  };

  return (
    <a
      onClick={handleClick}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative aspect-square bg-gray-50">
        <img
          src={imageUrl}
          alt={nameFa}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {flags === "New" && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            New
          </span>
        )}

        {colorsCount > 1 && (
          <span className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm text-gray-700 text-xs px-2.5 py-1 rounded-full shadow">
            {colorsCount} Colors
          </span>
        )}

        {!hasStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white/90 text-red-600 font-bold px-4 py-1.5 rounded-full text-sm shadow">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">
          {nameEn}
        </h3>
        <p className="text-xs text-gray-400 line-clamp-1" dir="ltr">
          {nameEn}
        </p>
        <p className="text-xs text-gray-500">{brand.nameEn}</p>

        <div className="flex items-center justify-between pt-1 border-t border-gray-100">
          <div className="flex flex-col">
            {isDiscounted ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-red-600">
                    {formatPrice(discountPrice)}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    {formatPrice(basePrice)}
                  </span>
                </div>
                <span className="text-xs text-red-500">
                  {discountPercent}% Off
                </span>
              </>
            ) : (
              <span className="text-base font-bold text-gray-800">
                {formatPrice(effectivePrice)}
              </span>
            )}
          </div>

          <div className="text-xs font-medium">
            {hasStock ? (
              <span className="text-green-600">✓ In Stock</span>
            ) : (
              <span className="text-red-500">✗ Out of Stock</span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
