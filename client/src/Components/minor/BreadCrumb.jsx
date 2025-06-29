import { useLocation, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BreadCrumb = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumb = [
    { name: "Home", to: "/" },
    ...segments
      .map((seg, i) => ({
        name: seg.charAt(0).toUpperCase() + seg.slice(1),
        to: "/" + segments.slice(0, i + 1).join("/"),
      }))
      .filter((item) => item.name.toLowerCase() !== "rent-category"),
  ];
  return (
    <nav className="py-4">
      <ol className="flex items-center justify-center gap-1 text-sm text-gray-600">
        {breadcrumb.map((b, idx) => {
          const isLast = idx == breadcrumb.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1 text-xl">
              {!isLast ? (
                <Link to={b.to} className="hover:text-red-800">
                  {b.name}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{b.name}</span>
              )}
              {idx !== breadcrumb.length - 1 && (
                <ChevronRight size={20} strokeWidth={1.75} />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
