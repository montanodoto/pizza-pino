"use client";
import { useCallback, useContext, useState } from "react";

import { PrimaryButton } from "../button";
import PickupContent from "./pickup_content";

import "react-datepicker/dist/react-datepicker.css";
import DeliveryContent from "./delivery_content";

type DeliveryModalProps = {
  on_continue: () => void;
};

export default function DeliveryModal({ on_continue }: DeliveryModalProps) {
  const [modal_content, set_modal_content] = useState("");

  const on_delivery_click = useCallback(
    () => set_modal_content("delivery"),
    [],
  );
  const on_pickup_click = useCallback(() => set_modal_content("pickup"), []);

  const handle_pickup_continue = useCallback(() => {
    // on_modal_change("order");
    console.log(on_continue);
    on_continue();
  }, [on_continue]);

  const handle_delivery_continue = useCallback(() => {}, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <PrimaryButton on_click={on_delivery_click} title={"DELIVERY"} />
        <PrimaryButton on_click={on_pickup_click} title={"PICKUP"} />
      </div>

      <div
        className={`w-[525px] ${modal_content === "pickup" ? "ml-auto mr-[3px]" : "ml-[3px]"}`}
      >
        <PickupContent
          modal_type={modal_content}
          on_continue={handle_pickup_continue}
        />
        <DeliveryContent
          modal_type={modal_content}
          on_continue={handle_delivery_continue}
        />
      </div>
    </>
  );
}
