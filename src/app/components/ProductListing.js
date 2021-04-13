import React from "react";
import "./ProductCard";
import ProductCard from "./ProductCard";

function ProductListing() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 py-20">
        <ProductCard
            title="Azure Lane - Kisaragi"
        desc="Cute anthropomorphic Battleship!"
        img="https://img-9gag-fun.9cache.com/photo/ajNPAL8_700bwp.webp"
        price="$10,999"
        />
        <ProductCard 
            title="Bane of All Evil - Xiao"
            desc="Pogo Stick Simulator"
            img="https://img.gamerjournalist.com/spai/w_728+q_lossy+ret_img+to_webp/https://cdn.gamerjournalist.com/primary/2021/02/Best-Xiao-Build-in-Genshin-Impact.jpg"
            price="$1,545,435,453"
        />
        <ProductCard 
            title="Dangerous Telolist - Klee"
            desc="Dangerous Superseapon of Mondstadt"
            img="https://i.pinimg.com/originals/d8/4e/01/d84e01ed4ea91fc0e2843a329d7ec0ac.jpg"
            price="180 Wishes"
        />
        <ProductCard 
            title="Prankster - Hu Tao"
            desc="Funeral Services"
            img="https://danbooru.donmai.us/data/sample/b1/76/sample-b176925e32d7190378499c2bb316a8a9.jpg"
            price="1 Qiqi"
        />
        <ProductCard 
            title="Cute Zombie - Qiqi"
            desc="Immortal"
            img="https://i.pinimg.com/736x/b2/a1/19/b2a11927c4e9f53cc94a0ce9fbd5721c.jpg"
            price="Cocomilk"
        />
        {[...Array(10)].map((x, i) =>
        <ProductCard
            title="lorem ipsum dolor"
            desc={i}   
            img="https://via.placeholder.com/350x150"
            price="$0"
        />
        )}
    </div>
  );
}

export default ProductListing;
