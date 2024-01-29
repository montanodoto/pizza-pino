function transformPhoneNumber(input: string) {
  const phone_num = Number(input);

  const pattern = /\((\d{3})\) (\d{3})-(\d{4})/;
  // You can modify the replacement pattern as needed
  return phone_num.toString().replace(pattern, "($1) $2-$3");
}

export default function DeliverySignInModal() {
  return (
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
                    <div
                      id="login"
                      className="flexrow flexrow--nested gutter--bottom--none gutter--top--none flexrow--hidden"
                    >
                      <div className="flexrow__column flexrow__column--one-third">
                        <div className="flexrow__gutter flexrow__gutter--modal-auth">
                          <h2 className="title title--section title--bold">
                            New Registration
                          </h2>
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
                                Forgot Your Password?``
                              </a>
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
                                          <option value="15">Apartment</option>
                                          <option value="20">Townhouse</option>
                                          <option value="25">Office</option>
                                          <option value="30">Other</option>
                                          <option value="35">Hotel</option>
                                          <option value="40">University</option>
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
                    <div className="flexrow flexrow--nested">
                      <div className="flexrow__column flexrow__column__full">
                        <div className="flexrow__gutter">
                          <p>
                            Tell us where you want your food, and when you would
                            like us to have it ready htmlFor you.
                          </p>
                          <div className="flexrow flexrow--nested">
                            <div className="flexrow__column flexrow__column--half">
                              <div className="flexrow__gutter">
                                <button
                                  type="button"
                                  id="methodDelivery"
                                  className="button button--default button--large display--block"
                                  rel="D"
                                >
                                  Delivery
                                </button>
                              </div>
                            </div>
                            <div className="flexrow__column flexrow__column--half">
                              <div className="flexrow__gutter">
                                <button
                                  type="button"
                                  id="methodPickup"
                                  className="button button--default button--large display--block"
                                  rel="P"
                                >
                                  Pick Up
                                </button>
                              </div>
                            </div>
                          </div>
                          <form method="post" className="flexrow--hidden">
                            <div className="flexrow">
                              <div className="flexrow__column flexrow__column--half flexrow__column--shrink">
                                <div className="flexrow__gutter">
                                  <div className="form__wrap form__wrap__select-wrapper">
                                    <select
                                      className="form__wrap__select"
                                      size={1}
                                      rel="required"
                                    >
                                      <option
                                        value=""
                                        selected={true}
                                        disabled={true}
                                      >
                                        Select a Delivery Address
                                      </option>
                                      <option value="addnew">
                                        + Add a New Delivery Address
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              id="orderUserDelivery"
                              className="button button--text button--text--order"
                              rel="orderProfileList"
                            >
                              Continue
                            </button>
                          </form>
                          <form method="post" className="flexrow--hidden">
                            <div className="flexrow flexrow--flex-end">
                              <div className="flexrow__column flexrow__column--one-quarter flexrow__column--shrink">
                                <div className="flexrow__gutter">
                                  <div className="form__wrap form__wrap__select-wrapper">
                                    <select
                                      className="form__wrap__select"
                                      size={1}
                                      rel="required"
                                    >
                                      <option
                                        value=""
                                        selected={true}
                                        disabled={true}
                                      >
                                        Select a City
                                      </option>
                                      <option value="AJAX">AJAX</option>
                                      <option value="ANCASTER">ANCASTER</option>
                                      <option value="BRADFORD">BRADFORD</option>
                                      <option value="BRAMPTON">BRAMPTON</option>
                                      <option value="BRANTFORD">
                                        BRANTFORD
                                      </option>
                                      <option value="BURLINGTON">
                                        BURLINGTON
                                      </option>
                                      <option value="CAMBRIDGE">
                                        CAMBRIDGE
                                      </option>
                                      <option value="ELMIRA">ELMIRA</option>
                                      <option value="ETOBICOKE">
                                        ETOBICOKE
                                      </option>
                                      <option value="GRIMSBY">GRIMSBY</option>
                                      <option value="GUELPH">GUELPH</option>
                                      <option value="HAMILTON">HAMILTON</option>
                                      <option value="INGERSOLL">
                                        INGERSOLL
                                      </option>
                                      <option value="INNISFIL">INNISFIL</option>
                                      <option value="KITCHENER">
                                        KITCHENER
                                      </option>
                                      <option value="LONDON">LONDON</option>
                                      <option value="MILTON">MILTON</option>
                                      <option value="MISSISSAUGA">
                                        MISSISSAUGA
                                      </option>
                                      <option value="NEWMARKET">
                                        NEWMARKET
                                      </option>
                                      <option value="NIAGARA FALLS">
                                        NIAGARA FALLS
                                      </option>
                                      <option value="NORTH YORK">
                                        NORTH YORK
                                      </option>
                                      <option value="OAKVILLE">OAKVILLE</option>
                                      <option value="OSHAWA">OSHAWA</option>
                                      <option value="PICKERING">
                                        PICKERING
                                      </option>
                                      <option value="SCARBOROUGH">
                                        SCARBOROUGH
                                      </option>
                                      <option value="SMITHVILLE">
                                        SMITHVILLE
                                      </option>
                                      <option value="ST CATHARINES">
                                        ST CATHARINES
                                      </option>
                                      <option value="STONEY CREEK">
                                        STONEY CREEK
                                      </option>
                                      <option value="STRATFORD">
                                        STRATFORD
                                      </option>
                                      <option value="SUDBURY">SUDBURY</option>
                                      <option value="TECUMSEH">TECUMSEH</option>
                                      <option value="THUNDER BAY">
                                        THUNDER BAY
                                      </option>
                                      <option value="TILLSONBURG">
                                        TILLSONBURG
                                      </option>
                                      <option value="TORONTO">TORONTO</option>
                                      <option value="WATERDOWN">
                                        WATERDOWN
                                      </option>
                                      <option value="WATERFORD">
                                        WATERFORD
                                      </option>
                                      <option value="WATERLOO">WATERLOO</option>
                                      <option value="WELLAND">WELLAND</option>
                                      <option value="WHITBY">WHITBY</option>
                                      <option value="WOODBRIDGE">
                                        WOODBRIDGE
                                      </option>
                                      <option value="WOODSTOCK">
                                        WOODSTOCK
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="flexrow__column flexrow__column--one-quarter flexrow__column--shrink">
                                <div className="flexrow__gutter">
                                  <div className="form__wrap form__wrap__select-wrapper">
                                    <select
                                      className="form__wrap__select"
                                      size={1}
                                      rel="required"
                                    >
                                      <option
                                        value=""
                                        selected={true}
                                        disabled={true}
                                      >
                                        Select a Store
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              id="orderSelectStore"
                              className="button button--text button--text--order button--text--order--pickup"
                              rel="orderProfileList"
                            >
                              Continue
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
