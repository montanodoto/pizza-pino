"use client";
import { useState } from "react";
import Dropdown from "../dropdown";

export default function PizzaContruction({ type }: any) {
  const [pizza_dropdown_idx, set_pizza_dropdown_idx] = useState(0);

  const onAddCart = (product_id: number, checkout_data) => {};

  return (
    <div className="flexrow__gutter">
      <h1 className="title title--large title--trim-bottom">{type}</h1>
      <h2 className="title title--large--subtitle">
        Item Description
        {/* 2 Small Pizzas with 2 Toppings on each &amp; 2 Dipping Sauces */}
      </h2>
      <hr />
      <ul
        className="accordion accordion--default"
        id="productAccordion"
        data-ft="4"
        data-tp="1.25"
      >
        <li className="accordion--default__item" rel="toppings2CD">
          <a
            href="#"
            title="Two Can Dine Special"
            rel="2cdContent"
            onClick={() => set_pizza_dropdown_idx(0)}
            className={`accordion--default__item__link ${
              pizza_dropdown_idx === 0 && "open"
            }`}
            id="2cdLink"
          >
            {type}
          </a>
          <Dropdown is_dipping_sauce={false} />
        </li>

        <li className="accordion--default__item open" rel="toppings2DIPB">
          <a
            href="#"
            title="2 Free Dipping Sauces"
            rel="2dipbContent"
            className={`accordion--default__item__link ${
              pizza_dropdown_idx === 1 && "open"
            }`}
            id="2dipbLink"
            onClick={() => set_pizza_dropdown_idx(1)}
          >
            Dipping Sauces
          </a>
          <Dropdown is_dipping_sauce={true} />
        </li>
      </ul>

      <hr />
      <p className="text--sm gutter--bottom--none">
        <em>
          Two Can Dine Special comes with a combined 4 free toppings. A $1.25
          charge will be added for each additional topping.
        </em>
      </p>
      <p className="text--sm gutter--bottom">
        <em>Toppings marked with ** beside them count as a 2 toppings. </em>
      </p>
      <div className="flexrow">
        <div className="flexrow__column flexrow__column--half">
          <div className="flexrow__gutter flexrow__gutter--slim-y">
            <div className="flexrow">
              <div className="flexrow__column flexrow__column--shrink flexrow__column--mobile-block">
                <div className="flexrow__gutter gutter--mobile-collapse">
                  <button
                    type="button"
                    id="addProduct"
                    className="button button--default"
                    data-qty="1"
                    data-cheese-modal="false"
                    onClick={onAddCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flexrow__column flexrow__column--mobile-block">
                <div className="flexrow__gutter gutter--mobile-collapse"></div>
              </div>
              <div className="flexrow__column flexrow__column--shrink flexrow__column--mobile-block">
                <div className="flexrow__gutter gutter--mobile-collapse">
                  <div className="card card--price">
                    <span>$</span>
                    <span id="priceTag">16.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/dist/img/loading.gif"
        alt="Loading…"
        className="loading hidden--always"
        id="productLoading"
        // style="display: block; margin-top: 15px"
      />
      <div
        className="form__response form__response--widget hidden--always"
        id="productResponse"
        // style="margin-top: 15px; margin-bottom: 0"
      ></div>
    </div>
  );
}
