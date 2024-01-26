function AuthModal() {
  return (
    <>
      <div className="modal modal--active modal--visible" id="userAuthModal">
        <div className="modal__content">
          <div className="container container--modal">
            <div className="modal__box">
              <span className="modal__close close">Close</span>
              <div className="widget widget--modal">
                <div className="flexrow">
                  <div className="flexrow__column flexrow__column--full">
                    <div className="flexrow__gutter flexrow__gutter--modal">
                      <h1 className="title title--large title--red">
                        Online Pizza Delivery Menu Sign-In
                      </h1>
                      <hr />
                      <div
                        id="login"
                        className="flexrow flexrow--nested gutter--bottom--none gutter--top--none"
                      >
                        <div className="flexrow__column flexrow__column--one-third">
                          <div className="flexrow__gutter flexrow__gutter--modal-auth">
                            <h2 className="title title--section title--bold">
                              New Registration
                            </h2>
                            <p>
                              Enter your phone number and address to create a
                              new account and order online.
                            </p>
                            <form
                              className="form"
                              id="userRegistration"
                              method="post"
                              autoComplete="on"
                              rel="modalResponse"
                            >
                              <div className="form__wrap form__wrap--gutter">
                                <label
                                  className="form__wrap__label"
                                  htmlFor="userRegistrationPhone"
                                >
                                  Phone Number *{" "}
                                </label>
                                <input
                                  type="tel"
                                  id="userRegistrationPhone"
                                  name="userRegistrationPhone"
                                  className="form__wrap__field form__wrap__field--with-label form__wrap__field--phone"
                                  rel="required"
                                  autoComplete="tel"
                                />
                              </div>
                              <button
                                id="userRegistrationButton"
                                className="form__button button button--default"
                                title="Join Now"
                                type="submit"
                              >
                                Join Now
                              </button>
                              <div className="text--sm gutter--top--half">
                                &nbsp;
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="flexrow__column flexrow__column--one-third">
                          <div className="flexrow__gutter flexrow__gutter--modal-auth">
                            <h2 className="title title--section title--bold">
                              Returning Customers
                            </h2>
                            <p>
                              Already have an account? Login below to order
                              online.
                            </p>
                            <form
                              className="form"
                              id="userLogin"
                              method="post"
                              rel="modalResponse"
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
                                <a
                                  href="/account/recover/"
                                  title="Forgot Your Password?"
                                >
                                  Forgot Your Password?
                                </a>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="flexrow__column flexrow__column--one-third">
                          <div className="flexrow__gutter flexrow__gutter--modal-auth">
                            <h2 className="title title--section title--bold">
                              Guest Menu
                            </h2>
                            <p>
                              Just curious? Feel free to surf our menu and see
                              what&apos;s available at your local store.
                            </p>
                            <form
                              className="form"
                              id="userGuest"
                              method="post"
                              autoComplete="on"
                              rel="modalResponse"
                            >
                              <div className="form__wrap form__wrap--gutter">
                                <label
                                  className="form__wrap__label"
                                  htmlFor="postal"
                                >
                                  Postal Code *{" "}
                                </label>
                                <input
                                  type="text"
                                  id="postal"
                                  name="postal"
                                  className="form__wrap__field form__wrap__field--with-label form__wrap__field--postal"
                                  rel="required"
                                  autoComplete="postal-code"
                                />
                              </div>
                              <button
                                id="userGuestButton"
                                className="form__button button button--secondary"
                                title="Guest Access"
                                type="submit"
                              >
                                Guest Access
                              </button>
                              <div className="text--sm gutter--top--half">
                                &nbsp;
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div
                        id="modalResponse"
                        className="form__response form__response--widget gutter--top--half gutter--bottom--none hidden--always"
                      ></div>
                      <form
                        id="userProfile"
                        className="flexrow flexrow--nested flexrow--hidden gutter--bottom--none gutter--top--none"
                        autoComplete="on"
                        method="post"
                      >
                        <div className="flexrow__column flexrow__column--full">
                          <div className="flexrow__gutter">
                            <p>
                              Complete this short form to create your account.
                              Already have an account?
                              <a href="menu" title="Log In" id="registerCancel">
                                Click here to login
                              </a>
                              .
                            </p>
                            <ul
                              className="accordion accordion--default gutter--bottom"
                              id="profileAccordion"
                            >
                              <li className="accordion--default__item">
                                <a
                                  href="#"
                                  title="User Information"
                                  rel="userContent"
                                  className="accordion--default__item__link open"
                                  id="userLink"
                                >
                                  User Information{" "}
                                </a>
                                <span
                                  className="accordion--menu__item__content accordion--menu__item__content--nomargin visible"
                                  id="userContent"
                                  style={{ display: "block" }}
                                >
                                  <div className="flexrow">
                                    <div className="flexrow__column flexrow__column--one-third">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationFname"
                                          >
                                            First Name *{" "}
                                          </label>
                                          <input
                                            type="text"
                                            id="userRegistrationFname"
                                            name="userRegistrationFname"
                                            className="form__wrap__field form__wrap__field--with-label form__required"
                                            rel="required"
                                            autoComplete="given-name"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-third">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationLname"
                                          >
                                            Last Name *{" "}
                                          </label>
                                          <input
                                            type="text"
                                            id="userRegistrationLname"
                                            name="userRegistrationLname"
                                            className="form__wrap__field form__wrap__field--with-label form__required"
                                            rel="required"
                                            autoComplete="family-name"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-third">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationPhone2"
                                          >
                                            Phone Number *{" "}
                                          </label>
                                          <input
                                            type="tel"
                                            id="userRegistrationPhone2"
                                            name="userRegistrationPhone2"
                                            className="form__wrap__field form__wrap__field--with-label form__required form__wrap__field--phone"
                                            rel="required"
                                            autoComplete="tel"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-third">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationEmail"
                                          >
                                            Email Address *{" "}
                                          </label>
                                          <input
                                            type="email"
                                            id="userRegistrationEmail"
                                            name="userRegistrationEmail"
                                            className="form__wrap__field form__wrap__field--with-label form__required"
                                            rel="required"
                                            autoComplete="email"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-third">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationPassword"
                                          >
                                            Password *{" "}
                                          </label>
                                          <input
                                            type="password"
                                            id="userRegistrationPassword"
                                            name="userRegistrationPassword"
                                            className="form__wrap__field form__wrap__field--with-label form__required"
                                            rel="required"
                                            autoComplete="new-password"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-third">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationPasswordConfirm"
                                          >
                                            Confirm Password *{" "}
                                          </label>
                                          <input
                                            type="password"
                                            id="userRegistrationPasswordConfirm"
                                            name="userRegistrationPasswordConfirm"
                                            className="form__wrap__field form__wrap__field--with-label form__required"
                                            rel="required"
                                            autoComplete="new-password"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </li>
                              <li className="accordion--default__item">
                                <a
                                  href="#"
                                  title="User Information"
                                  rel="addressContent"
                                  className="accordion--default__item__link"
                                  id="addressLink"
                                >
                                  Address Information{" "}
                                </a>
                                <span
                                  className="accordion--menu__item__content accordion--menu__item__content--nomargin"
                                  id="addressContent"
                                  style={{ display: "block" }}
                                >
                                  <div className="flexrow">
                                    <div className="flexrow__column flexrow__column--one-quarter">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap form__wrap__select-wrapper">
                                          <select
                                            size={1}
                                            id="userRegistrationHomeType"
                                            name="userRegistrationHomeType"
                                            className="form__wrap__select form__required"
                                            rel="required"
                                          >
                                            <option value="10">House</option>
                                            <option value="15">
                                              Apartment
                                            </option>
                                            <option value="20">
                                              Townhouse
                                            </option>
                                            <option value="25">Office</option>
                                            <option value="30">Other</option>
                                            <option value="35">Hotel</option>
                                            <option value="40">
                                              University
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-quarter">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationAddressNum"
                                          >
                                            Street Number{" "}
                                          </label>
                                          <input
                                            type="text"
                                            id="userRegistrationAddressNum"
                                            name="userRegistrationAddressNum"
                                            className="form__wrap__field form__wrap__field--with-label form__required"
                                            autoComplete="address-line1"
                                            rel="required"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-quarter">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationAddress2"
                                          >
                                            Street Name{" "}
                                          </label>
                                          <input
                                            type="text"
                                            id="userRegistrationAddress2"
                                            name="userRegistrationAddress2"
                                            className="form__wrap__field form__wrap__field--with-label form__required"
                                            autoComplete="address-line2"
                                            rel="required"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-quarter">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationAddressApt"
                                          >
                                            Apt/Suite{" "}
                                          </label>
                                          <input
                                            type="text"
                                            id="userRegistrationAddressApt"
                                            name="userRegistrationAddressApt"
                                            className="form__wrap__field form__wrap__field--with-label"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-quarter">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationCity"
                                          >
                                            City{" "}
                                          </label>
                                          <input
                                            type="text"
                                            id="userRegistrationCity"
                                            name="userRegistrationCity"
                                            className="form__wrap__field form__wrap__field--with-label form__required"
                                            rel="required"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-quarter">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap form__wrap__select-wrapper">
                                          <select
                                            size={1}
                                            id="userRegistrationProvince"
                                            name="userRegistrationProvince"
                                            className="form__wrap__select form__required"
                                          >
                                            <option value="-1" disabled={false}>
                                              Select a Province
                                            </option>
                                            <option value="ON" selected={false}>
                                              Ontario
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-quarter">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationPostal"
                                          >
                                            Postal Code{" "}
                                          </label>
                                          <input
                                            type="text"
                                            id="userRegistrationPostal"
                                            name="userRegistrationPostal"
                                            className="form__wrap__field form__wrap__field--with-label form__required"
                                            autoComplete="postal-code"
                                            rel="required"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--one-quarter">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationEntry"
                                          >
                                            Entry Code{" "}
                                          </label>
                                          <input
                                            type="text"
                                            id="userRegistrationEntry"
                                            name="userRegistrationEntry"
                                            className="form__wrap__field form__wrap__field--with-label"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flexrow__column flexrow__column--account">
                                      <div className="flexrow__gutter flexrow__gutter--slim-y--half">
                                        <div className="form__wrap form__wrap--textarea">
                                          <label
                                            className="form__wrap__label"
                                            htmlFor="userRegistrationInstruct"
                                          >
                                            Delivery Notes / Instructions{" "}
                                          </label>
                                          <textarea
                                            id="userRegistrationInstruct"
                                            maxLength={75}
                                            name="userRegistrationInstruct"
                                            className="form__wrap__field form__wrap__field--textarea form__wrap__field--with-label"
                                          ></textarea>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </li>
                            </ul>
                            <button
                              id="userRegisterProfile"
                              className="form__button button button--default"
                              title="Create Account"
                              type="submit"
                            >
                              Create Account
                            </button>
                            <div className="form__response form__response--widget gutter--top--half gutter--bottom--none hidden--always"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthModal;
