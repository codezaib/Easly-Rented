import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import FooterSection from "../../Components/FooterSection";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import CartContainer from "../../Components/CartContainer";
import SearchSection from "../../Components/SearchSection";
import { AnimatePresence } from "framer-motion";
const SharedLayout = () => {
  const { cartShown } = useSelector((store) => store.cart);
  const [openSearch, setOpenSearch] = useState(false);
  useEffect(() => {
    if (cartShown || openSearch) {
      document.body.style.overflowY = "clip";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartShown, openSearch]);
  return (
    <div>
      <Header setOpenSearch={setOpenSearch} />
      <AnimatePresence mode="wait">
        {cartShown && <CartContainer />}
      </AnimatePresence>
      <Outlet />
      <FooterSection />
      <AnimatePresence mode="wait">
        {openSearch && <SearchSection onClose={() => setOpenSearch(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default SharedLayout;
