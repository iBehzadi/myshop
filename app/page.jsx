import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    return data.data.products.items[33];
};

export default async function Home() {
    const { imageUrl } = await getData();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
            <section className="w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
                <div className="flex flex-col md:flex-row items-stretch">
                    {/* Left side — Text content */}
                    <div className="flex-1 px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16 flex flex-col justify-center order-2 md:order-1">
                        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full w-fit mb-4">
                            New Arrival
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
                            Welcome to <br className="hidden sm:block" />
                            <span className="text-indigo-600">My Shop</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-md mb-6">
                            Discover the latest products curated just for you.
                            Quality meets style — explore our collection today.
                        </p>
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center w-fit bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            Browse All Products
                            <svg
                                className="ml-2 w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Right side — Photo */}
                    <div className="flex-1 bg-indigo-50 flex items-center justify-center p-6 sm:p-8 md:p-10 order-1 md:order-2">
                        <div className="relative w-full max-w-sm aspect-square">
                            <Image
                                width={450}
                                height={450}
                                src={imageUrl}
                                alt="Featured product"
                                className="object-contain w-full h-full drop-shadow-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}