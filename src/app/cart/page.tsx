export default function CartPage() {
  return (
    <>
      <div className="flexrow">
        <div className="flexrow__column flexrow__column--content">
          <div className="flexrow__gutter table--flex">
            <header className="table table--flex__shrink hidden--xxs hidden--xs">
              <div className="table__column table__column--product">
                <div className="table__spacing">
                  <div className="table__header table__header--border-left">
                    <div className="table__gutter"> Product </div>
                  </div>
                </div>
              </div>
              <div className="table__column table__column--price">
                <div className="table__spacing">
                  <div className="table__header">
                    <div className="table__gutter"> Price </div>
                  </div>
                </div>
              </div>
              <div className="table__column table__column--count">
                <div className="table__spacing">
                  <div className="table__header">
                    <div className="table__gutter"> Count </div>
                  </div>
                </div>
              </div>
              <div className="table__column table__column--total">
                <div className="table__spacing">
                  <div className="table__header table__header--border-right">
                    <div className="table__gutter"> Total </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="table table--flex__grow">
              <div className="table__column table__column--product">
                <div className="table__spacing">
                  <div className="table__cell">
                    <div className="table__gutter">
                      <div className="table__column--product__details">
                        <div className="table__column table__column--thumbnail">
                          <div className="table__spacing">
                            <div className="table__column--thumbnail__gutter">
                              <img src="/dist/img/products/G_AM.png" alt="20" />
                            </div>
                          </div>
                        </div>
                        <div className="table__column table__column--details">
                          <div className="table__spacing">
                            <span className="display--block height--auto gutter--bottom--half">
                              <span className="cart__item__details__row__description__item">
                                {" "}
                                20 Round Americano{" "}
                              </span>
                              <span className="display--block height--auto text--sm">
                                <strong> Crust: </strong> Regular{" "}
                              </span>
                              <span className="display--block height--auto text--sm">
                                <strong> Sauce: </strong> Regular{" "}
                              </span>
                              <span className="display--block height--auto text--sm">
                                <strong> Cook: </strong> Regular{" "}
                              </span>
                              <span className="display--block height--auto text--sm">
                                <strong> Toppings: </strong>
                                <span className="cart__item__details__row__description__item__topping">
                                  {" "}
                                  Bacon Crumble{" "}
                                </span>
                                <span className="cart__item__details__row__description__item__topping">
                                  {" "}
                                  Mushroom{" "}
                                </span>
                                <span className="cart__item__details__row__description__item__topping">
                                  {" "}
                                  Green Olives{" "}
                                </span>
                                <span className="cart__item__details__row__description__item__topping">
                                  {" "}
                                  Regular Sauce
                                </span>
                              </span>
                            </span>
                            <span className="display--block height--auto gutter--bottom--half">
                              <span className="cart__item__details__row__description__item">
                                {" "}
                                Dipping Sauce{" "}
                              </span>
                              <span className="display--block height--auto text--sm">
                                {" "}
                                Garlic Parmesan{" "}
                              </span>
                            </span>
                            <a
                              href="/edit/model001/1/"
                              className="button--remove cart__item__control--edit"
                            >
                              <strong> Edit Item</strong>
                            </a>{" "}
                            |{" "}
                            <strong
                              className="button--remove cart__item__control--remove"
                              rel="MODEL001"
                            >
                              Remove Item{" "}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table__column table__column--price">
                <div className="table__spacing">
                  <div className="table__cell">
                    <div className="table__gutter"> $36.00 </div>
                  </div>
                </div>
              </div>
              <div className="table__column table__column--count">
                <div className="table__spacing">
                  <div className="table__cell">
                    <div className="table__gutter">
                      <div className="table__column--count__controls">
                        <div className="table__column--count__controls--control">
                          <span
                            className="cart__item__control cart__item__control--increase"
                            rel="MODEL001"
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div className="table__column--count__controls--quantity">
                          {" "}
                          1{" "}
                        </div>
                        <div className="table__column--count__controls--control">
                          <span
                            className="cart__item__control cart__item__control--decrease"
                            rel="MODEL001"
                          >
                            {" "}
                            -{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table__column table__column--total">
                <div className="table__spacing">
                  <div className="table__cell">
                    <div className="table__gutter"> $36.00 </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table table--flex__grow">
              <div className="table__column table__column--product">
                <div className="table__spacing">
                  <div className="table__cell">
                    <div className="table__gutter">
                      <div className="table__column--product__details">
                        <div className="table__column table__column--thumbnail">
                          <div className="table__spacing">
                            <div className="table__column--thumbnail__gutter">
                              <img
                                src="/dist/img/products/ONE.png"
                                alt="Single Pizza Special"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="table__column table__column--details">
                          <div className="table__spacing">
                            <span className="display--block height--auto gutter--bottom--half">
                              <span className="cart__item__details__row__description__item">
                                {" "}
                                Single Pizza Special{" "}
                              </span>
                              <span className="display--block height--auto text--sm">
                                <strong> Crust: </strong> Regular{" "}
                              </span>
                              <span className="display--block height--auto text--sm">
                                <strong> Sauce: </strong> Regular{" "}
                              </span>
                              <span className="display--block height--auto text--sm">
                                <strong> Cook: </strong> Regular{" "}
                              </span>
                              <span className="display--block height--auto text--sm">
                                <strong> Toppings: </strong>
                                <span className="cart__item__details__row__description__item__topping">
                                  {" "}
                                  Pepperoni{" "}
                                </span>
                                <span className="cart__item__details__row__description__item__topping">
                                  {" "}
                                  Regular Sauce
                                </span>
                              </span>
                            </span>
                            <span className="display--block height--auto gutter--bottom--half">
                              <span className="cart__item__details__row__description__item">
                                {" "}
                                1 Dipping Sauce{" "}
                              </span>
                              <span className="display--block height--auto text--sm">
                                {" "}
                                Garlic Parmesan{" "}
                              </span>
                            </span>
                            <a
                              href="/edit/model002/1/"
                              className="button--remove cart__item__control--edit"
                            >
                              <strong> Edit Item</strong>
                            </a>{" "}
                            |{" "}
                            <strong
                              className="button--remove cart__item__control--remove"
                              rel="MODEL002"
                            >
                              Remove Item{" "}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table__column table__column--price">
                <div className="table__spacing">
                  <div className="table__cell">
                    <div className="table__gutter"> $8.00 </div>
                  </div>
                </div>
              </div>
              <div className="table__column table__column--count">
                <div className="table__spacing">
                  <div className="table__cell">
                    <div className="table__gutter">
                      <div className="table__column--count__controls">
                        <div className="table__column--count__controls--control">
                          <span
                            className="cart__item__control cart__item__control--increase"
                            rel="MODEL002"
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div className="table__column--count__controls--quantity">
                          {" "}
                          1{" "}
                        </div>
                        <div className="table__column--count__controls--control">
                          <span
                            className="cart__item__control cart__item__control--decrease"
                            rel="MODEL002"
                          >
                            {" "}
                            -{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table__column table__column--total">
                <div className="table__spacing">
                  <div className="table__cell">
                    <div className="table__gutter"> $8.00 </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="table__column table__column--product">
                <div className="table__spacing">
                  <div className="table__cell">
                    <div className="table__gutter">
                      <span className="cart__item__details__row__description__item gutter--bottom--none">
                        You might also like:{" "}
                      </span>
                      <div className="flexrow">
                        <div className="flexrow__column flexrow__column--one-third">
                          <div className="flexrow__gutter">
                            <div className="card card--upsell">
                              <div className="flexrow__gutter">
                                <a
                                  href="/product/xdip/order-now/"
                                  title="Extra Dipping Sauce"
                                >
                                  <img
                                    src="/dist/img/products/XDIP.png"
                                    alt="Extra Dipping Sauce"
                                    className="card--upsell__thumbnail"
                                  />
                                </a>
                                <a
                                  href="/product/xdip/order-now/"
                                  title="Extra Dipping Sauce"
                                  className="card--upsell__title"
                                >
                                  {" "}
                                  Extra Dipping Sauce{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flexrow__column flexrow__column--one-third">
                          <div className="flexrow__gutter">
                            <div className="card card--upsell">
                              <div className="flexrow__gutter">
                                <a
                                  href="/product/BOTL/order-now/"
                                  title="591mL Drink"
                                >
                                  <img
                                    src="/dist/img/products/BOTL.png"
                                    alt="591mL Drink"
                                    className="card--upsell__thumbnail"
                                  />
                                </a>
                                <a
                                  href="/product/BOTL/order-now/"
                                  title="591mL Drink"
                                  className="card--upsell__title"
                                >
                                  {" "}
                                  591mL Drink
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flexrow__column flexrow__column--one-third">
                          <div className="flexrow__gutter">
                            <div className="card card--upsell">
                              <div className="flexrow__gutter">
                                <a href="/product/bit/order-now/" title="Bites">
                                  <img
                                    src="/dist/img/products/BIT.png"
                                    alt="Bites"
                                    className="card--upsell__thumbnail"
                                  />
                                </a>
                                <a
                                  href="/product/bit/order-now/"
                                  title="Bites"
                                  className="card--upsell__title"
                                >
                                  {" "}
                                  Bites{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table--flex__shrink flexrow__column--content__backdrop flexrow__column--content__backdrop--auto-height radius--top--right--none radius--top--left--none">
              <div className="flexrow__gutter">
                <strong
                  id="clearCart"
                  className="button--remove button--remove--secondary caps"
                >
                  {" "}
                  × Empty Cart{" "}
                </strong>
              </div>
            </div>
            <div className="table--flex__shrink flexrow__column--content__backdrop flexrow__column--content__backdrop--auto-height gutter--bottom--none">
              <div className="flexrow__gutter flexrow__gutter--double">
                <div className="flexrow">
                  <div className="flexrow__column flexrow__column--table-coupon">
                    <div className="flexrow__gutter">
                      <form className="form" id="couponCodeForm" method="post">
                        <div className="form__wrap form__wrap--gutter">
                          <label
                            className="form__wrap__label"
                            htmlFor="couponcode"
                          >
                            {" "}
                            Enter Coupon Code *{" "}
                          </label>
                          <input
                            type="text"
                            id="couponcode"
                            name="couponcode"
                            className="form__wrap__field form__wrap__field--with-label"
                            rel="required"
                          />
                        </div>
                        <button
                          id="applyCoupon"
                          className="button button--secondary"
                          title="Apply"
                          rel="couponResponse"
                          data-coupon="couponcode"
                          type="submit"
                        >
                          {" "}
                          Apply{" "}
                        </button>
                        <div
                          id="couponResponse"
                          className="form__response form__response--widget form__response--slim--y gutter--top--half gutter--bottom--none"
                        ></div>
                      </form>
                    </div>
                  </div>
                  <div className="flexrow__column flexrow__column--table-totals">
                    <div className="flexrow__gutter">
                      <div>
                        <span className="flexrow__column--table-totals__label">
                          {" "}
                          Subtotal:{" "}
                        </span>
                        <strong className="flexrow__column--table-totals__total">
                          {" "}
                          $44.00{" "}
                        </strong>
                      </div>
                      <div>
                        <span className="flexrow__column--table-totals__label">
                          {" "}
                          HST:{" "}
                        </span>
                        <strong className="flexrow__column--table-totals__total">
                          {" "}
                          $5.72{" "}
                        </strong>
                      </div>
                      <div>
                        <span className="flexrow__column--table-totals__label text--primary">
                          {" "}
                          Total:{" "}
                        </span>
                        <strong className="flexrow__column--table-totals__total text--primary">
                          {" "}
                          $49.72{" "}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flexrow__column flexrow__column--sidebar">
          <div className="flexrow__gutter">
            <div className="flexrow__column--sidebar__backdrop">
              <div className="flexrow__gutter flexrow__gutter--double">
                <header className="widget__header widget__header--icon widget__header--icon--summary">
                  {" "}
                  Order Summary{" "}
                </header>
                <span className="cart__item__details__row__description__item">
                  {" "}
                  Account Details
                </span>
                <dl className="list--description text--sm">
                  <dt className="list--description__term"> Name: </dt>
                  <dd className="list--description__data"> Gabriel Ramirez </dd>
                  <dt className="list--description__term"> Phone#: </dt>
                  <dd className="list--description__data"> 9053688983 </dd>
                  <dt className="list--description__term"> Email: </dt>
                  <dd className="list--description__data">
                    {" "}
                    ostellgreyson@gmail.com{" "}
                  </dd>
                </dl>
                <hr className="trim--half" />
                <span className="cart__item__details__row__description__item">
                  {" "}
                  Service Summary
                </span>
                <dl className="list--description text--sm">
                  <dt className="list--description__term"> Method: </dt>
                  <dd className="list--description__data"> Pick-Up </dd>
                  <dt className="list--description__term"> Store: </dt>
                  <dd className="list--description__data">
                    {" "}
                    383 Arthur St S<br /> Coming Soon
                    <br /> Elmira
                    <br /> N3B2P5
                    <br />{" "}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
