"use client";

import { useState } from "react";
import Review from "./Review";
import OrderHistory from "./OrderHistory";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Orders");

  const tabs = [
    { key: "Orders", label: "Orders" },
    { key: "Wishlist", label: "Wishlist" },
    { key: "Review", label: "Review" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Wishlist":
        return <div>Your saved wishlist items.</div>;
      case "Review":
        return <Review />;
      default:
        return <OrderHistory />;
    }
  };

  return (
    // <div className="w-full">
    //   {/* Tab Headers */}
    //   <div className="border-b border-gray-200 bg-white">
    //     <div className="flex space-x-8 px-6">
    //       {tabs.map((tab) => (
    //         <button
    //           key={tab.key}
    //           onClick={() => setActiveTab(tab.key)}
    //           className={`relative py-4 px-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap
    //             ${activeTab === tab.key
    //               ? "text-black border-b-2 border-indigo-600"
    //               : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
    //             }`}
    //           aria-pressed={activeTab === tab.key}
    //         >
    //           {tab.label}
    //         </button>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Tab Content */}
    //   <div className="bg-white p-6 min-h-[400px]">
    //     <div className="max-w-full">
    //       {Content()}
    //     </div>
    //   </div>
    // </div>


    <div className="w-full mx-auto p-8">
      <div className="flex bg-gray-200 rounded-lg p-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 mx-1 text-sm font-medium rounded-md transition-all duration-200 ${activeTab === tab.key
              ? 'text-gray-900 bg-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            aria-pressed={activeTab === tab.key}
          >
            {tab.label}
          </button>
        ))}
      </div>


      <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {Content()}
        </h3>
      </div>
    </div>
  );
};

export default Tab;
