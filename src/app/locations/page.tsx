import Breadcrumb from "../components/breadcrumb";
import options from "./data";

function Locations() {
  return (
    <div className="container container--slim--y">
      <Breadcrumb title="Locations" href="/locations/" />

      <div className="flexrow">
        <div className="flexrow__column flexrow__column--content">
          <div className="flexrow__gutter">
            <div className="flexrow__column--content__backdrop">
              <div className="flexrow__gutter flexrow__gutter--double">
                <h1 className="title title--large">
                  Find Your Nearest Gino’s Pizza
                </h1>
                <p>
                  With over 100 locations to serve you, there’s always a Gino’s
                  Pizza nearby. Select a city from our location finder to locate
                  your closest Gino’s Pizza, get directions, and load a list of
                  available menu items.
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
                      {options.map((o) => (
                        <option key={o.name}>
                          {o.name.replace(/(?:^|_)(\w)/g, (_, char) =>
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
                  <div className="flexrow" style={{ marginTop: 15 }}>
                    <div className="form__response"></div>
                  </div>
                </form>
                <hr />
                <div id="map" className="map__embed">
                  <div>
                    <div>
                      <button
                        draggable="false"
                        aria-label="Keyboard shortcuts"
                        title="Keyboard shortcuts"
                        type="button"
                      ></button>
                    </div>
                    <div
                      tabIndex={0}
                      aria-label="Map"
                      aria-roledescription="map"
                      role="region"
                      aria-describedby="959CF24C-8243-463D-9856-07C540BEAB2B"
                    >
                      <div
                        id="959CF24C-8243-463D-9856-07C540BEAB2B"
                        style={{ display: "none" }}
                      >
                        <div className="LGLeeN-keyboard-shortcuts-view">
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <kbd aria-label="Left arrow">←</kbd>
                                </td>
                                <td aria-label="Move left.">Move left</td>
                              </tr>
                              <tr>
                                <td>
                                  <kbd aria-label="Right arrow">→</kbd>
                                </td>
                                <td aria-label="Move right.">Move right</td>
                              </tr>
                              <tr>
                                <td>
                                  <kbd aria-label="Up arrow">↑</kbd>
                                </td>
                                <td aria-label="Move up.">Move up</td>
                              </tr>
                              <tr>
                                <td>
                                  <kbd aria-label="Down arrow">↓</kbd>
                                </td>
                                <td aria-label="Move down.">Move down</td>
                              </tr>
                              <tr>
                                <td>
                                  <kbd>+</kbd>
                                </td>
                                <td aria-label="Zoom in.">Zoom in</td>
                              </tr>
                              <tr>
                                <td>
                                  <kbd>-</kbd>
                                </td>
                                <td aria-label="Zoom out.">Zoom out</td>
                              </tr>
                              <tr>
                                <td>
                                  <kbd>Home</kbd>
                                </td>
                                <td aria-label="Jump left by 75%.">
                                  Jump left by 75%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <kbd>End</kbd>
                                </td>
                                <td aria-label="Jump right by 75%.">
                                  Jump right by 75%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <kbd>Page Up</kbd>
                                </td>
                                <td aria-label="Jump up by 75%.">
                                  Jump up by 75%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <kbd>Page Down</kbd>
                                </td>
                                <td aria-label="Jump down by 75%.">
                                  Jump down by 75%
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
