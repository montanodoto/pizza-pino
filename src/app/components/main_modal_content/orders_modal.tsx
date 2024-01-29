"use client";
import { useCallback, useState } from "react";
import DatePicker from "react-datepicker";
// import { useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";

import Select from "@/app/components/Select";
import { PrimaryButton, SecondaryButton } from "./button";

export default function OrderModal() {
  const [selectedDate, setSelectedDate] = useState(null);

  const [order_selection, set_order_selection] = useState("");

  const on_order = useCallback(() => set_order_selection("order"), []);
  const on_future_order = useCallback(
    () => set_order_selection("future_order"),
    []
  );

  const on_order_continue = useCallback(() => {}, []);

  const on_future_order_continue = useCallback(() => {
    const is_future_order_ready = false;

    if (!is_future_order_ready) {
    }
  }, []);

  const stick_to_right = order_selection === "order" ? "" : "ml-auto m-2";

  return (
    <div className="flex-column w-full">
      <PrimaryButton on_click={on_order} title="ORDER NOW" />
      <PrimaryButton on_click={on_future_order} title="FUTURE ORDER" />
      <div className={`w-[525px] ${stick_to_right}`}>
        {order_selection === "order" ? (
          <>
            <p style={{ textAlign: "left", paddingLeft: 5 }}>
              Place an order for
              <strong> Sunday, January 28th at 2:42 PM</strong>
            </p>
            <SecondaryButton on_click={on_order_continue} />
          </>
        ) : (
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
      </div>
    </div>
  );
}
