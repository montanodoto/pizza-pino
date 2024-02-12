"use client";
import { useCallback, useState } from "react";

import FutureOrderContent from "./future_order_content";
import OrderNowContent from "./order_now_content";
import { PrimaryButton } from "../button";

import "react-datepicker/dist/react-datepicker.css";

type OrderModalProps = {
  on_continue: () => void;
  on_modal_close: () => any;
};

export default function OrderModal({
  on_continue,
  on_modal_close,
}: OrderModalProps) {
  const [modal_content, set_modal_content] = useState("");

  const on_order_click = useCallback(() => {
    set_modal_content("order_now");
  }, []);
  const on_future_order_click = useCallback(() => {
    set_modal_content("future_order");
  }, []);

  const handle_future_order_continue = useCallback(() => {
    on_modal_close();
  }, [on_modal_close]);
  const handle_order_now_continue = useCallback(() => {
    on_modal_close();
  }, [on_modal_close]);

  return (
    <>
      <div className="flex items-center justify-between">
        <PrimaryButton on_click={on_order_click} title={"ORDER NOW"} />
        <PrimaryButton
          on_click={on_future_order_click}
          title={"FUTURE ORDER"}
        />
      </div>

      <div
        className={`w-[525px] ${
          modal_content === "future_order" ? "ml-auto mr-[3px]" : "ml-[3px]"
        }`}
      >
        <FutureOrderContent
          on_modal_close={on_modal_close}
          modal_type={modal_content}
          on_continue={handle_future_order_continue}
        />
        <OrderNowContent
          on_modal_close={on_modal_close}
          modal_type={modal_content}
          on_continue={handle_order_now_continue}
        />
      </div>
    </>
  );
}
