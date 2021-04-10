import React from "react";

function ProductCard(props) {
  return (
    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
      <div class="px-4 py-2 bg-gray-200">
        <h1 class="truncate overflow-ellipsis text-gray-900 font-bold text-3xl uppercase">
          {props.title}
        </h1>
        <p class="text-gray-600 text-sm mt-1">{props.desc}</p>
      </div>
      <div class="flex items-end justify-end h-56 w-full bg-cover" style={{
        backgroundImage: `url(${props.img})`,
        backgroundPosition: `center`
        }} >
      </div>
      <div class="flex justify-between px-5 py-3 bg-gray-900">
        <h1 class="text-gray-200 font-bold text-xl">{props.price}</h1>
        <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
/*
function ProductCard(props) {
  return (
    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-gray-200">
      <div class="px-4 py-2 bg-gray-200">
        <h1 class="text-gray-900 font-bold text-3xl uppercase">
          {props.title}
        </h1>
        <p class="text-gray-600 text-sm mt-1">{props.desc}</p>
      </div>
      <img
        class="flex items-end justify-end h-56 w-full bg-cover"
        src={props.img}
        alt={props.title}
      />
      <div class="flex justify-between px-4 py-2 bg-gray-900">
        <h1 class="text-gray-200 font-bold text-xl">{props.price}</h1>
        <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
}
*/
export default ProductCard;
