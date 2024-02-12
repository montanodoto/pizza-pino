"use client";
import {
  ReactNode,
  useRef,
  useEffect,
  useState,
  createContext,
  useMemo,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import DeliveryModal from "./delivery";
import OrderModal from "./order";
type MODAL_CONTENT_TYPE = "DELIVERY" | "ORDER" | "";

type ModalProps = {
  title?: string;
};

export default function Modal({
  title = "Online Pizza Delivery Menu Sign-In",
}: ModalProps) {
  const [is_open, set_is_open] = useState(true);
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  const [modal_content_type, set_modal_content_type] =
    useState<MODAL_CONTENT_TYPE>("DELIVERY");

  const on_modal_change = useCallback(
    (type: MODAL_CONTENT_TYPE) => set_modal_content_type(type),
    []
  );

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("body");
    setMounted(true);
  }, []);

  const on_modal_close = () => set_is_open(false);
  if (!is_open) {
    return null;
  }

  return mounted && ref.current
    ? createPortal(
        <div className="modal modal--active modal--visible">
          <div className="modal__content">
            <div className="container--modal container">
              <div className="modal__box">
                <span className="modal__close close" onClick={on_modal_close}>
                  Close
                </span>
                <div className="widget widget--modal">
                  <div className="flexrow">
                    <div className="flexrow__column flexrow__column--full">
                      <div className="flexrow__gutter flexrow__gutter--modal">
                        <h1 className="title title--large title--red">
                          {title}
                        </h1>
                        <hr />
                        <p className="mb-6 text-gray-500">
                          Tell us where you want your food, and when you would
                          like us to have it ready for you.
                        </p>
                        {modal_content_type === "DELIVERY" && (
                          <DeliveryModal
                            on_modal_close={on_modal_close}
                            on_continue={() => on_modal_change("ORDER")}
                          />
                        )}
                        {modal_content_type === "ORDER" && (
                          <OrderModal
                            on_modal_close={on_modal_close}
                            on_continue={() => on_modal_change("ORDER")}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        ref.current
      )
    : null;
}
