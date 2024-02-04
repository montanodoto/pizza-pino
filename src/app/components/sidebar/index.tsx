export default function Sidebar({ cart_summary }: any) {
  return (
    <>
      <div className="flexrow__column flexrow__column--sidebar">
        <div className="flexrow__gutter">
          <div className="flexrow__column--sidebar__backdrop">
            {cart_summary ? (
              <div className="flexrow__gutter flexrow__gutter--double">
                <header className="widget__header widget__header--icon widget__header--icon--cart">
                  Your Cart
                </header>
                <p className="text--center">
                  <em> Your cart is currently empty. </em>
                </p>
                <button
                  id="placeLastOrder"
                  className="button button--default button--block"
                  title="Repeat Last Order"
                  rel="lastOrderResponse"
                >
                  <span className="button__icon button__icon--lastorder">
                    <span className="hidden--md hidden--lg">Repeat</span>
                    Last Order
                  </span>
                </button>
                <div
                  id="lastOrderResponse"
                  className="form__response form__response--slim--y form__response--slim--x form__response--slim--margin gutter--bottom--half"
                ></div>
              </div>
            ) : (
              <div className="flexrow__gutter flexrow__gutter--double">
                <header className="widget__header widget__header--icon widget__header--icon--cart">
                  Your Cart
                </header>
                <ul className="cartSummary">
                  <li className="cartSummary__item">
                    <span className="cartSummary__item__component cartSummary__item__component--control">
                      <span className="cartSummary__item__gutter cartSummary__item__gutter">
                        <span
                          className="cart__item__control--remove"
                          rel="MODEL001"
                        >
                          ×
                        </span>
                      </span>
                    </span>
                    <span className="cartSummary__item__component cartSummary__item__component--description">
                      <span className="cartSummary__item__gutter cartSummary__item__gutter--slim">
                        (1) Two Can Dine Special
                      </span>
                    </span>
                    <span className="cartSummary__item__component cartSummary__item__component--price">
                      <span className="cartSummary__item__gutter cartSummary__item__gutter--slim">
                        $16.00
                      </span>
                    </span>
                  </li>
                </ul>
                <hr />
                <span className="flexrow flexrow--inset">
                  <span className="flexrow__column flexrow__column--cart-summary">
                    <span className="cart__item__gutter cart__item__gutter--slim-y">
                      Subtotal:
                    </span>
                  </span>
                  <span className="flexrow__column flexrow__column--cart-summary--total">
                    <span className="cart__item__gutter cart__item__gutter--slim-y">
                      <strong> $16.00 </strong>
                    </span>
                  </span>
                </span>
                <span className="flexrow flexrow--inset">
                  <span className="flexrow__column flexrow__column--cart-summary">
                    <span className="cart__item__gutter cart__item__gutter--slim-y">
                      HST:
                    </span>
                  </span>
                  <span className="flexrow__column flexrow__column--cart-summary--total">
                    <span className="cart__item__gutter cart__item__gutter--slim-y">
                      <strong> $2.08 </strong>
                    </span>
                  </span>
                </span>
                <span className="flexrow flexrow--inset">
                  <span className="flexrow__column flexrow__column--cart-summary">
                    <span className="cart__item__gutter cart__item__gutter--slim-y">
                      Total:
                    </span>
                  </span>
                  <span className="flexrow__column flexrow__column--cart-summary--total">
                    <span className="cart__item__gutter cart__item__gutter--slim-y">
                      <strong> $18.08 </strong>
                    </span>
                  </span>
                </span>
                <a
                  href="/cart/"
                  className="button button--default display--block gutter--top"
                >
                  Go to Cart
                </a>
              </div>
            )}
          </div>
          <hr />
          <button
            id="resetOrderPreferences"
            className="button button--default button--block button--large radius--top--left radius--top--right radius--bottom--left radius--bottom--right title="
            rel="resetOrderResponse"
          >
            <span className="button__icon button__icon--settings">
              Change Order
            </span>
          </button>
          <div
            id="resetOrderResponse"
            className="form__response form__response--slim--y form__response--slim--x form__response--slim--margin gutter--bottom--half"
          ></div>
          <hr />
        </div>
      </div>
    </>
  );
}
