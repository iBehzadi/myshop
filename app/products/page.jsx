
import React from "react";
import ProductCard from "./productCard";

const getData = async () => {
  const res = await fetch(
    "https://www.khanoumi.com/api/ntl/v1/products?cat_id=195&analytics_tag=CategoryPLP&page_size=72&ut=f275c869-9b2c-4476-8a52-8cbd54ec14ba",
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  const data = await res.json();
  return data.data.products.items;
};

export default async function Products() {
  const products = await getData();
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Products
      </h2>
      <hr />
      <div className="flex gap-10 items-center justify-center  rounded my-4">
        <input
          type="text"
          className="rounded border px-4 py-2 w-200 bg-gray-100 outline-0"
          placeholder="search products..."
          name=""
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}
