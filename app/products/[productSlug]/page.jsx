import ProductActions from "@/components/ProductActions";
import ProductGallery from "@/components/ProductGalley";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(
    `https://www.khanoumi.com/api/ntl/v1/products/slug/${slug}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return data.data;
};

export default async function ProductDetails({ params }) {
  const { productSlug } = await params;
  const product = await getData(productSlug);
  // استخراج داده‌های مورد نیاز
  const {
    id,
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

  const hasDiscount = discountPercent > 0;
 
  const colorVariants = variants?.filter((v) => v.color) || [];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* مسیر راهنما (Breadcrumb) */}
        <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          {breadcrumb?.map((item, index) => (
            <React.Fragment key={item.id}>
              <span className="mx-1 text-gray-300">›</span>
              <span className="hover:text-blue-600 cursor-pointer">
                {item.nameFa}
              </span>
            </React.Fragment>
          ))}
          <span className="mx-1 text-gray-300">›</span>
          <span className="text-gray-800 font-medium truncate">{nameEn}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* گالری تصاویر (بدون تغییر) */}
            <ProductGallery
              key={mainImageUrl}
              mainImage={mainImageUrl}
              images={images}
              nameEn={nameEn}
              hasDiscount={hasDiscount}
              discountPercent={discountPercent}
            />

            {/* بخش اطلاعات و دکمه‌ها - کامپوننت کلاینت */}
            <ProductActions
              product={product}
              hasDiscount={hasDiscount}
              colorVariants={colorVariants}
              isSalable={isSalable}
              isDiscontinued={isDiscontinued}
            />
          </div>
        </div>

        {/* توضیحات و ویدیوها (بدون تغییر) */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center gap-3 border-b pb-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              📖 Product Description
            </h2>
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
            <h2 className="text-xl font-bold text-gray-800 border-b pb-4 mb-6">
              🎬 Videos
            </h2>
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