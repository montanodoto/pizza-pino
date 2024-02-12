"use client";

import { useCallback, useState } from "react";
import Select from "../../Select";
import { SecondaryButton } from "../button";

type PickupModalContentProps = {
  on_continue: (props: { selected_address: string }) => void;
  modal_type: string;
};

type Stores = { value: string; label: string }[];

export default function DeliveryContent({
  on_continue,
  modal_type,
}: PickupModalContentProps) {
  const delivery_address = [{ value: "123 Main St", label: "123 Main St" }];
  const [selected_address, set_selected_address] = useState("");

  const [stores, set_stores] = useState<Stores>([]);

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
          },
        );

        const {
          city: { store },
        } = await fetch_response.json();

        if (Array.isArray(store)) {
          const store_list = store.map((s) => ({
            value: s.address,
            label: s.address,
          }));

          set_stores(store_list);
        } else {
          const { address, ...store_info } = store;
          set_stores([{ value: address, label: address }]);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [stores],
  );

  return modal_type === "delivery" ? (
    <>
      <Select
        options={delivery_address}
        placeholder="Select a Delivery Address"
        value={selected_address}
        onChange={get_available_stores}
      />
      <SecondaryButton on_click={on_continue} />
    </>
  ) : (
    <></>
  );
}
