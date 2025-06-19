import { useEffect, useRef, useState } from "react";
import bike from "../assets/images/bike.jpg";
import books from "../assets/images/books.jpg";
import camera from "../assets/images/camera.jpg";
import pet from "../assets/images/pet.jpg";
import { useOutletContext } from "react-router-dom";
const Hero = () => {
  const images = [bike, books, camera, pet];
  const [imageIndex, setImageIndex] = useState(0);
  const { inputFocus } = useOutletContext();
  const inputBox = useRef(null);
  console.log(inputFocus);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (inputFocus && inputBox.current) {
      inputBox.current.focus();
    }
  }, [inputFocus]);
  return (
    <div className="realtive h-screen">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`slide-${idx}`}
          className={`absolute inset-0 w-full h-full object-cover brightness-50 transition-opacity duration-500 ease-out ${
            idx === imageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
      <div className="absolute flex flex-col gap-y-[40px] left-1/2 top-1/2 -translate-1/2 z-20 w-4/5 md:w-3/5 items-center">
        <h1 className="text-amber-50 text-5xl md:text-6xl text-wrap text-center">
          Why buy when you can Rent Anything?
        </h1>
        <div className="flex bg-amber-100 h-[40px] w-full leading-[40px] focus-within">
          <span className="hidden md:block md:flex-[0.2] px-2 items-center">
            <i class="fa-solid fa-magnifying-glass-arrow-right"></i>
          </span>
          <input
            type="text"
            placeholder="search for your rented item"
            name="search"
            ref={inputBox}
            className={`flex-[5] md:flex-[4.3] h-full px-2 outline-none focus:ring-2`}
          />
          <select className="flex-[1] md:flex-[1.5] px-2 border-l-2 border-black-50 pr-2">
            <option value="Electronics">Electronics</option>
            <option value="Travel & Transport">Travel & Transport</option>
            <option value="Event & Party Supplies">
              Event & Party Supplies
            </option>
            <option value="Tools" selected>
              Tools
            </option>
            <option value="Home & Lifestyle">Home & Lifestyle</option>
          </select>
        </div>
        <div className="flex gap-x-4">
          <button className="h-auto px-4 py-2 text-amber-50 text-lg bg-red-700 cursor-pointer active:scale-90 transition-all ease-in">
            Rent Out
          </button>
          <button className="h-auto px-3 py-2 text-amber-50 text-lg bg-red-700 cursor-pointer active:scale-90 transition-all ease-in">
            Rent Now
          </button>
        </div>
      </div>
      <button className="p-2 flex gap-x-3 items-center text-red-600 absolute left-6 bottom-6 z-20 cursor-pointer bg-amber-50 text-lg">
        Discover Items <i class="fa-solid fa-arrow-down"></i>
      </button>
    </div>
  );
};

export default Hero;
