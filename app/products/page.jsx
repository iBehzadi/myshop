import React from "react";
import ProductList from "@/components/ProductList";

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
  
  return <ProductList products={products} />;
}
