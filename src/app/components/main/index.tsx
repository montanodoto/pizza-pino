/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import initial_locations from "./data";
import Image from "next/image";

import "./index.css";
import Hero from "../hero";

const pictures = [
  "/10kGiftCard.png?ver=2024.1.6",
  "/NowOpenBaylySt.png?ver=2024.1.6",
  "/MustangWinner.png?ver=2024.1.6",
  "/OpeningSoon2024.png?ver=2024.1.6",
  "/tandoori-chicken-banner.png?ver=2024.1.6",
];

function Main() {
  const [locations, setLocations] = useState(initial_locations);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slide_interval = setInterval(
      () =>
        setCurrentSlide((prevSlide) =>
          currentSlide === 4 ? 0 : prevSlide + 1
        ),
      2000
    );

    return () => {
      clearInterval(slide_interval);
    };
  }, [currentSlide]);

  const handleSlide = (direction: "next" | "previous") => {
    setCurrentSlide((prevSlide) => {
      if (direction === "next") {
        return (prevSlide + 1) % pictures.length;
      } else {
        return (prevSlide - 1 + pictures.length) % pictures.length;
      }
    });
  };

  return (
    <article>
      <div className="container">
        <div id="carousel" className="flickity-enabled" tabIndex={0}>
          <div className="flickity-viewport" style={{ touchAction: "pan-y" }}>
            <div className="flickity-slider">
              {pictures.map((src, index) => (
                <Image
                  src={src}
                  key={index}
                  alt=""
                  fill={true}
                  className={`slider-image ${
                    index === currentSlide ? "active" : ""
                  }`}
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                  }}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => handleSlide("previous")}
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
            onClick={() => handleSlide("next")}
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
            {pictures.map((_, index) => (
              <li
                key={index}
                className={`dot ${index === currentSlide ? "is-selected" : ""}`}
                aria-label={`Page dot ${index + 1}`}
                aria-current={index === currentSlide ? "step" : undefined}
              ></li>
            ))}
          </ol>
        </div>
        {/* <Hero /> */}
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
                  <option value="-1" disabled={false}>
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
      </div>
    </article>
  );
}

export default Main;
