import React from 'react';

const getData = async (slug) => {
  const res = await fetch(
    `https://www.khanoumi.com/api/ntl/v1/products/slug/${slug}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const data = await res.json();
  return data.data;
};

export default async function ProductDetails({ params }) {
  const { productSlug } = await params;
  const product = await getData(productSlug);
  const {
    nameEn,
    mainImageUrl,
    images,
    brand,
    salesPrice,
    discountPrice,
    discountPercent,
    rate,
    commentsCount,
    addedToWishListCount,
    isSalable,
    isDiscontinued,
    variants,
    descriptionHtmlFa,
    weight,
    breadcrumb,
  } = product;

  const finalPrice = discountPrice > 0 ? discountPrice : salesPrice;
  const hasDiscount = discountPercent > 0;
  const formatPrice = (price) => `${(price / 10).toLocaleString('fa-IR')} Toman`;
  const allImages = [mainImageUrl, ...(images?.map((img) => img.imageUrl) || [])];
  const colorVariants = variants?.filter((v) => v.color) || [];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          {breadcrumb?.map((item, index) => (
            <React.Fragment key={item.id}>
              <span className="mx-1 text-gray-300">›</span>
              <span className="hover:text-blue-600 cursor-pointer">{item.nameFa}</span>
            </React.Fragment>
          ))}
          <span className="mx-1 text-gray-300">›</span>
          <span className="text-gray-800 font-medium truncate">{nameEn}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            <div>
              <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                <img
                  src={mainImageUrl}
                  alt={nameEn}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {hasDiscount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {discountPercent}% OFF
                  </div>
                )}
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {allImages.map((img, index) => (
                    <div
                      key={index}
                      className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-500 cursor-pointer transition-all duration-200 hover:shadow-md"
                    >
                      <img src={img} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <div className="text-sm text-blue-600 font-medium mb-1">{brand?.nameFa}</div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                {nameEn}
              </h1>
              <p className="text-sm text-gray-400 mt-1" dir="ltr">
                {nameEn}
              </p>

              <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{rate || '0'}</span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="hover:text-blue-600 cursor-pointer">{commentsCount} Reviews</span>
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

              <div className="mt-6">
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!isSalable || isDiscontinued}
                >
                  {isSalable && !isDiscontinued ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </span>
                  ) : (
                    'Out of Stock'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center gap-3 border-b pb-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800">📖 Product Description</h2>
          </div>
          {descriptionHtmlFa ? (
            <div
              className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pr-5 [&_li]:mb-1"
              dangerouslySetInnerHTML={{ __html: descriptionHtmlFa }}
            />
          ) : (
            <p className="text-gray-500">No description available.</p>
          )}
        </div>

        {product.videos && product.videos.length > 0 && (
          <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-4 mb-6">🎬 Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.videos.map((video, index) => (
                <video key={index} controls className="w-full rounded-xl shadow">
                  <source src={video} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}