import { useEffect, useRef, useState } from "react";
import bike from "../assets/images/bike.jpg";
import books from "../assets/images/books.jpg";
import camera from "../assets/images/camera.jpg";
import pet from "../assets/images/pet.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  const images = [bike, books, camera, pet];
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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
        <div className="flex items-center bg-white w-full h-10  overflow-hidden">
          <span className="flex items-center justify-center px-3 text-black">
            <i className="fa-solid fa-magnifying-glass-arrow-right"></i>
          </span>

          <input
            type="text"
            placeholder="Search for your rented item"
            name="search"
            className="flex-grow px-3 h-full outline-none text-sm bg-transparent focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div className="flex gap-x-4">
          <Link
            to={"/account/login"}
            className="h-auto px-4 py-2 text-amber-50 text-lg bg-red-700 cursor-pointer active:scale-90 transition-all ease-in"
          >
            Rent Out
          </Link>
          <Link
            to={"/categories"}
            className="h-auto px-3 py-2 text-amber-50 text-lg bg-red-700 cursor-pointer active:scale-90 transition-all ease-in"
          >
            Rent Now
          </Link>
        </div>
      </div>
      <a
        href="#categories"
        className="p-2  flex gap-x-3 items-center text-red-600 absolute left-6 bottom-6 z-20 cursor-pointer bg-amber-50 text-lg hidden md:block"
      >
        Discover Items <i class="fa-solid fa-arrow-down"></i>
      </a>
    </div>
  );
};

export default Hero;
