function Specials() {
  return (
    <article>
      <div className="container">
        <ul className="list--breadcrumbs">
          <li className="list--breadcrumbs__crumb">
            <a
              href="/"
              title="Gino's Pizza Inc."
              className="list--breadcrumbs__crumb__link"
            >
              Gino&apos;s Pizza Inc.
            </a>
          </li>
          <li className="list--breadcrumbs__crumb">
            <a
              href="/menu/"
              title="Menu"
              className="list--breadcrumbs__crumb__link"
            >
              Menu
            </a>
          </li>
        </ul>
      </div>
      <div className="container container--slim--y">
        <div className="flexrow">
          <div className="flexrow__column flexrow__column--content">
            <div className="flexrow__gutter">
              <div className="flexrow__column--content__backdrop">
                <div className="flexrow__gutter flexrow__gutter--double">
                  <div className="form__response form__response--widget form__response--error gutter--bottom--none">
                    <strong>
                      <a href="/menu/" title="Set your location">
                        Set your location
                      </a>
                      to view item availability and pricing.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flexrow__column flexrow__column--sidebar">
            <div className="flexrow__gutter">
              <div className="flexrow__column--sidebar__backdrop">
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
        </div>
      </div>
    </article>
  );
}

export default Specials;
