// components/PickupModalComponent.js
"use client";

import { useState } from "react";
import Select from "@/app/components/Select";

export default function PickupModalComponent({ onClose }: any) {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStore, setSelectedStore] = useState("");
  const cities = [
    { value: "New York", label: "New York" },
    // Add other cities here
  ];
  const stores = [
    { value: "Store 1", label: "Store 1" },
    // Add other stores here
  ];

  const isContinueButtonDisabled = !(selectedCity && selectedStore);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Select
        options={cities}
        placeholder="Select a City"
        value={selectedCity}
        onChange={setSelectedCity}
      />
      <Select
        options={stores}
        placeholder="Select a Store"
        value={selectedStore}
        onChange={setSelectedStore}
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
