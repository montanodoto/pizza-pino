import AuthModal from "@/app/components/auth_modal";
import Breadcrumb from "@/app/components/breadcrumb";
import Products from "@/app/components/products/products";
import Modal from "@/app/components/modal";
import DeliveryModalComponent from "@/app/components/delivery_modal";
import PickupModalComponent from "@/app/components/pickup_modal";
// import FutureOrderModalComponent from "@/app/components/future_order_modal";
import Select from "@/app/components/Select";

import DeliverySignInModal from "@/app/components/delivery_signin_modal";
import MainModalComponent from "@/app/components/pizza_delivery";
import { useCallback, useState } from "react";
import DeliveryModal from "@/app/components/main_modal_content";
import OrderModal from "@/app/components/main_modal_content/orders_modal";

import "./index.css";

async function getData() {
  const form_data = new FormData();
  form_data.append("token", "10284300000000000000000006412610");
  form_data.append("group", "01");

  const requestOptions: any = {
    method: "POST",
    body: form_data,
    redirect: "follow",
  };

  try {
    const products = await fetch("https://ginospizza.ca/app/api/menu/group/", {
      ...requestOptions,
    }).then((response) => response.json());

    return { products, isLoggedIn: false };
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function Specials() {
  const { products, isLoggedIn } = await getData();

  return (
    <article>
      {!isLoggedIn && (
        <MainModalComponent>
          <DeliveryModal />
        </MainModalComponent>
      )}
      <Breadcrumb title="Menu" href="/menu/" />
      <div className="container container--slim--y">
        <div className="flexrow">
          <div className="flexrow__column flexrow__column--content">
            <div className="flexrow__gutter bg-white">
              <Products products={products} />
              <strong>
                <a href="/menu/" title="Set your location">
                  Set your location
                </a>
                to view item availability and pricing.
              </strong>
            </div>
          </div>
          <div className="flexrow__column flexrow__column--sidebar">
            <div className="flexrow__gutter">
              <div className="flexrow__column--sidebar__backdrop">
                <div className="flexrow__gutter flexrow__gutter--double">
                  <header className="widget__header widget__header--icon widget__header--icon--cart">
                    Your Cart
                  </header>
                  <p className="text--center">
                    <em> Your cart is currently empty. </em>
                  </p>
                  <button
                    id="placeLastOrder"
                    className="button button--default button--block"
                    title="Repeat Last Order"
                    rel="lastOrderResponse"
                  >
                    <span className="button__icon button__icon--lastorder">
                      <span className="hidden--md hidden--lg">Repeat</span>
                      Last Order
                    </span>
                  </button>
                  <div
                    id="lastOrderResponse"
                    className="form__response form__response--slim--y form__response--slim--x form__response--slim--margin gutter--bottom--half"
                  ></div>
                </div>
              </div>
              <hr />
              <button
                id="resetOrderPreferences"
                className="button button--default button--block button--large radius--top--left radius--top--right radius--bottom--left radius--bottom--right title="
                rel="resetOrderResponse"
              >
                <span className="button__icon button__icon--settings">
                  Change Order
                </span>
              </button>
              <div
                id="resetOrderResponse"
                className="form__response form__response--slim--y form__response--slim--x form__response--slim--margin gutter--bottom--half"
              ></div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Specials;
