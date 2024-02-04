"use client";
import { useState } from "react";
import { SecondaryButton } from "../button";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type FutureOrderContentProps = {
  on_continue: (props: { selected_address: string }) => void;
  modal_type: string;
};

const hours = [
  { title: "11 am", value: 11 },
  { title: "12 pm", value: 12 },
  { title: "1 pm", value: 13 },
  { title: "2 pm", value: 14 },
  { title: "3 pm", value: 15 },
  { title: "4 pm", value: 16 },
  { title: "5 pm", value: 17 },
  { title: "6 pm", value: 18 },
  { title: "7 pm", value: 19 },
  { title: "8 pm", value: 20 },
  { title: "9 pm", value: 21 },
  { title: "10 pm", value: 22 },
  { title: "11 pm", value: 23 },
];

export default function FutureOrderContent({
  modal_type,
  on_continue,
}: FutureOrderContentProps) {
  const [selectedDate, setSelectedDate] = useState(null);

  if (modal_type !== "future_order") {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex w-full">
        <div className="flexrow__gutter grow">
          <div className="form__wrap form__wrap--focused">
            <label className="form__wrap__label" htmlFor="orderTimeFutureDate">
              Select a Date (YYYY-MM-DD)
            </label>
            <input
              type="date"
              id="orderTimeFutureDate"
              value="2024-01-30"
              className="form__wrap__field form__wrap__field--with-label"
            />
          </div>
        </div>
        <div className="flexrow__gutter grow">
          <div className="form__wrap form__wrap__select-wrapper">
            <select className="form__wrap__select" size={1} rel="required">
              <option value="" selected={true} disabled={true}>
                Hour
              </option>
              {hours.map((h) => (
                <option value={h.value} key={h.value}>
                  {h.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flexrow__gutter grow">
          <div className="form__wrap form__wrap__select-wrapper">
            <select className="form__wrap__select" size={1} rel="required">
              <option value="" selected={true} disabled={true}>
                Minutes
              </option>
              <option value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
          </div>
        </div>
      </div>

      <SecondaryButton on_click={on_continue} className="mr-auto" />
    </div>
  );
}
