import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import FooterSection from "../../Components/FooterSection";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartContainer from "../../Components/CartContainer";
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
      <CartContainer />
      <Outlet context={{ inputFocus, setInputFocus }} />
      <FooterSection />
    </div>
  );
};

export default SharedLayout;
