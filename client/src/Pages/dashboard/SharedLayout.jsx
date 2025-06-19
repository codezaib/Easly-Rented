import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import FooterSection from "../../Components/FooterSection";
import Cart from "../../Components/Cart";
import RelatedSearch from "../../Components/RelatedSearch";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const SharedLayout = () => {
  const { cartShown } = useSelector((store) => store.cart);
  const [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    if (cartShown) {
      document.body.style.overflowY = "clip";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartShown]);
  return (
    <div>
      <Header setInputFocus={setInputFocus} />
      <div
        className={`flex flex-row-reverse h-[calc(100vh-90px)] md:h-[calc(100vh-110px)] gap-x-4 fixed top-[80px] md:top-[100px] right-4 transition-all duration-300 ease-in-out transform z-25 ${
          cartShown
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <Cart />
        <RelatedSearch />
      </div>
      <Outlet context={{ inputFocus, setInputFocus }} />
      <FooterSection />
    </div>
  );
};

export default SharedLayout;
