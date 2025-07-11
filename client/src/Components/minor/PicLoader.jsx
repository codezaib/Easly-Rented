import React from "react";

const PicLoader = ({ height }) => {
  return (
    <div
      className={`w-full h-[${height}px] animate-pulse bg-gray-100 rounded`}
    ></div>
  );
};

export default PicLoader;
