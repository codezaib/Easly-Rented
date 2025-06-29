import React from "react";

const RelatedProductCard = ({ image, name, price }) => {
  return (
    <div className="flex flex-col bg-white rounded-sm overflow-hidden w-full">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="pt-2 flex flex-col">
        <h3 className="text-base font-light text-black">{name}</h3>
        <p className="text-slate-900 font-extralight text-sm">${price}</p>
      </div>
    </div>
  );
};

export default RelatedProductCard;
