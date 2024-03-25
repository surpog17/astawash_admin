import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const NoRecords = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center py-3">
      <AiOutlineExclamationCircle className="text-gray-500 text-4xl mb-4" />
      <h2 className="text-lg font-semibold text-gray-600">{title}</h2>
      <p className="text-sm text-gray-400">No records found.</p>
    </div>
  );
};

export default NoRecords;
