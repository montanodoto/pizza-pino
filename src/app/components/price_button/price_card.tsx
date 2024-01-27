import "./index.css";

export default function PriceCard({ title, price }: any) {
  return (
    <div
      style={{ padding: "1rem 0 1rem 0" }}
      className="pizza-container w-[111px] h-[66px] flex-column justify-center items-center border border-gray-300 rounded-sm text-center p-2 m-1 shadow-md bg-white hover:bg-red-500 hover:text-white transition-colors duration-150"
    >
      <div className="pizza-wrapper flex justify-center items-center">
        <div className="pizza-icon"></div>
      </div>
      <p className=" hover:text-white m-0  uppercase" style={{ fontSize: 9 }}>
        {title}
      </p>
      <p className=" hover:text-white font-bold" style={{ fontSize: 11 }}>
        {price}
      </p>
    </div>
  );
}
