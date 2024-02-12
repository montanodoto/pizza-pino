import { SecondaryButton } from "../button";

type OrderNowContentProps = {
  on_continue: (props: { selected_address: string }) => void;
  modal_type: string;
  on_modal_close: () => any;
};

export default function OrderNowContent({
  modal_type,
  on_continue,
}: OrderNowContentProps) {
  if (modal_type !== "order_now") {
    return null;
  }

  return (
    <>
      <p style={{ textAlign: "left", paddingLeft: 5 }}>
        Place an order for
        <strong> Sunday, January 28th at 2:42 PM</strong>
      </p>
      <SecondaryButton on_click={on_continue} />
    </>
  );
}
