"use client";

import { useState } from "react";

function Products({
  products: initial_products,
}: {
  products: { subgroup: Record<string, any> };
}) {
  const [
    {
      items: { item: products },
      ...rest
    },
    setProducts,
  ] = useState(initial_products.subgroup);

  console.log(products);
  return (
    <>
      <ul className="accordion accordion--menu">
        <li className="accordion--menu__item">
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
            {products.map((p: any) => (
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
            ))}
          </ul>
        </li>
        <li className="accordion--menu__item">
          <a
            href="/menu/gourmetpizzas"
            title="Gourmet Pizzas"
            rel="gourmetpizzasContent"
            className="accordion--menu__item__link accordion--menu__item__link--gourmetpizzas"
            id="gourmetpizzasLink"
          >
            Gourmet Pizzas
          </a>
          <ul
            id="gourmetpizzasContent"
            className="accordion--menu__item__content flexrow"
            rel="02"
          >
            <li className="flexrow__column flexrow__column--menu">
              <span className="flexrow__gutter flexrow__gutter--no-border flexrow__gutter--slim-y">
                <img
                  src="/dist/img/loading.gif"
                  alt="Loading…"
                  className="loading"
                />
              </span>
            </li>
          </ul>
        </li>
        <li className="accordion--menu__item">
          <a
            href="/menu/pizzas"
            title="Pizzas"
            rel="pizzasContent"
            className="accordion--menu__item__link accordion--menu__item__link--pizzas"
            id="pizzasLink"
          >
            Pizzas
          </a>
          <ul
            id="pizzasContent"
            className="accordion--menu__item__content flexrow"
            rel="03"
          >
            <li className="flexrow__column flexrow__column--menu">
              <span className="flexrow__gutter flexrow__gutter--no-border flexrow__gutter--slim-y">
                <img
                  src="/dist/img/loading.gif"
                  alt="Loading…"
                  className="loading"
                />
              </span>
            </li>
          </ul>
        </li>
        <li className="accordion--menu__item">
          <a
            href="/menu/wings"
            title="Wings"
            rel="wingsContent"
            className="accordion--menu__item__link accordion--menu__item__link--wings"
            id="wingsLink"
          >
            Wings
          </a>
          <ul
            id="wingsContent"
            className="accordion--menu__item__content flexrow"
            rel="04"
          >
            <li className="flexrow__column flexrow__column--menu">
              <span className="flexrow__gutter flexrow__gutter--no-border flexrow__gutter--slim-y">
                <img
                  src="/dist/img/loading.gif"
                  alt="Loading…"
                  className="loading"
                />
              </span>
            </li>
          </ul>
        </li>
        <li className="accordion--menu__item">
          <a
            href="/menu/sides"
            title="Sides"
            rel="sidesContent"
            className="accordion--menu__item__link accordion--menu__item__link--sides"
            id="sidesLink"
          >
            Sides
          </a>
          <ul
            id="sidesContent"
            className="accordion--menu__item__content flexrow"
            rel="05"
          >
            <li className="flexrow__column flexrow__column--menu">
              <span className="flexrow__gutter flexrow__gutter--no-border flexrow__gutter--slim-y">
                <img
                  src="/dist/img/loading.gif"
                  alt="Loading…"
                  className="loading"
                />
              </span>
            </li>
          </ul>
        </li>
        <li className="accordion--menu__item">
          <a
            href="/menu/beverages"
            title="Beverages"
            rel="beveragesContent"
            className="accordion--menu__item__link accordion--menu__item__link--beverages"
            id="beveragesLink"
          >
            Beverages
          </a>
          <ul
            id="beveragesContent"
            className="accordion--menu__item__content flexrow"
            rel="06"
          >
            <li className="flexrow__column flexrow__column--menu">
              <span className="flexrow__gutter flexrow__gutter--no-border flexrow__gutter--slim-y">
                <img
                  src="/dist/img/loading.gif"
                  alt="Loading…"
                  className="loading"
                />
              </span>
            </li>
          </ul>
        </li>
        <li className="accordion--menu__item">
          <a
            href="/menu/desserts"
            title="Desserts"
            rel="dessertsContent"
            className="accordion--menu__item__link accordion--menu__item__link--desserts"
            id="dessertsLink"
          >
            Desserts
          </a>
          <ul
            id="dessertsContent"
            className="accordion--menu__item__content flexrow"
            rel="07"
          >
            <li className="flexrow__column flexrow__column--menu">
              <span className="flexrow__gutter flexrow__gutter--no-border flexrow__gutter--slim-y">
                <img
                  src="/dist/img/loading.gif"
                  alt="Loading…"
                  className="loading"
                />
              </span>
            </li>
          </ul>
        </li>
        <li className="accordion--menu__item">
          <a
            href="/menu/panzerotti"
            title="Panzerotti"
            rel="panzerottiContent"
            className="accordion--menu__item__link accordion--menu__item__link--panzerotti"
            id="panzerottiLink"
          >
            Panzerotti
          </a>
          <ul
            id="panzerottiContent"
            className="accordion--menu__item__content flexrow"
            rel="08"
          >
            <li className="flexrow__column flexrow__column--menu">
              <span className="flexrow__gutter flexrow__gutter--no-border flexrow__gutter--slim-y">
                <img
                  src="/dist/img/loading.gif"
                  alt="Loading…"
                  className="loading"
                />
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Products;
