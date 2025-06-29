import React from "react";

const InputNumber = () => {
  return (
    <span className="flex w-2/3 border-1 border-gray-300 rounded  px-1 h-[24px] items-center justify-between justify-self-end">
      <i class="fa-solid fa-minus text-red-500 cursor-pointer"></i>
      <input
        type="text"
        value={1}
        className="h-full px-[10px] w-[30px] outline-none border-y-0 border-1 border-l border-r border-dotted border-gray-300"
      />
      <i class="fa-solid fa-plus  text-red-500 cursor-pointer"></i>
    </span>
  );
};

export default InputNumber;
