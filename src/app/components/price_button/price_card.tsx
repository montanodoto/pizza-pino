"use client";
import Link from "next/link";
import "./index.css";

export default function PriceCard({ title, price, href }: any) {
  return (
    <Link href={`/product/${href}`} replace>
      <div
        style={{ padding: "1rem 0 1rem 0" }}
        className="pizza-container flex-column m-1 h-[66px] w-[111px] items-center justify-center rounded-sm border border-gray-300 bg-white p-2 text-center shadow-md transition-colors duration-150 hover:bg-red-500 hover:text-white"
      >
        <div className="pizza-wrapper flex items-center justify-center">
          <div className="pizza-icon"></div>
        </div>
        <p className=" m-0 uppercase  hover:text-white" style={{ fontSize: 9 }}>
          {title}
        </p>
        <p className=" font-bold hover:text-white" style={{ fontSize: 11 }}>
          {price}
        </p>
      </div>
    </Link>
  );
}
