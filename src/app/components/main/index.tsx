/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import initial_locations from "./data";

function Main() {
  const [locations, setLocations] = useState(initial_locations);
  return (
    <main className="canvas">
      <article>
        <div className="hero">
          <div id="carousel" className="flickity-enabled" tabIndex={0}>
            <div className="flickity-viewport" style={{ touchAction: "pan-y" }}>
              <div
                className="flickity-slider"
                style={{ left: 0, transform: "translateX(-100%)" }}
              >
                <picture
                  className="cover"
                  //   aria-hidden={true}
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(0%)",
                  }}
                >
                  <source
                    media="(min-width: 90em)"
                    srcSet="/10kGiftCard.png?ver=2024.1.6"
                  />
                  <source
                    media="(min-width: 75em)"
                    srcSet="/10kGiftCard@0.5x.png?ver=2024.1.6"
                  />
                  <source
                    media="(min-width: 60em)"
                    srcSet="/10kGiftCard@0.33x.png?ver=2024.1.6"
                  />
                  <source
                    media="(min-width: 15em)"
                    srcSet="/10kGiftCard@0.25x.png?ver=2024.1.6"
                  />
                  <a
                    href="/menu/"
                    title="Ontario’s Best Pizza — Order Online or Call 1 (866) 310-4466"
                  >
                    <img
                      src="/10kGiftCard.png?ver=2024.1.6"
                      alt="Ontario’s Best Pizza — Order Online or Call 1 (866) 310-4466"
                      className="cover__image"
                    />
                  </a>
                </picture>
                <picture
                  className="cover is-selected"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(100%)",
                  }}
                >
                  <source
                    media="(min-width: 90em)"
                    srcSet="/NowOpenBaylySt.png?ver=2024.1.6"
                  />
                  <source
                    media="(min-width: 75em)"
                    srcSet="
                      /public/N.5x.png?ver=2024.1.6
                    "
                  />
                  <source
                    media="(min-width: 60em)"
                    srcSet="
                      /public/N.33x.png?ver=2024.1.6
                    "
                  />
                  <source
                    media="(min-width: 15em)"
                    srcSet="
                      /public/N.25x.png?ver=2024.1.6
                    "
                  />
                  <a
                    href="/menu/"
                    title="Ontario’s Best Pizza — Order Online or Call 1 (866) 310-4466"
                  >
                    <img
                      src="/NowOpenBaylySt.png?ver=2024.1.6"
                      alt="Ontario’s Best Pizza — Order Online or Call 1 (866) 310-4466"
                      className="cover__image"
                    />
                  </a>
                </picture>
                <picture
                  className="cover"
                  //   aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(200%)",
                  }}
                >
                  <source
                    media="(min-width: 90em)"
                    srcSet="/MustangWinner.png?ver=2024.1.6"
                  />
                  <source
                    media="(min-width: 75em)"
                    srcSet="/MustangWinner@0.5x.png?ver=2024.1.6"
                  />
                  <source
                    media="(min-width: 60em)"
                    srcSet="
                      /public/M.33x.png?ver=2024.1.6
                    "
                  />
                  <source
                    media="(min-width: 15em)"
                    srcSet="
                      /public/M.25x.png?ver=2024.1.6
                    "
                  />
                  <a
                    href="/menu/"
                    title="Ontario’s Best Pizza — Order Online or Call 1 (866) 310-4466"
                  >
                    <img
                      src="/MustangWinner.png?ver=2024.1.6"
                      alt="Ontario’s Best Pizza — Order Online or Call 1 (866) 310-4466"
                      className="cover__image"
                    />
                  </a>
                </picture>
                <picture
                  className="cover"
                  //   aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translate(300%)",
                  }}
                >
                  <source
                    media="(min-width: 90em)"
                    srcSet="/OpeningSoon2024.png?ver=2024.1.6"
                  />
                  <source
                    media="(min-width: 75em)"
                    srcSet="
                      /public/O.5x.png?ver=2024.1.6
                    "
                  />
                  <source
                    media="(min-width: 60em)"
                    srcSet="
                      /public/O.33x.png?ver=2024.1.6
                    "
                  />
                  <source
                    media="(min-width: 15em)"
                    srcSet="
                      /public/O.25x.png?ver=2024.1.6
                    "
                  />
                  <a
                    href="/menu/"
                    title="Ontario’s Best Pizza — Order Online or Call 1 (866) 310-4466"
                  >
                    <img
                      src="/OpeningSoon2024.png?ver=2024.1.6"
                      alt="Ontario’s Best Pizza — Order Online or Call 1 (866) 310-4466"
                      className="cover__image"
                    />
                  </a>
                </picture>
                <picture
                  className="cover"
                  //   aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(400%)",
                  }}
                >
                  <source
                    media="(min-width: 90em)"
                    srcSet="
                      /public/t-banner.png?ver=2024.1.6
                    "
                  />
                  <source
                    media="(min-width: 75em)"
                    srcSet="
                      /public/t-banner@0.5x.png?ver=2024.1.6
                    "
                  />
                  <source
                    media="(min-width: 60em)"
                    srcSet="
                      /public/t-banner@0.33x.png?ver=2024.1.6
                    "
                  />
                  <source
                    media="(min-width: 15em)"
                    srcSet="
                      /public/t-banner@0.25x.png?ver=2024.1.6
                    "
                  />
                  <a
                    href="/menu/"
                    title="Ontario’s Best Pizza — Order Online or Call 1 (866) 310-4466"
                  >
                    <img
                      src="/tandoori-chicken-banner.png?ver=2024.1.6"
                      alt="Ontario’s Best Pizza — Order Online or Call 1 (866) 310-4466"
                      className="cover__image"
                    />
                  </a>
                </picture>
              </div>
            </div>
            <button
              className="flickity-button flickity-prev-next-button previous"
              type="button"
              aria-label="Previous"
            >
              <svg className="flickity-button-icon" viewBox="0 0 100 100">
                <path
                  d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                  className="arrow"
                ></path>
              </svg>
            </button>
            <button
              className="flickity-button flickity-prev-next-button next"
              type="button"
              aria-label="Next"
            >
              <svg className="flickity-button-icon" viewBox="0 0 100 100">
                <path
                  d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                  className="arrow"
                  transform="translate(100, 100) rotate(180) "
                ></path>
              </svg>
            </button>
            <ol className="flickity-page-dots">
              <li className="dot" aria-label="Page dot 1"></li>
              <li
                className="dot is-selected"
                aria-label="Page dot 2"
                aria-current="step"
              ></li>
              <li className="dot" aria-label="Page dot 3"></li>
              <li className="dot" aria-label="Page dot 4"></li>
              <li className="dot" aria-label="Page dot 5"></li>
            </ol>
          </div>
          <a href="/menu/" className="hero-cta--mobile" title="Order Online">
            <span className="navbar-cta--desktop__link--button__icon">
              Order Online
            </span>
          </a>
          <div className="hero-cta--desktop">
            <div className="container container--lg container--slim--y">
              <div className="flexrow flexrow--vert-center flexrow--nowrap">
                <div className="flexrow__column">
                  <div className="flexrow__gutter">
                    <span className="hero-cta--desktop__daily-deal hero-cta--desktop__daily-deal--large">
                      Pizzas, wings, and more!{" "}
                    </span>
                    <span className="hero-cta--desktop__default hero-cta--desktop__default--small">
                      Check out all the best Gino’s Pizza offers and promotions!
                    </span>
                  </div>
                </div>
                <div className="flexrow__column flexrow__column--shrink">
                  <div className="flexrow__gutter">
                    <a
                      href="/menu/"
                      title="View Menu"
                      rel="nofollow"
                      className="button button--large button--negative"
                    >
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="locationFinder" className="text--center">
          <div className="container">
            <h1 className="title title--large caps">
              Over 100 Locations to Serve You!
            </h1>
            <p>
              Select a city from our location finder to locate your closest
              Gino’s Pizza, get directions, and load a list of available menu
              items.
            </p>
            <form
              id="locationSearch"
              method="post"
              action="/locations/"
              className="form form--inline form--location"
            >
              <div className="form__wrap form__wrap--search">
                <select size={1} className="form__wrap__select" rel="required">
                  <option value="-1" disabled={false} selected={false}>
                    Select a Location *
                  </option>
                  {locations.map((location) => (
                    <option value={location} key={location}>
                      {location.replace(/(?:^|_)(\w)/g, (_, char) =>
                        char.toUpperCase()
                      )}
                    </option>
                  ))}
                </select>
              </div>
              <button
                id="locationCitiesButton"
                className="form__button form__button--icon form__button--icon--search"
                title="Search"
              >
                Search
              </button>
              <div className="flexrow mt-15">
                <div className="form__response"></div>
              </div>
            </form>
          </div>
        </section>
        <div className="container container--slim--y">
          <hr className="gutter--top--none gutter--bottom--none" />
        </div>
        <section id="newsletterSignUp">
          <div className="container">
            <div className="widget widget--red">
              <div className="widget__gutter">
                <div className="flexrow flexrow--vert-center">
                  <div className="flexrow__column flexrow__column--newsletter--icon">
                    <div className="flexrow__gutter">
                      Get incredible deals and the latest tasty news directly to
                      your inbox when you sign up for Gino’s exclusive eClub!
                    </div>
                  </div>
                  <div className="flexrow__column flexrow__column--newsletter--cta">
                    <div className="flexrow__gutter">
                      <a
                        href="/ginos-pizza-eclub/"
                        title="Sign up Today"
                        rel="nofollow"
                        className="button button--large button--negative"
                      >
                        Sign up Today
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container container--slim--y">
          <hr className="gutter--top--none gutter--bottom--none" />
        </div>
        <section id="franchiseSignUp">
          <div className="container">
            <div className="flexrow">
              <div className="flexrow__column flexrow__column--three-quarters">
                <div className="flexrow__gutter">
                  <span className="title title--section gutter--bottom--none">
                    Become a Part of the Gino’s Family
                  </span>
                  <h2 className="title title--section-sub">
                    Franchises Available in Your Area!
                  </h2>
                  <div className="flexrow flexrow--nested">
                    <div className="flexrow__column flexrow__column--two-thirds">
                      <div className="flexrow__gutter">
                        <p>
                          With over 100 locations, Gino’s Pizza is one of
                          Ontario’s most popular pizza restaurants. We’re always
                          looking for passionate Franchisees to join our team.
                          Becoming a franchisee is an easy and straightforward
                          process. You’ll work with our franchise team to get up
                          and running in record time with a minimum of expense
                          and stress.
                        </p>
                        <a
                          href="/franchising/"
                          className="button button--default"
                          title="Learn More"
                          rel="nofollow"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--one-third">
                      <div className="flexrow__gutter">
                        <ul className="list--checked">
                          <li>Training and Mentorship</li>
                          <li>Turn-key Construction Suppor</li>
                          <li>Comprehensive Local Marketin</li>
                          <li>Supply Chain &amp; Logistic</li>
                          <li>And Much More</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flexrow__column flexrow__column--one-quarter">
                <div className="flexrow__gutter">
                  <img
                    src="/pizza-boxes.png"
                    alt="Gino's Pizza Inc."
                    className="franchise__boxes"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Main;
