import { useLocation, Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BreadCrumb = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  // const { category_id, subcategory_id } = useParams();
  const numericSegments = segments.filter((s) => /^\d+$/.test(s));
  const category_id = numericSegments.at(-1); // last number
  const subcategory_id =
    numericSegments.length > 1 ? numericSegments.at(-2) : null;
  const displaySegments = segments.filter(
    (seg) =>
      !/^\d+$/.test(seg) &&
      seg.toLowerCase() !== "rent-category" &&
      seg.toLowerCase() !== "rented-category"
  );

  const breadcrumb = [
    { name: "Home", to: "/" },
    ...displaySegments.map((seg, i) => {
      const displayName = seg
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { name: displayName, raw: seg, index: i };
    }),
  ];

  return (
    <nav className="py-4">
      <ol className="flex items-center justify-center gap-1 text-sm text-gray-600">
        {breadcrumb.map((b, idx) => {
          const isLast = idx === breadcrumb.length - 1;
          const isCategory = idx === 1 && category_id;
          const isSubCategory = idx === 2 && subcategory_id && category_id;

          let linkTo = "/";
          if (isCategory) {
            linkTo = `/rent-category/${b.raw}/${category_id}`;
          } else if (isSubCategory) {
            const categoryName = breadcrumb[1]?.raw;
            linkTo = `/rent-category/${categoryName}/${b.raw}/${subcategory_id}/${category_id}`;
          }

          return (
            <li key={idx} className="flex items-center gap-1 text-xl">
              {!isLast ? (
                <Link to={linkTo} className="hover:text-red-800">
                  {b.name}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{b.name}</span>
              )}
              {!isLast && <ChevronRight size={20} strokeWidth={1.75} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
