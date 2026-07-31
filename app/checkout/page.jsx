"use client";
import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { addItem, removeItem, clear } from "@/Store/Slices/cartSlice";

export default function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const tableRows = useMemo(
    () =>
      cartItems.map((item, index) => {
        const price =
          item.discountPrice > 0 ? item.discountPrice : item.salesPrice;
        const itemTotal = price * item.cartQuantity;

        return (
          <tr
            key={item.id}
            className="border-b border-gray-100 hover:bg-gray-50 transition"
          >
            <td className="px-4 py-4 text-center text-gray-600">{index + 1}</td>
            <td className="px-4 py-4 text-gray-800 font-medium">
              {item.nameEn}
            </td>
            <td className="px-4 py-4 text-center">
              <div className="relative w-16 h-16 mx-auto">
                <Image
                  src={item.mainImageUrl}
                  alt={item.nameEn}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </td>
            <td className="px-4 py-4 text-center text-gray-700">
              ${price.toFixed(2)}
            </td>
            <td className="px-4 py-4 text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-gray-700 font-semibold">
                {item.cartQuantity}
              </span>
            </td>
            <td className="px-4 py-4 text-center font-semibold text-gray-800">
              ${itemTotal.toFixed(2)}
            </td>
            <td className="px-4 py-4 text-center">
              <div className="flex items-center justify-center gap-2">
                {/* Increase quantity */}
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="w-9 h-9 rounded-full bg-green-500 text-white text-lg font-bold hover:bg-green-600 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center"
                >
                  +
                </button>
                {/* Decrease quantity (remove one) */}
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="w-9 h-9 rounded-full bg-yellow-500 text-white text-lg font-bold hover:bg-yellow-600 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center"
                >
                  −
                </button>
                {/* You can add a "remove entirely" button here if you define a new action */}
              </div>
            </td>
          </tr>
        );
      }),
    [cartItems, dispatch]
  );

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800">
            Your Cart is Empty
          </h2>
          <p className="mt-2 text-gray-500">
            Add some items you love to your cart.
          </p>
          <a
            href="/"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Shop
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with clear cart button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">🛍️ Shopping Cart</h1>
          <button
            onClick={() => dispatch(clear())}
            className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-xl hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span className="text-lg">🗑️</span>
            Clear Cart
          </button>
        </div>

        {/* Main card / table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider rounded-tl-2xl">
                    #
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Unit Price
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Qty
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider rounded-tr-2xl">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">{tableRows}</tbody>
              <tfoot className="bg-gray-50 border-t border-gray-200">
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-4 text-right text-lg font-bold text-gray-800"
                  >
                    Grand Total
                  </td>
                  <td className="px-4 py-4 text-center text-xl font-bold text-blue-600">
                    ${totalPrice.toFixed(2)}
                  </td>
                  <td className="px-4 py-4"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Proceed button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
            Proceed to Checkout
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}