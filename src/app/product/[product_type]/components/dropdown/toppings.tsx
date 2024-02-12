export default function Toppings({ selected }: any) {
  return (
    <div
      className={
        selected
          ? "flexrow flexrow--toppings"
          : "flexrow--toppings hidden--always"
      }
    ></div>
  );
}
