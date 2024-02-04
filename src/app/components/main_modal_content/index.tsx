"use client";
import { useCallback, useMemo, useState } from "react";

import { PrimaryButton } from "./button";
import Modal from "../modal";
import PickupContent from "./pickup_content";

import "react-datepicker/dist/react-datepicker.css";
import DeliveryContent from "./delivery_content";

type Stores = { value: string; label: string }[];
type DeliveryModalProps = { is_initially_open: boolean };

export default function DeliveryModal({
  is_initially_open,
}: DeliveryModalProps) {
  const [is_open, set_is_open] = useState(is_initially_open);
  const [modal_content, set_modal_content] = useState("");
  const handle_close_modal = useCallback(() => set_is_open(false), []);

  const on_delivery_click = useCallback(
    () => set_modal_content("delivery"),
    [],
  );
  const on_pickup_click = useCallback(() => set_modal_content("pickup"), []);

  const handle_pickup_continue = useCallback(() => {}, []);
  const handle_delivery_continue = useCallback(() => {}, []);
  return (
    <div className="w-full flex-col">
      {/* <DeliveryModal
        is_open={is_open}
        on_close={handle_close_modal}
      ></DeliveryModal> */}
      <Modal is_open={is_open} on_close={handle_close_modal}>
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
      </Modal>
    </div>
  );
}
