"use client";

import { useState } from "react";

function Products({
  products: initial_products,
}: {
  products: { subgroup: Record<string, any> };
}) {
  const [products, setProducts] = useState(initial_products.subgroup);

  return (
    <>
      <ul className="accordion accordion--menu">
        {products.map((p: any, idx: number) => (
          <li className="accordion--menu__item" key={idx}>
            <a
              href="/menu/specials"
              title="Specials"
              rel="specialsContent"
              className="accordion--menu__item__link accordion--menu__item__link--specials open"
              id="specialsLink"
            >
              Specials
            </a>
            <ul
              id="specialsContent"
              className="accordion--menu__item__content flexrow visible"
              rel="01"
            >
              {/* {products.map((p: any) => (
              <li
                className="flexrow__column flexrow__column--menu"
                key={p.product_id}
              >
                <span className="flexrow__gutter">
                  <span className="card card--menu">
                    <span className="card__column card__column--menu-image">
                      <span className="card__gutter card__gutter--menu">
                        <img
                          src="/dist/img/products/2CD.png"
                          title="Two Can Dine Special"
                        />
                      </span>
                    </span>
                    <span className="card__column card__column--menu-details">
                      <span className="card__gutter card__gutter--menu">
                        <span>
                          <span
                            className="title title--menu"
                            title="Two Can Dine Special"
                          >
                            {p.description}
                          </span>
                          <span className="card__column--menu-details__description">
                            {p.long_desc}
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="card__column card__column--menu-controls">
                      <span className="card__gutter card__gutter--menu">
                        <span>
                          <span className="card__column--menu-controls__sizes">
                            <span className="card__column card__column--menu-controls__sizes__size">
                              <span className="card__gutter card__gutter--menu card__gutter--menu--sizes">
                                <span
                                  className="menu-trigger card__column--menu-controls__sizes__link caps"
                                  rel="2CD"
                                  title="Order Now"
                                >
                                  <span>Order Now</span>
                                  <strong className="card__column--menu-controls__sizes__link__price">
                                    ${p.price}
                                  </strong>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
            ))} */}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
