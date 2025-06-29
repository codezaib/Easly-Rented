import { Link } from "react-router-dom";

const Card = ({ image, title, description, btn }) => (
  <div className="flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden w-full h-full">
    <img src={image} alt={title} className="w-full h-42 object-cover" />
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={btn === "Give on Rent" ? "/account/login" : "/categories"}
        className="bg-[#fff5f1] hover:bg-[#c10007] hover:text-[#fff5f1] cursor-pointer text-[#c10007] px-4 py-3 rounded-xl transition"
      >
        {btn}
      </Link>
    </div>
  </div>
);

export default Card;
