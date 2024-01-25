function Header() {
  return (
    <>
      <header id="userBar" className="top-bar">
        <div className="container container--user">
          <span className="top-bar__store">
            <a
              href="/locations/"
              title="Find your nearest location"
              className="link--black"
            >
              Find your nearest location
            </a>
            <span className="link--account">
              <a href="/account/" title="Sign In" className="link--black">
                Sign In
              </a>
            </span>
          </span>
          <span className="top-bar__phone">
            <span className="top-bar__phone__icon">
              <a
                href="tel:18663104466"
                title="1 (866) 310-4466"
                className="link--black"
              >
                1 (866) 310-4466
              </a>
            </span>
          </span>
        </div>
      </header>
      <header id="primaryNav" className="navbar navbar--primary">
        <div className="container container--navbar">
          <a
            href="/"
            title="Gino's Pizza Inc."
            className="branding branding--primary"
          >
            <img src="/logo.png" alt="Gino's Pizza Inc." />
          </a>
          <nav id="topMenu">
            <ul id="menu-top-menu" className="menu">
              <li className="menu-item menu-item-has-children">
                <a href="/menu/" title="Menu">
                  Menu
                </a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="/menu/specials/" title="Specials">
                      Specials
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/menu/gourmetpizzas/" title="Gourmet Pizzas">
                      Gourmet Pizzas
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/menu/pizzas/" title="Pizzas">
                      Pizzas
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/menu/wings/" title="Wings">
                      {" "}
                      Wings
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/menu/sides/" title="Sides">
                      Sides
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/menu/beverages/" title="Beverages">
                      Beverages
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/menu/desserts/" title="Desserts &amp; Chips">
                      Desserts &amp; Chips
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/menu/panzerotti/" title="Panzerotti">
                      Panzerotti
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="/locations/" title="Locations">
                  Locations
                </a>
              </li>
              <li className="menu-item">
                <a href="/our-story/" title="Our Story">
                  Our Story
                </a>
              </li>
            </ul>
          </nav>
          <div className="navbar-cta navbar-cta--desktop">
            <a
              href="/menu/"
              className="navbar-cta--desktop__link navbar-cta--desktop__link--button"
              title="Order Online"
            >
              <span className="navbar-cta--desktop__link--button__icon">
                Order Online
              </span>
            </a>
            <a
              href="tel:18663104466"
              rel="tel"
              className="navbar-cta--desktop__link navbar-cta--desktop__link--number"
              title="or call 1 (866) 310-4466"
            >
              <span className="navbar-cta--desktop__link--number__label">
                or call:
              </span>
              1 (866) 310-4466
            </a>
            <a
              href="/cart/"
              className="navbar-cta--desktop__link navbar-cta--desktop__link--cart"
              title="Your Cart"
              rel="nofollow"
            >
              <span className="navbar-cta--desktop__link--cart__count">0</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
