import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "@core/Theme";
import Home from "@pages/Home";
import Login from "@pages/Login";

const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
