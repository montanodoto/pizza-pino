import MainModalComponent from "@/app/components/pizza_delivery";
import DeliveryModal from "@/app/components/modal/delivery";
import Breadcrumb from "@/app/components/breadcrumb";
import Products from "@/app/components/products/products";

import "./index.css";
import Modal from "@/app/components/modal";
import OrderModal from "@/app/components/modal/order";
import Sidebar from "@/app/components/sidebar";

async function getData() {
  try {
    const products = await Promise.all(
      new Array(8).fill(Number).map((_, idx) => {
        const form_data = new FormData();
        form_data.append("token", "10284300000000000000000006412610");
        form_data.append("group", `0${idx + 1}`);

        const requestOptions: any = {
          method: "POST",
          body: form_data,
          redirect: "follow",
        };

        return fetch("https://ginospizza.ca/app/api/menu/group/", {
          ...requestOptions,
        }).then((r) => r.json());
      }),
    );

    const mapped_products = products.map((p) =>
      Array.isArray(p.subgroup)
        ? { name: "Gourment Pizzas", items: p.subgroup }
        : p.subgroup,
    );
    return { products: mapped_products, isLoggedIn: false };
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function Specials() {
  const { products, isLoggedIn } = await getData();
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
              {products && <Products products={products} />}
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
