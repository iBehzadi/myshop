"use client";

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/Store/Slices/cartSlice"; 

export default function ProductActions({
  product,
  hasDiscount,
  colorVariants,
  isSalable,
  isDiscontinued,
}) {
  const dispatch = useDispatch();
  const formatPrice = (price) =>
    `${(price / 10).toLocaleString()} Toman`;
  const cartQuantity =
    useSelector(
      (state) =>
        state.cart.items?.find((item) => item.id === product.id)?.cartQuantity,
    ) || 0;

  const {
    nameEn,
    brand,
    salesPrice,
    discountPrice,
    discountPercent,
    rate,
    commentsCount,
    addedToWishListCount,
    weight,
  } = product;

  const finalPrice = discountPrice > 0 ? discountPrice : salesPrice;

  return (
    <div className="flex flex-col">
      <div className="text-sm text-blue-600 font-medium mb-1">
        {brand?.nameFa}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
        {nameEn}
      </h1>
      <p className="text-sm text-gray-400 mt-1" dir="ltr">
        {nameEn}
      </p>

      <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
          <span className="text-yellow-500">★</span>
          <span className="font-medium">{rate || "0"}</span>
        </div>
        <span className="text-gray-300">|</span>
        <span className="hover:text-blue-600 cursor-pointer">
          {commentsCount} Reviews
        </span>
        <span className="text-gray-300">|</span>
        <span className="hover:text-red-500 cursor-pointer flex items-center gap-1">
          <span>❤️</span> {addedToWishListCount}
        </span>
      </div>

      <div className="mt-4 bg-gray-50 p-4 rounded-xl">
        {hasDiscount ? (
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-3xl font-bold text-red-600">
              {formatPrice(discountPrice)}
            </span>
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(salesPrice)}
            </span>
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              {discountPercent}%
            </span>
          </div>
        ) : (
          <span className="text-3xl font-bold text-gray-800">
            {formatPrice(finalPrice)}
          </span>
        )}
      </div>

      <div className="mt-4">
        {isSalable && !isDiscontinued ? (
          <div className="flex items-center gap-2 text-green-700 bg-green-50 px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">In Stock</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-red-700 bg-red-50 px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-sm font-medium">Out of Stock</span>
          </div>
        )}
      </div>

      {colorVariants.length > 0 && (
        <div className="mt-4">
          <span className="text-sm font-medium text-gray-700">Colors:</span>
          <div className="flex flex-wrap gap-3 mt-2">
            {colorVariants.map((variant) => (
              <div
                key={variant.id}
                className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 hover:border-blue-500 cursor-pointer transition-all hover:shadow-sm bg-white"
              >
                {variant.color.imageUrl && (
                  <img
                    src={variant.color.imageUrl}
                    alt={variant.color.name}
                    className="w-6 h-6 rounded-full object-cover border border-gray-200"
                  />
                )}
                <span className="text-sm">{variant.color.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {weight && weight.packageWeight > 0 && (
        <div className="mt-3 text-sm text-gray-500">
          Package Weight: {weight.packageWeight} {weight.unit}
        </div>
      )}

      <div className=" pt-4 flex items-center justify-center gap-4">
        {cartQuantity > 0 ? (
          <>
            <button
              onClick={() => dispatch(removeItem(product.id))}
              className="bg-red-500 text-white px-5 py-3 rounded-xl"
            >
              -
            </button>
            <span className="text-2xl text-gray-500">{cartQuantity}</span>
            <button
              onClick={() => dispatch(addItem(product))}
              className="bg-green-500 text-white px-5 py-3 rounded-xl"
            >
              +
            </button>
          </>
        ) : (
          <button
            onClick={() => dispatch(addItem(product))}
            className="bg-cyan-500 text-white px-5 py-3 rounded-xl w-full"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}
