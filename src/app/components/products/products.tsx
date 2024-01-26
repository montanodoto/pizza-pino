"use client";
// pages/index.js or src/pages/index.js
import ProductItem from "@/app/components/products/product_item"; // adjust the path according to your project structure
import PriceButton from "../price_button";
import { useMemo } from "react";
import PriceCard from "../price_button/price_card";

type ProductItem = {
  calorie_text: { line: any };
  d_image: string;
  description: string;
  dm_image: {};
  free_items: string;
  long_desc: string;
  m_image: {};
  price: string;
  product_id: string;
  tag: {};
  topping_price: string;
  avail_sizes: {
    description: string;
    free_items: string;
    long_desc: string;
    price: string;
    product_id: string;
    size: string;
    topping_price: string;
  }[];
};

type ProductProps = {
  products: {
    subgroup: {
      name: string;
      d_image: string;
      m_image: string;
      items: { item: ProductItem[] };
    };
  };
};

export default function Home({
  products: {
    subgroup: {
      items: { item: items },
    },
  },
}: ProductProps) {
  const product_items = useMemo(
    () =>
      items.map((item) =>
        item.avail_sizes
          ? { ...item, avail_sizes: Object.values(item.avail_sizes) }
          : { ...item }
      ),
    [items]
  );

  console.log(product_items);
  return (
    <main className="bg-white text-gray-700">
      <div className="flex flex-wrap justify-between">
        {product_items?.map((item) => (
          <>
            <div className="w-full md:w-1/3 p-4">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={`/${item.d_image}`} />
                <div className="px-6 py-2">
                  <div className="text-lg mb-2">{item.description}</div>
                  <p className="text-gray-700 text-xs">{item.long_desc}</p>
                  <div className="flex">
                    {item.avail_sizes ? (
                      item.avail_sizes.map(({ product_id, size, price }) => (
                        <PriceCard
                          key={product_id}
                          title={size.toUpperCase()}
                          price={price}
                        />
                      ))
                    ) : (
                      <PriceCard title={"Buy Now"} price={item.price} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex justify-center items-center space-x-1">
              {item?.avail_sizes?.map?.((size) => (
                <PriceCard
                  key={size.product_id}
                  size={size.size.toUpperCase()}
                  price={size.price}
                />
              )) || <PriceCard key={item.product_id} price={item.price} />}
            </div> */}
          </>
        ))}
      </div>
    </main>
  );
}
