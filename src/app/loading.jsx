import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

        <h2 className="text-lg font-semibold">
          Loading...
        </h2>

        <p className="text-sm text-gray-500">
          Please wait while we load your content.
        </p>
      </div>
    </div>
  );
};

export default Loading;