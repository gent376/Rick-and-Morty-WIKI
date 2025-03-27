import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="w-16 h-16 border-4 border-[#7de25c] border-solid border-t-[#00b4ca] rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
