export default function Toppings({ selected }: any) {
  return (
    <div
      className={
        selected
          ? "flexrow flexrow--toppings"
          : "flexrow--toppings hidden--always"
      }
    >
      <div className="flexrow__column flexrow__column--one-quarter flexrow__column--one-quarter--force">
        <div className="flexrow__gutter flexrow__gutter--sizes">
          <button
            type="button"
            id="toppingMeats"
            className="button button--xsmall button--default display--block topping-subcat"
            rel="toppingMeatsList0"
          >
            Meat
          </button>
        </div>
      </div>
      <div className="flexrow__column flexrow__column--one-quarter flexrow__column--one-quarter--force">
        <div className="flexrow__gutter flexrow__gutter--sizes">
          <button
            type="button"
            id="toppingVeg"
            className="button button--xsmall button--default display--block topping-subcat"
            rel="toppingVegsList0"
          >
            Veg
          </button>
        </div>
      </div>
      <div className="flexrow__column flexrow__column--one-quarter flexrow__column--one-quarter--force">
        <div className="flexrow__gutter flexrow__gutter--sizes">
          <button
            type="button"
            id="toppingCheese"
            className="button button--xsmall button--default display--block topping-subcat"
            rel="toppingCheeseList0"
          >
            Cheese
          </button>
        </div>
      </div>
      <div className="flexrow__column flexrow__column--one-quarter flexrow__column--one-quarter--force">
        <div className="flexrow__gutter flexrow__gutter--sizes">
          <button
            type="button"
            id="toppingFree"
            className="button button--xsmall button--default display--block topping-subcat"
            rel="toppingFreeList0"
          >
            Free{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
