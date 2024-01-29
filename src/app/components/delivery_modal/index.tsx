// components/DeliveryModalComponent.js
"use client";

import { useState } from "react";
import Select from "@/app/components/Select";

export default function DeliveryModalComponent({ onClose }: any) {
  const [selectedAddress, setSelectedAddress] = useState("");
  const deliveryAddresses = [
    { value: "123 Main St", label: "123 Main St" },
    // Add other addresses here
  ];

  const isContinueButtonDisabled = !selectedAddress;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Select
        options={deliveryAddresses}
        placeholder="Select a Delivery Address"
        value={selectedAddress}
        onChange={setSelectedAddress}
      />
      <button
        className={`mt-4 p-2 text-white font-bold rounded ${
          isContinueButtonDisabled
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-red-500"
        }`}
        disabled={isContinueButtonDisabled}
        onClick={() => {
          if (!isContinueButtonDisabled) onClose();
        }}
      >
        CONTINUE
      </button>
    </div>
  );
}
