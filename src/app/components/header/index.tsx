"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav_elements = [
  {
    name: "menu",
    title: "MENU",
    href: "/menu",
    isOpen: false,
    sub: [
      { title: "Specials", name: "Specials", href: "/menu/specials/" },
      {
        title: "Gourmet Pizzas",
        name: "Gourmet Pizzas",
        href: "/menu/gourmetpizzas/",
      },
      { title: "Pizzas", name: "Pizzas", href: "/menu/pizzas/" },
      { title: "Wings", name: "Wings", href: "/menu/wings/" },
      { title: "Sides", name: "Sides", href: "/menu/sides/" },
      {
        title: "Desserts &amp; Chips",
        name: "Desserts &amp; Chips",
        href: "/menu/desserts/",
      },
      { title: "Panzerotti", name: "Panzerotti", href: "/menu/panzerotti/" },
    ],
  },
  {
    name: "locations",
    title: "LOCATIONS",
    href: "/locations",
  },
  {
    name: "our_story",
    title: "OUR STORY",
    href: "/our-story",
  },
];

function Header() {
  const [subNav, setSubNav] = useState("");
  const pathname = usePathname();
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
      <header
        id="primaryNav"
        className={`navbar navbar--primary ${
          pathname === "menu" && "navbar--stuck"
        }`}
      >
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
              {nav_elements.map((nav) => (
                <li
                  onMouseMove={() => setSubNav(nav.sub ? nav.name : "")}
                  onMouseLeave={() => setSubNav("")}
                  className={`menu-item ${
                    subNav === nav.name ? "menu-open" : ""
                  } ${nav.sub ? "menu-item-has-children" : ""}`}
                  key={nav.href}
                >
                  <a href={nav.href} title={nav.title}>
                    {nav.title}
                  </a>
                  {nav?.sub && (
                    <ul className="sub-menu">
                      {nav.sub.map((sub) => (
                        <li className="menu-item" key={sub.name}>
                          <a href={sub.href} title={sub.title}>
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
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
