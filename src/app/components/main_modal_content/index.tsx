"use client";
import { useCallback, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select from "@/app/components/Select";
import { PrimaryButton, SecondaryButton } from "./button";
import cities_list from "./cities.json";

type Stores = { value: string; label: string }[];

export default function DeliveryModal() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modal_type, set_modal_type] = useState("delivery");
  const [delivery_selection, set_delivery_selection] = useState("");
  const [selected_address, set_selected_address] = useState("");
  const delivery_address = [
    { value: "123 Main St", label: "123 Main St" },
    // Add other addresses here
  ];

  const [selected_city, set_selected_city] = useState("");
  const [selected_store, set_selected_store] = useState("");
  const cities = useMemo(
    () => cities_list.map((c) => ({ value: c, label: c })),
    []
  );
  const [stores, set_stores] = useState<Stores>([]);

  const is_pickup_disabled = !(selected_city && selected_store);

  const is_delivery_disabled = !selected_address;

  const on_delivery_click = useCallback(
    () => set_delivery_selection("delivery"),
    []
  );
  const on_pickup_click = useCallback(
    () => set_delivery_selection("pickup"),
    []
  );

  const on_delivery_continue = useCallback(() => {
    if (!is_delivery_disabled) {
    }
  }, [is_delivery_disabled]);

  const on_pickup_continue = useCallback(() => {
    if (!is_pickup_disabled) {
      set_modal_type("order");
      set_delivery_selection("");
    }
  }, [is_pickup_disabled]);

  const get_available_stores = useCallback(
    async (selected_city: string) => {
      try {
        const form_date = new FormData();
        form_date.append("city", selected_city);

        const fetch_response = await fetch(
          "https://ginospizza.ca/app/api/stores/stores.php",
          {
            method: "POST",
            body: form_date,
          }
        );

        const {
          city: { store },
        } = await fetch_response.json();

        if (Array.isArray(store)) {
          console.log("Array.isArray(store)", stores);
          const store_list = store.map((s) => ({
            value: s.address,
            label: s.address,
          }));

          set_stores(store_list);
        } else {
          const { address, ...store_info } = store;
          console.log("Object", stores);
          set_stores([{ value: address, label: address }]);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [stores]
  );

  const select_available_city = useCallback(
    async (city: string) => {
      set_selected_city(city);
      await get_available_stores(city);
    },
    [get_available_stores]
  );

  const stick_to_right = delivery_selection !== "pickup" ? "" : "ml-auto m-2";

  const on_future_order_continue = useCallback(() => {
    const is_future_order_ready = false;

    if (!is_future_order_ready) {
    }
  }, []);

  const on_order_click = useCallback(() => {}, []);

  const on_future_order_click = useCallback(
    () => set_modal_type("future_order"),
    []
  );

  const is_delivery_modal = modal_type === "delivery";

  const on_delivery_or_order_click = is_delivery_modal
    ? on_delivery_click
    : on_future_order_click;
  const on_pickup_or_order_click = is_delivery_modal
    ? on_pickup_click
    : on_order_click;

  const delivery_titles = is_delivery_modal ? "DELIVERY" : "ORDER NOW";

  const order_titles = is_delivery_modal ? "PICKUP" : "FUTURE ORDER";

  return (
    <div className="flex-column w-full">
      <PrimaryButton
        on_click={on_delivery_or_order_click}
        title={delivery_titles}
      />
      <PrimaryButton on_click={on_pickup_or_order_click} title={order_titles} />
      <div className={`w-[525px]`}>
        {is_delivery_modal ? (
          <>
            {delivery_selection === "delivery" && (
              <>
                <Select
                  options={delivery_address}
                  placeholder="Select a Delivery Address"
                  value={selected_address}
                  onChange={get_available_stores}
                />
                <SecondaryButton on_click={on_delivery_continue} />
              </>
            )}

            {delivery_selection === "pickup" && (
              <>
                <div className="flex">
                  <Select
                    options={cities}
                    placeholder="Select a City"
                    value={selected_city}
                    onChange={select_available_city}
                  />
                  <Select
                    options={stores}
                    placeholder="Select a Store"
                    value={selected_store}
                    onChange={set_selected_store}
                  />
                </div>
                <SecondaryButton on_click={on_pickup_continue} />
              </>
            )}
          </>
        ) : (
          <>
            {modal_type === "order" && (
              <>
                <p>
                  Place an order for
                  <strong>Sunday, January 28th at 1:07 PM</strong>
                </p>
                <SecondaryButton on_click={on_delivery_continue} />
              </>
            )}
            {modal_type === "future_order" && (
              <div className="flex flex-col items-center justify-center p-4">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: any) => setSelectedDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  className="border border-gray-300 rounded p-2 text-center"
                />
                <SecondaryButton on_click={on_future_order_continue} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
