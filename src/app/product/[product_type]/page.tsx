import Breadcrumb from "@/app/components/breadcrumb";
import PizzaContruction from "./components/pizza_construction";
import Sidebar from "@/app/components/sidebar";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="container--slim--y container">
      <Breadcrumb
        breadcrumb_items={[
          { title: "Menu", href: "/product/" },
          { title: decodeURIComponent((params as any).product_type), href: "" },
        ]}
      />
      <div className="flexrow">
        <div className="flexrow__column flexrow__column--content">
          <div className="flexrow__gutter">
            <div className="flexrow__column--content__backdrop">
              {(params as any).product_type && (
                <PizzaContruction
                  type={decodeURIComponent((params as any).product_type)}
                />
              )}
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
