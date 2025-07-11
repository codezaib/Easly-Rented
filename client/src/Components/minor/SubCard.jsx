import { Link } from "react-router-dom";
import PicLoader from "./PicLoader";
import { useState } from "react";

const SubCard = ({ active, sub }) => {
  const [picLoading, setPicLoading] = useState(true);

  return (
    <Link
      to={`/rent-category/${active.name}/${sub.name}/${sub.id}/${active.id}`}
      key={sub.name}
      className="block text-center text-md space-y-2
                 group relative"
    >
      {picLoading && <PicLoader height={200} />}

      <img
        src={sub.image}
        alt={sub.name}
        loading="lazy"
        onLoad={() => setPicLoading(false)}
        className={`object-cover mb-3 rounded-t-lg h-[200px] w-[250px] overflow-hidden transform transition-transform duration-300 group-hover:scale-105 ${
          picLoading
            ? "opacity-0 absolute top-0 left-0"
            : "opacity-100 relative"
        }`}
      />

      <big>{sub.name}</big>
    </Link>
  );
};

export default SubCard;
