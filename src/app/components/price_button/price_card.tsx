export default function PriceCard({ title, price }: any) {
  return (
    <div
      style={{ padding: "1rem 0 1rem 0" }}
      className="w-[111px] h-[66px] flex-column justify-center items-center border border-gray-300 rounded-md text-center p-2 m-1 shadow-md bg-white hover:bg-red-500 hover:text-white transition-colors duration-150"
    >
      <div className="flex justify-center items-center">
        <i className="fas fa-pizza-slice text-red-500 hover:text-white text-2xl"></i>
      </div>
      <p className="text-gray-700 hover:text-white m-0 uppercase text-xs">
        {title}
      </p>
      <p className="text-gray-700 hover:text-white text-xs">{price}</p>
    </div>
  );
}
