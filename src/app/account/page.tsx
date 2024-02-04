import Breadcrumb from "../components/breadcrumb";

function Account() {
  return (
    <div className="container--slim--y container">
      <Breadcrumb
        breadcrumb_items={[{ title: "Account", href: "/account/" }]}
      />

      <div className="flexrow">
        <div className="flexrow__column flexrow__column--content">
          <div className="flexrow__gutter">
            <div className="flexrow__column--content__backdrop">
              <div className="flexrow__gutter flexrow__gutter--double">
                <h1 className="title title--large title--trim-bottom">
                  Returning Customer Login
                </h1>
                <h2 className="title title--large--subtitle gutter--bottom--none">
                  Already have an account? Login below to order online.
                </h2>
                <hr />
                <form
                  className="form"
                  id="userLogin"
                  method="post"
                  rel="profileResponse"
                >
                  <div className="form__wrap form__wrap--gutter">
                    <label
                      className="form__wrap__label"
                      htmlFor="userLoginEmail"
                    >
                      Email Address *{" "}
                    </label>
                    <input
                      type="email"
                      id="userLoginEmail"
                      name="userLoginEmail"
                      className="form__wrap__field form__wrap__field--with-label"
                      rel="required"
                      autoComplete="email"
                    />
                  </div>
                  <div className="form__wrap form__wrap--gutter">
                    <label
                      className="form__wrap__label"
                      htmlFor="userLoginPass"
                    >
                      Password *{" "}
                    </label>
                    <input
                      type="password"
                      id="userLoginPass"
                      name="userLoginPass"
                      className="form__wrap__field form__wrap__field--with-label"
                      rel="required"
                      autoComplete="current-password"
                    />
                  </div>
                  <button
                    id="userLoginButton"
                    className="form__button button button--default"
                    title="Sign In"
                    type="submit"
                  >
                    Sign In
                  </button>
                  <div className="text--sm gutter--top--half">
                    <a href="/account/recover/" title="Forgot Your Password?">
                      Forgot Your Password?
                    </a>
                  </div>
                </form>
                <div
                  id="profileResponse"
                  className="form__response form__response--widget gutter--top--half gutter--bottom--none hidden--always"
                ></div>
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
                  <div className="flexrow mt-1">
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

export default Account;
