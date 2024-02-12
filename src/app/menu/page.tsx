import MainModalComponent from "@/app/components/pizza_delivery";
import DeliveryModal from "@/app/components/modal/delivery";
import Breadcrumb from "@/app/components/breadcrumb";
import Products from "@/app/components/products/products";

import Modal from "@/app/components/modal";
import OrderModal from "@/app/components/modal/order";
import Sidebar from "@/app/components/sidebar";
import "./menu.css";

async function getData() {
  try {
    const products = await Promise.all(
      new Array(8).fill(Number).map((_, idx) => {
        const form_data = new FormData();
        form_data.append("token", "16045200000000000000000006460190");
        form_data.append("group", `0${idx + 1}`);

        const requestOptions: any = {
          method: "POST",
          body: form_data,
          redirect: "follow",
        };

        return fetch("https://ginospizza.ca/app/api/menu/group/", {
          ...requestOptions,
        }).then((r) => r.json());
      })
    );

    const mapped_products = products.map((p, idx) =>
      Array.isArray(p.subgroup)
        ? { name: `Gourment Pizzas ${idx}`, items: p.subgroup }
        : p.subgroup
    );

    return { products: mapped_products, isLoggedIn: false };
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function Specials({ params }: any) {
  const { products, isLoggedIn } = await getData();
  const pro = products.map((f) => {
    if (f?.name === "Gourment Pizzas 1") {
      return {
        ...f,
        name: "Gourment Pizzas",
      };
    }
    if (f?.name === "Gourment Pizzas 5") {
      return {
        ...f,
        name: "Sides",
      };
    }

    return f;
  });

  const actives = [
    "specials",
    "gourment",
    "pizzas",
    "wings",
    "sides",
    "desserts",
    "panzerotti",
  ];

  return (
    <article>
      {!isLoggedIn && <Modal />}
      <Breadcrumb
        breadcrumb_items={[{ title: "Menu", href: "/menu/specials" }]}
      />
      <div className="container--slim--y container">
        <div className="flexrow">
          <div className="flexrow__column flexrow__column--content">
            <div className="flexrow__gutter bg-white">
              {products && (
                <Products
                  products={pro}
                  opened_dropdown_index={
                    actives.indexOf(params.product_type) || 0
                  }
                />
              )}
              <strong>
                <a href="/menu/" title="Set your location">
                  Set your location
                </a>
                to view item availability and pricing.
              </strong>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </article>
  );
}

export default Specials;
