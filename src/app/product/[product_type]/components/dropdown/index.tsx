"use client";

import { useCallback, useState } from "react";
import DropdownItem from "./dropdown_item";
import Toppings from "./toppings";
import { cook, crust_type, sauce_ammount, sauces, toppings } from "./constants";

import CardPreview from "../preview";

const tmp = {
  double: true,
  index: null,
};

const dipping_sauces = [
  "Garlic Parmesan",
  "Ranch",
  "Cheddar Habanero",
  "Marinara",
  "Honey Garlic",
  "No Dipping Sauce",
];

export default function Dropdown({ is_dipping_sauce }: any) {
  const [selected_idx, set_idx] = useState(0);
  const [select_addition, set_select_addition] = useState<
    { double: boolean; index: number; selected: boolean }[]
  >([]);

  const set_classname = (idx: number) =>
    `${
      selected_idx === idx
        ? "card card--topping card--topping--open"
        : "card card--topping"
    }`;

  const set_hr_classname = (idx: number) =>
    idx === selected_idx
      ? "gutter--top--half gutter--bottom--half"
      : "gutter--top--half gutter--bottom--half hidden--always";

  return (
    <span className="accordion--menu__item__content visible" id="2cdaContent">
      <div className="flexrow">
        <div className="flexrow__column flexrow__column--preview">
          <div className="flexrow__gutter">
            <CardPreview is_dipping_sauce={is_dipping_sauce} />
          </div>
        </div>
        <div className="flexrow__column flexrow__column--toppings">
          {is_dipping_sauce && (
            <div className="flexrow__gutter">
              <div className={set_classname(0)} onClick={() => set_idx(0)}>
                <h3 className="card--topping__title"> Selection 1 </h3>
                <hr className={set_hr_classname(0)} />
                <div id="toppingMeatsList0" className="card--topping__list">
                  {dipping_sauces.map((t, idx) => (
                    <DropdownItem title={t} key={t} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {!is_dipping_sauce && (
            <div className="flexrow__gutter">
              <div className={set_classname(0)} onClick={() => set_idx(0)}>
                <h3 className="card--topping__title"> Toppings </h3>
                <hr className={set_hr_classname(0)} />
                <Toppings selected={selected_idx === 0} />
                <div id="toppingMeatsList0" className="card--topping__list">
                  {toppings.map((t, idx) => (
                    <DropdownItem title={t} key={t} is_double_enabled />
                  ))}
                </div>
              </div>
              <div className={set_classname(1)} onClick={() => set_idx(1)}>
                <h3 className="card--topping__title">Sauce Type</h3>

                <hr className={set_hr_classname(1)} />
                <div id="toppingMeatsList0" className="card--topping__list">
                  {sauces.map((t, idx) => (
                    <DropdownItem title={t} key={t} active={idx === 0} />
                  ))}
                </div>
              </div>
              <div className={set_classname(2)} onClick={() => set_idx(2)}>
                <h3 className="card--topping__title">Sauce Amount</h3>

                <hr className={set_hr_classname(2)} />
                <div id="toppingMeatsList0" className="card--topping__list">
                  {sauce_ammount.map((t, idx) => (
                    <DropdownItem title={t} key={t} active={idx === 0} />
                  ))}
                </div>
              </div>
              <div className={set_classname(3)} onClick={() => set_idx(3)}>
                <h3 className="card--topping__title">Crust Type</h3>

                <hr className={set_hr_classname(3)} />
                <div id="toppingMeatsList0" className="card--topping__list">
                  {crust_type.map((t, idx) => (
                    <DropdownItem title={t} key={t} active={idx === 0} />
                  ))}
                </div>
              </div>
              <div className={set_classname(4)} onClick={() => set_idx(4)}>
                <h3 className="card--topping__title">Cook</h3>

                <hr className={set_hr_classname(4)} />
                <div id="toppingMeatsList0" className="card--topping__list">
                  {cook.map((t, idx) => (
                    <DropdownItem title={t} key={t} active={idx === 0} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </span>
  );
}
