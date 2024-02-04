"use client";

import { useCallback, useMemo, useState } from "react";
import Select from "../../Select";
import { SecondaryButton } from "../button";
import cities_list from "../cities.json";

type PickupModalContentProps = {
  on_continue: (props: {
    selected_city: string;
    selected_store: string;
  }) => void;
  modal_type: string;
};

type Stores = { value: string; label: string }[];

export default function PickupContent({
  on_continue,
  modal_type,
}: PickupModalContentProps) {
  const [selected_city, set_city] = useState("");
  const [stores, set_stores] = useState<Stores>([]);
  const [selected_store, set_selected_store] = useState("");

  const cities = useMemo(
    () => cities_list.map((c) => ({ value: c, label: c })),
    [],
  );

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
    [stores],
  );

  const handle_city_select = useCallback(
    async (city: string) => {
      set_city(city);
      await get_available_stores(city);
    },
    [get_available_stores],
  );

  const handle_continue_click = useCallback(
    () => on_continue({ selected_city, selected_store }),
    [on_continue, selected_city, selected_store],
  );
  return modal_type === "pickup" ? (
    <>
      <div className="flex justify-between gap-1">
        <Select
          options={cities}
          placeholder="Select a City"
          value={selected_city}
          onChange={handle_city_select}
        />
        <Select
          options={stores}
          placeholder="Select a Store"
          value={selected_store}
          onChange={set_selected_store}
        />
      </div>
      <SecondaryButton on_click={handle_continue_click} />
    </>
  ) : (
    <></>
  );
}
