'use client';

import { useState } from 'react';

export default function ProductGallery({ mainImage, images, nameEn, hasDiscount, discountPercent }) {
  const allImages = [mainImage, ...(images?.map((img) => img.imageUrl) || [])];
  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <div>
      <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-inner">
        <img
          src={selectedImage}
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
              className={`w-24 h-24 shrink-0 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                selectedImage === img ? 'border-blue-500' : 'border-gray-200'
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`تصویر ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}