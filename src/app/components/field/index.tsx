"use client";
import { SyntheticEvent, useState } from "react";

type Field_Props = {
  label: string;
  type?: string;
  id: string;
  name: string;
  className?: string;
  value: string;
  on_change: (event: SyntheticEvent<HTMLInputElement>) => void;
};

export default function Field({
  label,
  type = "text",
  id,
  name,
  className,
  value,
  on_change,
}: Field_Props) {
  const [is_focused, set_is_focused] = useState("");

  const handle_change_focus = () => {
    if (!value) {
      set_is_focused(name);
    }
  };

  const handle_change_blur = () => {
    if (!value) {
      set_is_focused("");
    }
  };
  return (
    <div className="flexrow__column flexrow__column--account">
      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
        <div
          className={`form__wrap ${is_focused === name && !value && "form__wrap--focused"}`}
        >
          <label className="form__wrap__label" htmlFor={name}>
            {label} *{" "}
          </label>
          <input
            type={type}
            id={id}
            name={name}
            className="form__wrap__field form__wrap__field--with-label form__required"
            rel="required"
            value={value}
            onChange={on_change}
            onFocus={handle_change_focus}
            onBlur={handle_change_blur}
          />
        </div>
      </div>
    </div>
  );
}
