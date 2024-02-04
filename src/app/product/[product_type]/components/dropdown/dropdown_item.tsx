import { useState } from "react";

export default function DropdownItem({
  title,
  is_double_enabled = false,
}: any) {
  const [is_selected, set_is_selected] = useState(false);
  const [doubled, set_is_doubled] = useState(false);

  return (
    <div className="card--topping__list__topping">
      <div className="card--topping__list__topping__label">
        <div className="card--topping__list__topping__gutter gutter--left--none">
          {title}
        </div>
      </div>
      <div className="card--topping__list__topping__controls">
        <div className="card--topping__list__topping__gutter">
          <span
            rel="P"
            data-single="true"
            data-factor="0.5"
            data-preview="productPreview2CD"
          >
            <span
              className="card--topping__list__topping__control__pizza "
              rel="2CD_top_l"
              data-product="2CD"
              data-shape="round"
            ></span>
          </span>
          {is_double_enabled && (
            <>
              <span
                className="card--topping__list__topping__control card--topping__list__topping__control--wh"
                rel="P"
                data-single="true"
                onClick={() => set_is_selected((p) => !p)}
                data-factor="1"
                data-preview="productPreview2CD"
                id="P_whole"
              >
                <span
                  className={`card--topping__list__topping__control__pizza ${is_selected && "selected"}`}
                  rel="2CD_top_w"
                  data-product="2CD"
                  data-shape="round"
                ></span>
              </span>
              <span
                className="card--topping__list__topping__control card--topping__list__topping__control--rh"
                rel="P"
                data-single="true"
                data-factor="0.5"
                data-preview="productPreview2CD"
              >
                <span
                  className="card--topping__list__topping__control__pizza "
                  rel="2CD_top_r"
                  data-product="2CD"
                  data-shape="round"
                ></span>
              </span>
            </>
          )}
          {is_double_enabled && (
            <span
              onClick={() => set_is_doubled((p) => !p)}
              className={`card--topping__list__topping__control card--topping__list__topping__control--2x ${doubled && "selected"} `}
              rel="P"
              data-single="true"
              data-product="2CD"
              data-preview="productPreview2CD"
            >
              ×2
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
