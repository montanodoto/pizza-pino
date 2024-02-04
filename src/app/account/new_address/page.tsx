"use client";

import { useCallback, useState } from "react";

import Breadcrumb from "@/app/components/breadcrumb";
import Field from "@/app/components/field";

import user_info_fields from "./user_info_fields";

export default function New_Address() {
  const [fields, set_fields] = useState(user_info_fields);
  const [active_tab, set_active_tab] = useState("user-info");

  const on_field_change = useCallback((field: any) => set_fields, []);
  const [breadcrumb_items] = useState([
    { title: "Account", href: "/account/" },
    { title: "Wellcome Back ! User Name" },
  ]);

  return (
    <div className="container--slim--y container">
      <Breadcrumb breadcrumb_items={breadcrumb_items} />

      <div className="container--slim--y container">
        <div className="flexrow">
          <div className="flexrow__column flexrow__column--content">
            <div className="flexrow__gutter">
              <div className="flexrow__column--content__backdrop">
                <div className="flexrow__gutter flexrow__gutter--double">
                  <h1 className="title title--large title--trim-bottom">
                    Welcome Back, Gabriel
                  </h1>
                  <h2 className="title title--large--subtitle gutter--bottom--none">
                    Change or add to your Gino's Pizza Inc. account information.
                  </h2>
                  <hr />
                  <ul
                    className="accordion accordion--default"
                    id="profileAccordion"
                  >
                    <li className="accordion--default__item">
                      <a
                        href="#"
                        title="User Information"
                        rel="userContent"
                        className={`accordion--default__item__link ${active_tab === "user-info" && "open"}`}
                        id="userLink"
                        onClick={() => set_active_tab("user-info")}
                      >
                        User Information{" "}
                      </a>
                      <span
                        className={`accordion--menu__item__content accordion--menu__item__content--nomargin ${active_tab === "user-info" && "visible"}`}
                        id="userContent"
                      >
                        <div className="flexrow flexrow--nested">
                          {fields.map((field) => (
                            <Field
                              key={field.label}
                              on_change={on_field_change}
                              {...field}
                            />
                          ))}
                        </div>

                        <div className="flexrow__gutter">
                          <button
                            id="userUpdateProfile"
                            className="form__button button button--default button--small gutter--bottom--half"
                            title="Update Account Info"
                            type="button"
                            rel="profileResponse"
                          >
                            Update Account Info{" "}
                          </button>
                        </div>
                      </span>
                    </li>
                    <li className="accordion--default__item">
                      <a
                        href="#"
                        title="User Information"
                        rel="addressContent"
                        onClick={() => set_active_tab("address")}
                        className={`accordion--default__item__link ${active_tab === "address" && "open"}`}
                        id="addressLink"
                      >
                        Addresses
                      </a>
                    </li>
                    <li className="accordion--default__item">
                      <a
                        href="#"
                        title="User Information"
                        rel="passwordContent"
                        onClick={() => set_active_tab("change-password")}
                        className={`accordion--default__item__link ${active_tab === "change-password" && "open"}`}
                        id="passwordLink"
                      >
                        Change Password
                      </a>
                    </li>
                  </ul>
                  <div
                    id="profileResponse"
                    className="form__response form__response--widget gutter--top--half gutter--bottom--none hidden--always"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
