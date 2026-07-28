"use client";
import React, { useMemo, useState } from "react";
import ProductCard from "@/app/products/productCard";

export default function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products;
    return products.filter((product) =>
      product.nameEn?.toLowerCase().includes(searchTerm.toLowerCase().trim()),
    );
  }, [products, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Products
      </h2>
      <hr />
      <div className="flex gap-10 items-center justify-center  rounded my-4">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="rounded border px-4 py-2 w-200 bg-gray-100 outline-0"
          placeholder="search products..."
          name=""
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
