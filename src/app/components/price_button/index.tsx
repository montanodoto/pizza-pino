export default function PriceButton({ size, price }: any) {
  return (
    <div className="border-gray-300 rounded-md text-center p-1 shadow-md bg-white">
      <div className="flex justify-center items-center mb-2">
        <i className="fas fa-pizza-slice text-red-500"></i>{" "}
        {/* Replace with your desired icon */}
      </div>
      <p className="text-gray-700 text-xs">{size}</p>
      <p className="text-gray-700 text-xs">{price}</p>
    </div>
  );
}
