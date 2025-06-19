import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/dashboard/SharedLayout";
import Home from "./Pages/dashboard/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
