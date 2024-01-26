import AuthModal from "../components/auth_modal";
import Breadcrumb from "../components/breadcrumb";

function OurStory() {
  return (
    <div className="container container--slim--y">
      <Breadcrumb title="Out Story" href="/our-story/" />
      <div className="flexrow">
        <div className="flexrow__column flexrow__column--content">
          <div className="flexrow__gutter">
            <div className="flexrow__column--content__backdrop">
              <div className="flexrow__gutter flexrow__gutter--double">
                <blockquote className="testimonial">
                  <div className="testimonial__wrapper">
                    <p className="testimonial__quote">
                      Welcome! It gives me great pleasure to welcome you to our
                      Gino’s Pizza website. Here, you will find an overview of
                      our operations and I hope the answers to any questions you
                      may have about our company. I am sure that you will notice
                      the diversity of our value-added products as well as the
                      entrepreneurial spirit of our people, a direct result of
                      the importance we give to the human factor within our
                      organization. Make yourself at home and feel free to
                      contact us if you require any additional information.
                    </p>
                    <p className="testimonial__quote">Buon Appetito!</p>
                    <span className="testimonial__author"> Chef Gino </span>
                  </div>
                </blockquote>
                <hr />
                <h1 className="title title--large text--center">Our Story</h1>
                <div className="timeline">
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">The Beginning</h2>
                        <h3 className="timeline__year">1981</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            First location was opened up in the Hopedale Mall,
                            Oakville, ON.
                          </p>
                          <p>
                            <img
                              src="/original-logo.jpg"
                              alt="Gino's Pizza Inc. Original Logo"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">241 Pizza</h2>
                        <h3 className="timeline__year">1997</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            Gino’s Pizza sold co-company 241 Pizza to Afton Food
                            Group at 140 units in Ontario.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">Panino</h2>
                        <h3 className="timeline__year">1998</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            Hot Italian Sandwiches (Panino) were Introduced at a
                            number of locations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">World Record</h2>
                        <h3 className="timeline__year">1998</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            Achieved World’s longest pizza at our location at
                            160 University Ave, Waterloo, Ontario. The pizza
                            measured in at a record 176 feet, 2 inches!
                          </p>
                          <p>
                            <img
                              src="/largest-pizza2.jpg"
                              alt="World’s longest pizza"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">World Record</h2>
                        <h3 className="timeline__year">1999</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            Achieved World’s longest pizza at our location at
                            860 Chemong Rd, Peterborough, Ontario. The pizza
                            measured in at 217 feet, 10 inches!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">Gourmet Toppings</h2>
                        <h3 className="timeline__year">2003</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>Exclusive gourmet toppings introduceds!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">Call Centre</h2>
                        <h3 className="timeline__year">2007</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>Centralized call centre established</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">Rebrand</h2>
                        <h3 className="timeline__year">2007</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>Gino&apos;s Pizza gets a brand makeover!</p>
                          <p>
                            <img src="/oldlogo-black.jpg" alt="New Logo" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">Soccer!</h2>
                        <h3 className="timeline__year">2007</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            Gino&apos;s Sponsors Soccer clubs throughout Ontario
                          </p>
                          <p>
                            <img
                              src="/soccer-team.jpg"
                              alt="Gino's Sponsors Soccer"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">60+ Locations</h2>
                        <h3 className="timeline__year">2008</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>60 locations established in Ontario!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">New Logo</h2>
                        <h3 className="timeline__year">2009</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>Established NEW Gino&apos;s Pizza logo!</p>
                          <p>
                            <img src="/logo.png" alt="Current Logo" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">Distribution</h2>
                        <h3 className="timeline__year">2010</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            Warehouse distribution centre established. A fleet
                            of branded trucks deliver food and supplies from our
                            distribution centre to the restaurants.
                          </p>
                          <p>
                            <img src="/truck.jpg" alt="Distribution" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">Slice and Dice</h2>
                        <h3 className="timeline__year">2010</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            Slice and Dice campaign launched! customers have a
                            chance to WIN instant prizes. The grand prize being
                            PIZZA FOR LIFE.
                          </p>
                          <p>
                            <img
                              src="/slice-and-dice.jpg"
                              alt="Slice and Dice"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">Maple Leafs</h2>
                        <h3 className="timeline__year">2011</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            Partnered up with Toronto Maple Leafs, Luke Schenn
                            as he delivered a pizza order for a very lucky
                            customer
                          </p>
                          <p>
                            <img src="/schenn.jpg" alt="Luke Schenn" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">30 Years</h2>
                        <h3 className="timeline__year">2011</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>Gino’s Pizza celebrates its 30th anniversary!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">
                          Panzerotto &amp; Wing Machine
                        </h2>
                        <h3 className="timeline__year">2011</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>Acquired Panzerotto Pizza and Wing Machine</p>
                          <p>
                            <img
                              src="/panzo_wing.jpg"
                              alt="Panzerotto &amp; Wing Machine"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">MADD Canada</h2>
                        <h3 className="timeline__year">2011</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            Partner with MADD (Mothers Against Drunk Driving)
                            and raised $10,000
                          </p>
                          <p>
                            <img src="/madd-logo.jpg" alt="MADD Canada" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">MADD Canada</h2>
                        <h3 className="timeline__year">2012</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>
                            Continued Partnership with MADD and raised $25,000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--timeline--date">
                      <div className="flexrow__gutter">
                        <h2 className="timeline__title">100+ Locations</h2>
                        <h3 className="timeline__year">2013</h3>
                      </div>
                    </div>
                    <div className="flexrow__column flexrow__column--timeline--content">
                      <div className="flexrow__gutter">
                        <div className="timeline__content">
                          <p>100 locations established in Ontario!</p>
                        </div>
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
            <div className="flexrow__column--sidebar__backdrop flexrow__column--sidebar__backdrop--with-header">
              <div className="flexrow__gutter flexrow__gutter--double">
                <header className="widget__header">Join Gino’s eClub</header>
                <p>
                  <strong> Sign up for our eClub </strong> and receive exclusive
                  offers directly to your inbox.
                </p>
                <a
                  href="/ginos-pizza-eclub/"
                  className="button button--default"
                >
                  Join Now
                </a>
              </div>
            </div>
            <div className="flexrow__column--sidebar__backdrop flexrow__column--sidebar__backdrop--with-header">
              <div className="flexrow__gutter flexrow__gutter--double">
                <header className="widget__header widget__header--icon widget__header--icon--location">
                  Order now from your nearest store
                </header>
                <p className="text--sm">
                  Select a city from our location finder to find the closest
                  Gino&apos;s Pizza or order online!
                </p>
                <form
                  id="locationSearch"
                  method="post"
                  action="/locations/"
                  className="form form--inline form--location form--location--full"
                >
                  <div className="form__wrap form__wrap--search">
                    <select
                      size={1}
                      className="form__wrap__select"
                      rel="required"
                    >
                      <option value="-1" disabled={false} selected={false}>
                        Select a Location *
                      </option>
                      <option value="ajax">Ajax</option>
                      <option value="ancaster">Ancaster</option>
                      <option value="bradford">Bradford</option>
                      <option value="brampton">Brampton</option>
                      <option value="brantford">Brantford</option>
                      <option value="burlington">Burlington</option>
                      <option value="cambridge">Cambridge</option>
                      <option value="elmira">Elmira</option>
                      <option value="etobicoke">Etobicoke</option>
                      <option value="grimsby">Grimsby</option>
                      <option value="guelph">Guelph</option>
                      <option value="hamilton">Hamilton</option>
                      <option value="ingersoll">Ingersoll</option>
                      <option value="innisfil">Innisfil</option>
                      <option value="kitchener">Kitchener</option>
                      <option value="london">London</option>
                      <option value="milton">Milton</option>
                      <option value="mississauga">Mississauga</option>
                      <option value="newmarket">Newmarket</option>
                      <option value="niagara+falls">Niagara Falls</option>
                      <option value="north+york">North York</option>
                      <option value="oakville">Oakville</option>
                      <option value="oshawa">Oshawa</option>
                      <option value="pickering">Pickering</option>
                      <option value="scarborough">Scarborough</option>
                      <option value="smithville">Smithville</option>
                      <option value="st+catharines">St Catharines</option>
                      <option value="stoney+creek">Stoney Creek</option>
                      <option value="stratford">Stratford</option>
                      <option value="sudbury">Sudbury</option>
                      <option value="tecumseh">Tecumseh</option>
                      <option value="thunder+bay">Thunder Bay</option>
                      <option value="tillsonburg">Tillsonburg</option>
                      <option value="toronto">Toronto</option>
                      <option value="waterdown">Waterdown</option>
                      <option value="waterford">Waterford</option>
                      <option value="waterloo">Waterloo</option>
                      <option value="welland">Welland</option>
                      <option value="whitby">Whitby</option>
                      <option value="woodbridge">Woodbridge</option>
                      <option value="woodstock">Woodstock</option>
                    </select>
                  </div>
                  <button
                    id="locationCitiesButton"
                    className="form__button form__button--icon form__button--icon--search"
                    title="Search"
                  >
                    Search
                  </button>
                  <div className="flexrow" style={{ marginTop: 15 }}>
                    <div className="form__response"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
