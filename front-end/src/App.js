import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./components/parts-page/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import Terms from "./components/parts-page/Terms";
import Questions from "./components/parts-page/Questions";
import LogIn from "./components/Account/LogIn";
import CreateAccount from "./components/Account/CreateAccount";
import Groups from "./components/group/Groups";
import My_cart from "./components/My_cart/My_cart";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/group" element={<Groups />} />
          <Route path="/card" element={<My_cart />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
