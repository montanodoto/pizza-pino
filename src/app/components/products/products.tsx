"use client";
import { Fragment, useMemo, useState } from "react";
import PriceCard from "../price_button/price_card";

import type { ProductProps } from "./types";

export default function Products({ products }: ProductProps) {
  const [active_dropdown_idx, set_active_dropdown_idx] = useState<number>();

  const products_list = useMemo(
    () =>
      products
        .map((product: any) => ({
          ...product,
          items: Array.isArray(product.items)
            ? product.items
            : product.items.item.map((i: any) => ({
                ...i,
                avail_sizes: i.avail_sizes
                  ? Object.values(i.avail_sizes)
                  : null,
              })),
          subgroup: Array.isArray(product.items) ? true : false,
        }))
        .map((product) => ({
          ...product,
          items: product.subgroup
            ? product.items.map((item: any) => ({
                ...item,
                items: item.items.item.map((i: any) => ({
                  ...i,
                  avail_sizes: i.avail_sizes
                    ? Object.values(i.avail_sizes)
                    : null,
                })),
              }))
            : product.items,
        }))
        .map((product) => ({
          ...product,
          avail_sizes: product.avail_sizes
            ? Object.values(product.avail_sizes)
            : null,
        })),
    [products],
  );

  console.log("products_list", products_list);
  return (
    <main className="bg-white text-gray-700">
      <div className="flex flex-wrap justify-between">
        <ul className="accordion accordion--menu">
          {products_list.map((p, idx) => (
            <li
              className="accordion--menu__item"
              key={idx}
              onClick={() => set_active_dropdown_idx(idx)}
            >
              <a
                title="Specials"
                rel="specialsContent"
                className={`accordion--menu__item__link accordion--menu__item__link--specials ${active_dropdown_idx === idx && "open"}`}
                id="specialsLink"
              >
                {p.name}
              </a>
              <ul
                id="specialsContent"
                className={`accordion--menu__item__content flexrow ${active_dropdown_idx === idx && "visible"}`}
                rel={`0${idx + 1}`}
              >
                {!p.subgroup
                  ? p.items?.map((item: any) => (
                      <Fragment key={item.product_id + item.name}>
                        <div className="w-full p-4 md:w-1/3">
                          <div className="max-w-sm overflow-hidden rounded shadow-lg">
                            <img className="w-full" src={`/${item.d_image}`} />
                            <div className="px-6 py-2">
                              <div className="mb-2 text-lg">
                                {item?.description}
                              </div>
                              {typeof item.long_desc === "string" && (
                                <p className="text-xs text-gray-700">
                                  {item.long_desc}
                                </p>
                              )}
                              <div className="flex">
                                {item.avail_sizes ? (
                                  item.avail_sizes.map(
                                    ({ product_id, size, price }: any) => (
                                      <PriceCard
                                        href={item.description}
                                        key={product_id}
                                        title={size.toUpperCase()}
                                        price={price}
                                      />
                                    ),
                                  )
                                ) : (
                                  <PriceCard
                                    href={item.description}
                                    title={"Buy Now"}
                                    price={item.price}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : p.items[0].items.map((item: any) => (
                      <Fragment key={item.product_id + item.name}>
                        <div className="w-full p-4 md:w-1/3">
                          <div className="max-w-sm overflow-hidden rounded shadow-lg">
                            <img className="w-full" src={`/${item.d_image}`} />
                            <div className="px-6 py-2">
                              <div className="mb-2 text-lg">
                                {item?.description}
                              </div>
                              {typeof item.long_desc === "string" && (
                                <p className="text-xs text-gray-700">
                                  {item.long_desc}
                                </p>
                              )}
                              <div className="flex">
                                {item.avail_sizes ? (
                                  item.avail_sizes.map(
                                    ({ product_id, size, price }: any) => (
                                      <PriceCard
                                        href={item.description}
                                        key={product_id}
                                        title={size.toUpperCase()}
                                        price={price}
                                      />
                                    ),
                                  )
                                ) : (
                                  <PriceCard
                                    title={"Buy Now"}
                                    href={item.description}
                                    price={item.price}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
