function Hero() {
  return (
    <div className="container">
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
  );
}

export default Hero;
