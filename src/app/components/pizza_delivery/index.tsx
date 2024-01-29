// components/MainModalComponent.js
"use client";
import { useState } from "react";

const MainModalComponent = ({ children }: any) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white rounded-lg">
        <div className="text-center p-8 m-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Online Pizza Delivery Menu Sign-In
          </h2>
          <hr />
          <p className="text-gray-500 mb-6">
            Tell us where you want your food, and when you would like us to have
            it ready for you.
          </p>
          <div className="flex justify-around mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainModalComponent;
