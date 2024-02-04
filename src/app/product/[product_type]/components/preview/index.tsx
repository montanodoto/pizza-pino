export default function CardPreview({ is_dipping_sauce }: any) {
  return (
    <div>
      <div className="card card--preview">
        <div id="productPreview2CDA" rel="pizza" className="position--relative">
          {is_dipping_sauce ? (
            <img src="/FDIP.png" alt="" />
          ) : (
            <img src="/pizza--base--round.png" alt="" />
          )}
        </div>
      </div>
      <div
        id="toppings2CDA"
        className="text--small hidden--always topping-container"
        rel="pizza"
        data-op="16"
        data-pc="2CDA"
        data-rcp="true"
      >
        <div id="2CDA_top_l" className="left-toppings"></div>
        <div id="2CDA_top_w" className="whole-toppings"></div>
        <div id="2CDA_top_r" className="right-toppings"></div>
        <div id="2CDA_panzcook">
          <span data-topping="panzcook_BK" data-factor="null">
            BK
          </span>
        </div>
        <div id="2CDA_sauce_type">
          <span data-topping="sauce_type_RE" data-factor="null">
            RE
          </span>
        </div>
        <div id="2CDA_sauce">
          <span data-topping="sauce_RE" data-factor="null">
            RE
          </span>
        </div>
        <div id="2CDA_crust">
          <span data-topping="crust_RE" data-factor="null">
            RE
          </span>
        </div>
        <div id="2CDA_cook">
          <span data-topping="cook_RE" data-factor="null">
            RE
          </span>
        </div>
      </div>
    </div>
  );
}
