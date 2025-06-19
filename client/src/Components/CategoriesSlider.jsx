import { useEffect, useRef, useState } from "react";

const CategoriesSlider = () => {
  const imagePath = "/categories/";
  const images = [
    "baby.png",
    "house.png",
    "travel.png",
    "electronics.png",
    "fashion.png",
    "education.png",
    "outdoor.png",
    "party.png",
    "tools.png",
    "media.png",
    "adventure.png",
    "lifestyle.png",
    "transport.png",
  ];
  const extendedImages = [...images, ...images];

  const [translateX, setTranslateX] = useState(0);
  useEffect(() => {
    const step = 120;
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const maxScroll = step * images.length;
        const next = prev + step;
        return next >= maxScroll ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden p-3 bg-white my-[30px]">
      <div
        className="flex gap-x-5 w-max overflow-x-hidden transition-transform duration-700 ease-in-out"
        style={{
          scrollBehavior: "smooth",
          transform: `translateX(-${translateX}px)`,
        }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="group flex flex-col items-center gap-y-1.5 w-[120px] min-w-[120px] cursor-pointer flex-shrink-0"
          >
            <img
              src={`${imagePath}${image}`}
              alt={image}
              className="w-12 h-12 object-contain"
            />
            <h3 className="text-[16px] font-extralight transition-all ease-in group-hover:text-[17px]">
              {image.replace(".png", "").charAt(0).toUpperCase() +
                image.replace(".png", "").slice(1)}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSlider;
