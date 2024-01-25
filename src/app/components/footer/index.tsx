export default function Footer() {
  return (
    <footer className="footer footer--global">
      <div className="container">
        <div className="flexrow">
          <div className="flexrow__column flexrow__column--footer flexrow__column--footer-branding">
            <div className="flexrow__gutter">
              <a
                href="/"
                title="Gino's Pizza Inc."
                className="branding branding--footer"
              >
                <img src="/logo.png" alt="Gino's Pizza Inc." />
              </a>
              <a
                href="/menu/"
                className="navbar-cta--desktop__link navbar-cta--desktop__link--button"
                title="Order Online"
              >
                <span className="navbar-cta--desktop__link--button__icon">
                  Order Online
                </span>
              </a>
            </div>
          </div>
          <div className="flexrow__column flexrow__column--footer flexrow__column--footer-links">
            <div className="flexrow__gutter flexrow__gutter--slim-y--bottom">
              <div className="flexrow">
                <div className="flexrow__column flexrow__column--menu flexrow__column--menu--menu">
                  <div className="flexrow__gutter">
                    <h3 className="title title--footer title--white">Menu</h3>
                    <nav>
                      <ul className="footer-menu">
                        <li className="footer-menu__item">
                          <a
                            href="/menu/specials/"
                            title="Specials"
                            className="footer-menu__item__link"
                          >
                            Specials
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/menu/gourmetpizzas/"
                            title="Gourmet Pizzas"
                            className="footer-menu__item__link"
                          >
                            Gourmet Pizzas
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/menu/pizzas/"
                            title="Pizzas"
                            className="footer-menu__item__link"
                          >
                            Pizzas
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/menu/wings/"
                            title="Wings"
                            className="footer-menu__item__link"
                          >
                            Wings
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/menu/sides/"
                            title="Sides"
                            className="footer-menu__item__link"
                          >
                            Sides
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/menu/beverages/"
                            title="Beverages"
                            className="footer-menu__item__link"
                          >
                            Beverages
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/menu/desserts/"
                            title="Desserts &amp; Chips"
                            className="footer-menu__item__link"
                          >
                            Desserts &amp; Chips
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/menu/panzerotti/"
                            title="Panzerotti"
                            className="footer-menu__item__link"
                          >
                            Panzerotti
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="flexrow__column flexrow__column--menu flexrow__column--menu--corporate">
                  <div className="flexrow__gutter">
                    <h3 className="title title--footer title--white">
                      Information
                    </h3>
                    <nav>
                      <ul className="footer-menu">
                        <li className="footer-menu__item">
                          <a
                            href="/locations/"
                            title="Locations"
                            className="footer-menu__item__link"
                          >
                            Locations
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/our-story/"
                            title="Our Story"
                            className="footer-menu__item__link"
                          >
                            Our Story
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/franchising/"
                            title="Franchising"
                            className="footer-menu__item__link"
                          >
                            Franchising
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/school-fundraising/"
                            title="School Fundraising"
                            className="footer-menu__item__link"
                          >
                            School Fundraising
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/contact/"
                            title="Customer Feedback"
                            className="footer-menu__item__link"
                          >
                            Customer Feedback
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/privacy-policy-and-terms-of-service/"
                            title="Privacy Policy"
                            className="footer-menu__item__link"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li className="footer-menu__item">
                          <a
                            href="/dist/files/10000ContestGiveaway.pdf"
                            title="Contest Rules"
                            className="footer-menu__item__link"
                            target="_blank"
                          >
                            Contest Rules
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="flexrow__column flexrow__column--menu flexrow__column--menu--contact">
                  <div className="flexrow__gutter">
                    <h3 className="title title--footer title--white">
                      Contact
                    </h3>
                    <ul className="footer-menu">
                      <li className="footer-menu__item">25 Brownridge Road</li>
                      <li className="footer-menu__item">
                        Halton Hills, Ontario
                      </li>
                      <li className="footer-menu__item">L7G 0C6</li>
                      <li className="footer-menu__item footer-menu__item--bump">
                        <strong>Tel:</strong> 1 (866) 310-4466
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flexrow__column flexrow__column--full">
            <div className="flexrow__gutter">
              <hr className="gutter--top--half" />
              <div className="flexrow">
                <div className="flexrow__column flexrow__column--half">
                  <div className="flexrow__gutter flexrow__gutter--slim-y">
                    © 2024 Gino&apos;s Pizza Group Inc.
                  </div>
                </div>
                <div className="flexrow__column flexrow__column--footer-social flexrow__column--half">
                  <div className="flexrow__gutter flexrow__gutter--slim-y">
                    <a
                      href="https://www.facebook.com/GinosPizzaCDN"
                      title="Follow us on Facebook"
                      className="social social--facebook"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      Facebook{" "}
                    </a>
                    <a
                      href="https://www.instagram.com/ginospizzacdn/"
                      title="Follow us on Instagram"
                      className="social social--instagram"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      Instagram{" "}
                    </a>
                    <a
                      href="https://twitter.com/ginospizzacdn"
                      title="Follow us on Twitter"
                      className="social social--twitter"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      Twitter{" "}
                    </a>
                    <a
                      href="https://foursquare.com/ginospizzacdn"
                      title="Follow us on Foursquare"
                      className="social social--foursquare"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      Foursquare
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
