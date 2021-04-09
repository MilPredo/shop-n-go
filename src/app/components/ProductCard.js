import React from "react";

function ProductCard(props) {
  return (
  <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
    <div class="px-4 py-2">
      <h1 class="text-gray-900 font-bold text-3xl uppercase">NIKE AIR</h1>
      <p class="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
    </div>
    <img class="h-56 w-full object-cover mt-2" src="https://img-9gag-fun.9cache.com/photo/ajNPAL8_700bwp.webp" alt="NIKE AIR" />
    <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
      <h1 class="text-gray-200 font-bold text-xl">$129</h1>
      <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to card</button>
    </div>
  </div>
  );
}
export default ProductCard;
